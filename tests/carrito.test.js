const { Carrito } = require('../src/carrito');

describe('HU-01. Agregar productos al carrito', () => {
  test('agregar 1 unidad deja el producto en el carrito con esa cantidad', () => {
    // Arrange (preparar)
    const inventario = { obtenerStock: jest.fn().mockReturnValue(100) };
    const carrito = new Carrito(inventario);
    const licuadora = { id: 'LIC-1', precio: 180000, iva: 19 };

    // Act (ejecutar)
    carrito.agregar(licuadora, 1);

    // Assert (verificar)
    expect(carrito.obtenerItems()[0].cantidad).toBe(1);
  });
});