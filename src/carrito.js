class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.items = new Map();
  }

  agregar(producto, cantidad) {
    this.items.set(producto.id, { producto, cantidad });
  }

  obtenerItems() {
    return [...this.items.values()];
  }
}

module.exports = { Carrito };