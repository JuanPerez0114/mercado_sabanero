function porcentajeDescuentoVolumen(subtotal) {
  if (subtotal >= 500000) return 10;
  if (subtotal >= 200000) return 5;
  return 0;
}

module.exports = { porcentajeDescuentoVolumen };