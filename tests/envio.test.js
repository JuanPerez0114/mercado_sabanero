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

    test('CP-32: con productos con IVA de $149.999 el envío a Sincelejo sigue costando $8.000', () => {
    // Arrange (preparar)
    const municipio = 'Sincelejo';
    const productosConIva = 149999;

    // Act (ejecutar)
    const envio = calcularEnvio(municipio, productosConIva);

    // Assert (verificar)
    expect(envio).toBe(8000);
  });

    test('CP-33: con productos con IVA de $150.000 el envío es gratis', () => {
    // Arrange (preparar)
    const municipio = 'Sincelejo';
    const productosConIva = 150000;

    // Act (ejecutar)
    const envio = calcularEnvio(municipio, productosConIva);

    // Assert (verificar)
    expect(envio).toBe(0);
  });

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
