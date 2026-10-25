const { calcularPuntos } = require('../src/puntos');

describe('HU-06. Puntos de fidelidad', () => {
  test('CP-35: con $999 sin envío no se gana ningún punto', () => {
    // Arrange (preparar)
    const totalSinEnvio = 999;

    // Act (ejecutar)
    const puntos = calcularPuntos(totalSinEnvio);

    // Assert (verificar)
    expect(puntos).toBe(0);
  });
});