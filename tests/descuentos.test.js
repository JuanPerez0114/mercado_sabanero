const { porcentajeDescuentoVolumen } = require('../src/descuentos');

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
});