const { CuponInvalidoError } = require('./errores');

const VENCE_SABANERO10 = '2026-12-31';

function aplicarCupon(codigo, subtotal, fechaUso) {
  if (codigo === 'SABANERO10') {
    if (fechaUso !== undefined && fechaUso > VENCE_SABANERO10) {
      throw new CuponInvalidoError();
    }
    if (subtotal < 50000) {
      throw new CuponInvalidoError();
    }
    return subtotal * 0.10;
  }
  throw new CuponInvalidoError();
}

function aplicarEnvioGratis(codigo, envio) {
  if (codigo === 'ENVIOGRATIS') {
    return 0;
  }
}

module.exports = { aplicarCupon, aplicarEnvioGratis };