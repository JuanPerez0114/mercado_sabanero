const { calcularPuntos } = require('../src/puntos');

describe('HU-06. Puntos de fidelidad', () => {
  test.each([
    ['CP-35', 999, 0],
    ['CP-36', 1000, 1],
    ['CP-37', 1999, 1],
  ])(
    '%s: con $%i sin envío se ganan %i puntos',
    (caso, totalSinEnvio, puntosEsperados) => {
      // Act (ejecutar)
      const puntos = calcularPuntos(totalSinEnvio);

      // Assert (verificar)
      expect(puntos).toBe(puntosEsperados);
    }
  );

  test('CP-38: cliente ORO con $250.515 sin envío recibe el doble (500 puntos)', () => {
    // Arrange (preparar)
    const totalSinEnvio = 250515;
    const categoria = 'ORO';

    // Act (ejecutar)
    const puntos = calcularPuntos(totalSinEnvio, categoria);

    // Assert (verificar)
    expect(puntos).toBe(500);
  });

  test('CP-39: el envío no cuenta para los puntos (total $26.000 con envío $8.000 da 18 puntos)', () => {
    // Arrange (preparar)
    const total = 26000;
    const envio = 8000;
    const totalSinEnvio = total - envio;

    // Act (ejecutar)
    const puntos = calcularPuntos(totalSinEnvio);

    // Assert (verificar)
    expect(puntos).toBe(18);
  });
});