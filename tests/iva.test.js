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
});