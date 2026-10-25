const { aplicarCupon } = require('../src/cupones');
const { CuponInvalidoError } = require('../src/errores');

describe('HU-04. Cupones de descuento', () => {
  test('SABANERO10 da 10% con subtotal de $50.000', () => {
    // Arrange (preparar)
    const subtotal = 50000;

    // Act (ejecutar)
    const descuento = aplicarCupon('SABANERO10', subtotal);

    // Assert (verificar)
    expect(descuento).toBe(5000);
  });

  test('SABANERO10 se rechaza con subtotal de $49.999', () => {
    // Arrange (preparar)
    const subtotal = 49999;

    // Act + Assert (ejecutar y verificar)
    expect(() => aplicarCupon('SABANERO10', subtotal)).toThrow(CuponInvalidoError);
  });
});