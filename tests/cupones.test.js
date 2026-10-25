const { aplicarCupon } = require('../src/cupones');

describe('HU-04. Cupones de descuento', () => {
  test('SABANERO10 da 10% con subtotal de $50.000', () => {
    // Arrange (preparar)
    const subtotal = 50000;

    // Act (ejecutar)
    const descuento = aplicarCupon('SABANERO10', subtotal);

    // Assert (verificar)
    expect(descuento).toBe(5000);
  });
});const { aplicarCupon } = require('../src/cupones');

describe('HU-04. Cupones de descuento', () => {
  test('SABANERO10 da 10% con subtotal de $50.000', () => {
    // Arrange (preparar)
    const subtotal = 50000;

    // Act (ejecutar)
    const descuento = aplicarCupon('SABANERO10', subtotal);

    // Assert (verificar)
    expect(descuento).toBe(5000);
  });
});