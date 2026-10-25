function porcentajeDescuentoVolumen(subtotal) {
  if (subtotal >= 500000) return 10;
  if (subtotal >= 200000) return 5;
  return 0;
}

function calcularDescuento(subtotal, porcentaje) {
  return Math.round((subtotal * porcentaje) / 100);
}

module.exports = { porcentajeDescuentoVolumen, calcularDescuento };