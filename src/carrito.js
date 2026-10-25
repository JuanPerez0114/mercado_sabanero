const { CantidadInvalidaError, StockInsuficienteError } = require('./errores');

const CANTIDAD_MINIMA = 1;
const CANTIDAD_MAXIMA = 50;

class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.items = new Map();
  }

  agregar(producto, cantidad) {
    if (cantidad < CANTIDAD_MINIMA || cantidad > CANTIDAD_MAXIMA) {
      throw new CantidadInvalidaError();
    }
    if (this.inventario.obtenerStock(producto.id) < cantidad) {
      throw new StockInsuficienteError();
    }
    this.items.set(producto.id, { producto, cantidad });
  }

  obtenerItems() {
    return [...this.items.values()];
  }
}

module.exports = { Carrito };