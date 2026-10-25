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