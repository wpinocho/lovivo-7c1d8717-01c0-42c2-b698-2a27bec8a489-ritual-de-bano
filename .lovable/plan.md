## Respuestas a tus 3 preguntas

### 1. ¿Se puede forzar "máximo 1 botón, Stripe decide cuál" con Express Checkout Element (la API actual)?

**Sí, técnicamente**, pasando `layout: { maxColumns: 1, maxRows: 1, overflow: 'never' }` al `ExpressCheckoutElement`. Stripe entonces muestra solo el primer botón según su orden interno (Apple Pay > Google Pay > Link en navegadores compatibles).

**Pero tiene un problema clave**: Stripe **no expone qué wallet eligió** cuando hay overflow desactivado, y el orden interno **no coincide siempre con tu prioridad deseada** (por ejemplo, en Chrome desktop sin Apple Pay, Stripe puede priorizar Link sobre Google Pay aunque tú prefieras lo contrario). No hay un parámetro tipo `preferredWallet`.

Además, el bug que viste antes (botones desaparecidos) fue por intentar forzar prioridad con `paymentMethods.X = 'never'` en el primer render — antes de que `onReady` dispare. El deadlock se evita con `layout` en lugar de `paymentMethods`.

### 2. ¿Qué tan mal sería usar Payment Request Button (legacy)?

**Lo confirmo con docs oficiales de Stripe** — esto es exactamente lo que necesitas:

> "The Payment Request Button **only shows one payment option**. Customers see Apple Pay, Google Pay, or Link based on browser and active session."

Y Stripe documenta literalmente la priorización que mencionaste:


| Browser + estado                                         | Botón mostrado |
| -------------------------------------------------------- | -------------- |
| Safari + Apple Pay habilitado                            | Apple Pay      |
| Chrome + Link autenticado                                | **Link**       |
| Chrome + Google Pay habilitado y Link **NO** autenticado | Google Pay     |
| Chrome iOS con Apple Pay y Google Pay habilitados        | Apple Pay      |


**Diferencia crítica vs Express Checkout Element**: `paymentRequest.canMakePayment()` devuelve `null` si **no hay método activo/autenticado** → puedes ocultar el bloque. Esto es lo que querías: no mostrar Link si el user no está autenticado.

**Sobre "legacy"**: Stripe lo marca como legacy pero **sigue 100% soportado y funcional**. No hay anuncio de deprecation/removal. Significa "no recibirá nuevas features" (ej. PayPal, Amazon Pay, Klarna express) — pero Apple Pay/GPay/Link seguirán funcionando. El cambio reciente en Stripe.js (marzo 2026) que removió métodos legacy fue sobre `handleCardPayment`, `confirmPaymentIntent`, `createSource` — **no tocó Payment Request Button**.

**Riesgo realista**: bajo. Muchas tiendas grandes (incluida Substack hasta hace poco) lo siguen usando. Si en 2-3 años Stripe lo deprecara con un anuncio formal, migras en ese momento.

### 3. ¿Puedo usar PRB solo en PDP y mantener Express Checkout Element en `/pagar`?

**Sí, sin conflictos**. Son dos componentes independientes de Stripe Elements; pueden coexistir en el mismo proyecto sin afectarse. De hecho es el patrón ideal:

- `**/pagar` (Express Checkout Element)**: usuario ya comprometido, mostrar todos los wallets disponibles (incluido Link como guest-friendly). Sin cambios.
- **PDP (Payment Request Button)**: filtrar por sesión activa, mostrar solo 1 botón con tu prioridad. Reduce fricción y evita "ayudar a Stripe a captar usuarios de Link".

## Recomendación

**Migrar PDP a Payment Request Button** y dejar checkout como está.

Beneficios:

- 1 solo botón (lo que queremos para PDP)
- Solo aparece si hay método autenticado real (Apple Pay con tarjeta, GPay con tarjeta, Link autenticado)
- Si no hay nada, el bloque se oculta completamente → no hay clutter
- Prioridad ya viene resuelta por la API + browser, alineada con lo que pediste

## Plan de implementación

### Cambios

`**src/components/ProductExpressCheckout.tsx**` — reescribir para usar `PaymentRequestButtonElement`:

```tsx
const pr = stripe.paymentRequest({
  country: 'MX',
  currency: currencyCode.toLowerCase(),
  total: { label: product.title, amount: totalCents },
  requestPayerName: true,
  requestPayerEmail: true,
  requestPayerPhone: true,
  requestShipping: true,
  shippingOptions: [{ id: 'standard', label: 'Envío estándar', amount: 0, detail: '' }],
})

const result = await pr.canMakePayment()
// result === null → ocultar bloque (no hay wallet autenticado)
// result.applePay/googlePay/link → Stripe ya eligió el correcto

if (result) {
  setPaymentRequest(pr)
}
```

**Render condicional**:

```tsx
{paymentRequest && (
  <PaymentRequestButtonElement
    options={{
      paymentRequest,
      style: { paymentRequestButton: { type: 'default', theme: 'dark', height: '44px' } }
    }}
  />
)}
```

**Handlers**:

- `pr.on('paymentmethod', async (ev) => { ... })` — reusar la lógica actual de `handleConfirm` (crear order via `checkout-create`, crear PaymentIntent, confirmar con `stripe.confirmCardPayment(clientSecret, { payment_method: ev.paymentMethod.id })`, llamar `ev.complete('success')` o `ev.complete('fail')`).
- Mantener tracking de `trackPurchase`, `clearCart`, navigate a `/gracias/:orderId`.

`**src/pages/ui/ProductPageUI.tsx**` — ningún cambio. La prop `onAvailabilityChange` sigue funcionando igual; solo se llamará cuando `canMakePayment()` resuelva con un objeto no-null.

`**/pagar` (`src/components/StripePayment.tsx` y `ExpressCheckoutSection`)** — sin cambios. Mantiene Express Checkout Element con todos los wallets como hoy.

### Resultado esperado en PDP


| Escenario                                            | Lo que verá el usuario                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------------------------ |
| Safari iOS con Apple Pay configurado                 | Botón Apple Pay                                                                |
| Chrome desktop con sesión Link activa                | Botón Link                                                                     |
| Chrome Android con GPay configurado, sin Link auth   | Botón Google Pay                                                               |
| Firefox sin wallets, o Link sin sesión y sin GPay/AP | **Bloque oculto** (vuelve a verse solo "Agregar al carrito" + "Comprar ahora") |


### Notas técnicas

- `requestShipping: true` es necesario porque sin él, los wallets no piden dirección y `checkout-create` falla por validación.
- Apple Pay requiere el archivo de verificación de dominio en `public/.well-known/apple-developer-merchantid-domain-association` (lo registramos como tarea pendiente, no bloquea esto).
- El `clientSecret` se sigue obteniendo de `payments-create-intent` igual que hoy. Solo cambia la confirmación: `stripe.confirmCardPayment(clientSecret, { payment_method: ev.paymentMethod.id })` en vez de `stripe.confirmPayment({ elements, ... })`.
- Mantenemos lazy-mount con IntersectionObserver para no cargar Stripe.js eagerly.