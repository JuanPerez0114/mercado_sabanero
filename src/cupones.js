const { CuponInvalidoError } = require('./errores');

function aplicarCupon(codigo, subtotal) {
  if (codigo === 'SABANERO10') {
    if (subtotal < 50000) {
      throw new CuponInvalidoError();
    }
    return subtotal * 0.10;
  }
}

module.exports = { aplicarCupon };