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

    test('CP-36: con $1.000 exactos sin envío se gana 1 punto', () => {
    // Arrange (preparar)
    const totalSinEnvio = 1000;

    // Act (ejecutar)
    const puntos = calcularPuntos(totalSinEnvio);

    // Assert (verificar)
    expect(puntos).toBe(1);
  });

    test('CP-37: con $1.999 sin envío solo cuentan los miles completos (1 punto)', () => {
    // Arrange (preparar)
    const totalSinEnvio = 1999;

    // Act (ejecutar)
    const puntos = calcularPuntos(totalSinEnvio);

    // Assert (verificar)
    expect(puntos).toBe(1);
  });
});