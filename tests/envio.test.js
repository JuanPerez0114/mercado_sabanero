const { calcularEnvio, calcularTotal } = require('../src/envio');

describe('HU-05. Costo de envío', () => {
  test('CP-30: el envío dentro de Sincelejo cuesta $8.000', () => {
    // Arrange (preparar)
    const municipio = 'Sincelejo';

    // Act (ejecutar)
    const envio = calcularEnvio(municipio);

    // Assert (verificar)
    expect(envio).toBe(8000);
  });

  test('CP-31: el envío a otro municipio de Sucre (Corozal) cuesta $15.000', () => {
    // Arrange (preparar)
    const municipio = 'Corozal';

    // Act (ejecutar)
    const envio = calcularEnvio(municipio);

    // Assert (verificar)
    expect(envio).toBe(15000);
  });

  test.each([
    ['CP-32', 149999, 8000],
    ['CP-33', 150000, 0],
  ])(
    '%s: con productos con IVA de $%i el envío a Sincelejo es $%i',
    (caso, productosConIva, envioEsperado) => {
      // Act (ejecutar)
      const envio = calcularEnvio('Sincelejo', productosConIva);

      // Assert (verificar)
      expect(envio).toBe(envioEsperado);
    }
  );

  test('CP-34: el total de 4 arroces de $4.500 a Sincelejo es $26.000', () => {
    // Arrange (preparar)
    const subtotal = 4 * 4500;
    const descuento = 0;
    const iva = 0;
    const envio = calcularEnvio('Sincelejo', subtotal);

    // Act (ejecutar)
    const total = calcularTotal(subtotal, descuento, iva, envio);

    // Assert (verificar)
    expect(total).toBe(26000);
  });
});