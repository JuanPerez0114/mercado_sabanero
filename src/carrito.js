const { CantidadInvalidaError } = require('./errores');

class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.items = new Map();
  }

  agregar(producto, cantidad) {
    if (cantidad < 1 || cantidad > 50) {
      throw new CantidadInvalidaError();
    }
    this.items.set(producto.id, { producto, cantidad });
  }

  obtenerItems() {
    return [...this.items.values()];
  }
}

module.exports = { Carrito };