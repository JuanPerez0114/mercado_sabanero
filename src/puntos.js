const VALOR_POR_PUNTO = 1000;

function calcularPuntos(totalSinEnvio) {
  return Math.floor(totalSinEnvio / VALOR_POR_PUNTO);
}

module.exports = { calcularPuntos };