const { porcentajeDescuentoVolumen, calcularDescuento } = require('../src/descuentos');

describe('HU-03. Descuento por volumen', () => {
  test.each([
    [0, 0],
    [199999, 0],
    [200000, 5],
    [499999, 5],
    [500000, 10],
    [1000000, 10],
  ])('subtotal $%i recibe %i%% de descuento', (subtotal, esperado) => {
    // Act (ejecutar)
    const porcentaje = porcentajeDescuentoVolumen(subtotal);

    // Assert (verificar)
    expect(porcentaje).toBe(esperado);
  });

    test('calcula el valor del descuento sobre el subtotal', () => {
    // Act (ejecutar)
    const descuento = calcularDescuento(228000, 5);

    // Assert (verificar)
    expect(descuento).toBe(11400);
  });

  test('redondea el descuento al peso más cercano', () => {
    // Act (ejecutar): 200.010 * 5 % = 10.000,5
    const descuento = calcularDescuento(200010, 5);

    // Assert (verificar)
    expect(descuento).toBe(10001);
  });
});