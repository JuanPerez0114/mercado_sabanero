const { calcularIvaLinea } = require('../src/iva');

describe('HU-02. Calcular el IVA', () => {
  test.each([
    [100000, 0, 0],
    [100000, 5, 5000],
    [100000, 19, 19000],
  ])('IVA de una línea de $%i con tarifa %i%% es $%i', (valor, tarifa, esperado) => {
    // Act (ejecutar)
    const iva = calcularIvaLinea(valor, tarifa);

    // Assert (verificar)
    expect(iva).toBe(esperado);
  });

    test('calcula el IVA sobre el valor con el descuento aplicado', () => {
    // Arrange (preparar): $180.000 con 5 % de descuento = $171.000
    const valor = 180000;

    // Act (ejecutar)
    const iva = calcularIvaLinea(valor, 19, 5);

    // Assert (verificar)
    expect(iva).toBe(32490);
  });

  test('redondea el IVA al peso más cercano', () => {
    // Act (ejecutar): 4.510 * 19 % = 856,9
    const iva = calcularIvaLinea(4510, 19);

    // Assert (verificar)
    expect(iva).toBe(857);
  });
});