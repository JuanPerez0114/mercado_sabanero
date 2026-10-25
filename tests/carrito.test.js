const { Carrito } = require('../src/carrito');
const { CantidadInvalidaError, StockInsuficienteError } = require('../src/errores');

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

  test.each([[0], [51]])(
    'rechaza con CantidadInvalidaError al agregar %i unidades',
    (cantidad) => {
      // Arrange (preparar)
      const inventario = { obtenerStock: jest.fn().mockReturnValue(100) };
      const carrito = new Carrito(inventario);
      const licuadora = { id: 'LIC-1', precio: 180000, iva: 19 };

      // Act + Assert (ejecutar y verificar)
      expect(() => carrito.agregar(licuadora, cantidad)).toThrow(CantidadInvalidaError);
    }
  );

    test('informa stock insuficiente cuando el inventario tiene menos de lo pedido', () => {
    // Arrange (preparar)
    const inventario = { obtenerStock: jest.fn().mockReturnValue(3) };
    const carrito = new Carrito(inventario);
    const licuadora = { id: 'LIC-1', precio: 180000, iva: 19 };

    // Act + Assert (ejecutar y verificar)
    expect(() => carrito.agregar(licuadora, 4)).toThrow(StockInsuficienteError);
    expect(inventario.obtenerStock).toHaveBeenCalledWith('LIC-1');
  });

    test('suma las cantidades cuando el producto ya está en el carrito', () => {
    // Arrange (preparar)
    const inventario = { obtenerStock: jest.fn().mockReturnValue(100) };
    const carrito = new Carrito(inventario);
    const licuadora = { id: 'LIC-1', precio: 180000, iva: 19 };
    carrito.agregar(licuadora, 2);

    // Act (ejecutar)
    carrito.agregar(licuadora, 3);

    // Assert (verificar)
    expect(carrito.obtenerItems()).toHaveLength(1);
    expect(carrito.obtenerItems()[0].cantidad).toBe(5);
  });

    test('rechaza por stock insuficiente si la suma acumulada supera el inventario', () => {
    // Arrange (preparar)
    const inventario = { obtenerStock: jest.fn().mockReturnValue(4) };
    const carrito = new Carrito(inventario);
    const licuadora = { id: 'LIC-1', precio: 180000, iva: 19 };
    carrito.agregar(licuadora, 3);

    // Act + Assert (ejecutar y verificar)
    expect(() => carrito.agregar(licuadora, 2)).toThrow(StockInsuficienteError);
    expect(carrito.obtenerItems()[0].cantidad).toBe(3);
  });
});