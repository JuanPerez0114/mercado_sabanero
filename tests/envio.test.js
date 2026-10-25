const { calcularEnvio } = require('../src/envio');

describe('HU-05. Costo de envío', () => {
  test('CP-30: el envío dentro de Sincelejo cuesta $8.000', () => {
    // Arrange (preparar)
    const municipio = 'Sincelejo';

    // Act (ejecutar)
    const envio = calcularEnvio(municipio);

    // Assert (verificar)
    expect(envio).toBe(8000);
  });

  



});
