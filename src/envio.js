const ENVIO_SINCELEJO = 8000;
const ENVIO_OTRO_MUNICIPIO = 15000;

function calcularEnvio(municipio) {
  if (municipio === 'Sincelejo') {
    return ENVIO_SINCELEJO;
  }
  return ENVIO_OTRO_MUNICIPIO;
}

module.exports = { calcularEnvio };
