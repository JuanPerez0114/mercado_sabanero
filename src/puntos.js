const VALOR_POR_PUNTO = 1000;
const MULTIPLICADOR_ORO = 2;

function calcularPuntos(totalSinEnvio, categoria) {
  const puntos = Math.floor(totalSinEnvio / VALOR_POR_PUNTO);
  if (categoria === 'ORO') {
    return puntos * MULTIPLICADOR_ORO;
  }
  return puntos;
}

module.exports = { calcularPuntos };