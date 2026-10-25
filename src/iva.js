function calcularIvaLinea(valorLinea, tarifaIva) {
  return Math.round((valorLinea * tarifaIva) / 100);
}

module.exports = { calcularIvaLinea };
