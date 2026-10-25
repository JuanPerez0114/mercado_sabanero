function calcularIvaLinea(valorLinea, tarifaIva, descuentoPct = 0) {
  return Math.round((valorLinea * (100 - descuentoPct) * tarifaIva) / 10000);
}

module.exports = { calcularIvaLinea };