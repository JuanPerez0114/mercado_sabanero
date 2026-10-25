const { aplicarCupon, aplicarEnvioGratis, aplicarMayorDescuento } = require('../src/cupones');
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

  test('CP-24: ENVIOGRATIS deja el envío en $0 en compra pequeña a Corozal', () => {
    // Arrange (preparar)
    const envioCorozal = 15000;

    // Act (ejecutar)
    const envioFinal = aplicarEnvioGratis('ENVIOGRATIS', envioCorozal);

    // Assert (verificar)
    expect(envioFinal).toBe(0);
  });

  test('CP-25: un cupón inexistente lanza CuponInvalidoError', () => {
    // Arrange (preparar)
    const subtotal = 60000;

    // Act + Assert (ejecutar y verificar)
    expect(() => aplicarCupon('NOEXISTE', subtotal)).toThrow(CuponInvalidoError);
  });

    test('CP-26: un cupón vencido lanza CuponInvalidoError', () => {
    // Arrange (preparar)
    const subtotal = 60000;
    const fechaUso = '2027-01-01';

    // Act + Assert (ejecutar y verificar)
    expect(() => aplicarCupon('SABANERO10', subtotal, fechaUso)).toThrow(CuponInvalidoError);
  });

    test('CP-27: un cupón que vence hoy sigue siendo válido', () => {
    // Arrange (preparar)
    const subtotal = 50000;
    const fechaUso = '2026-12-31';

    // Act (ejecutar)
    const descuento = aplicarCupon('SABANERO10', subtotal, fechaUso);

    // Assert (verificar)
    expect(descuento).toBe(5000);
  });

    test('CP-28: con volumen 5% y SABANERO10 se aplica solo el 10% del cupón', () => {
    // Arrange (preparar)
    const subtotal = 228000;
    const descuentoVolumen = 11400;

    // Act (ejecutar)
    const descuento = aplicarMayorDescuento('SABANERO10', subtotal, descuentoVolumen);

    // Assert (verificar)
    expect(descuento).toBe(22800);
  });
  
    test('CP-29: con volumen 10% y SABANERO10 se aplica solo 10%, sin sumar', () => {
    // Arrange (preparar)
    const subtotal = 300000;
    const descuentoVolumen = 30000;

    // Act (ejecutar)
    const descuento = aplicarMayorDescuento('SABANERO10', subtotal, descuentoVolumen);

    // Assert (verificar)
    expect(descuento).toBe(30000);
  });



});