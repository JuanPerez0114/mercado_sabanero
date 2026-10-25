const ENVIO_SINCELEJO = 8000;
const ENVIO_OTRO_MUNICIPIO = 15000;
const UMBRAL_ENVIO_GRATIS = 150000;

function calcularEnvio(municipio, productosConIva) {
  if (productosConIva >= UMBRAL_ENVIO_GRATIS) {
    return 0;
  }
  if (municipio === 'Sincelejo') {
    return ENVIO_SINCELEJO;
  }
  return ENVIO_OTRO_MUNICIPIO;
}

function calcularTotal(subtotal, descuento, iva, envio) {
  return subtotal - descuento + iva + envio;
}

module.exports = { calcularEnvio, calcularTotal };