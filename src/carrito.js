const { CantidadInvalidaError, StockInsuficienteError } = require('./errores');

const CANTIDAD_MINIMA = 1;
const CANTIDAD_MAXIMA = 50;

class Carrito {
  constructor(inventario) {
    this.inventario = inventario;
    this.items = new Map();
  }

  agregar(producto, cantidad) {
    this._validarRango(cantidad);
    const existente = this.items.get(producto.id);
    const cantidadTotal = (existente ? existente.cantidad : 0) + cantidad;
    this._validarStock(producto.id, cantidadTotal);
    this.items.set(producto.id, { producto, cantidad: cantidadTotal });
  }

  obtenerItems() {
    return [...this.items.values()];
  }

  _validarRango(cantidad) {
    if (cantidad < CANTIDAD_MINIMA || cantidad > CANTIDAD_MAXIMA) {
      throw new CantidadInvalidaError();
    }
  }

  _validarStock(idProducto, cantidadTotal) {
    if (this.inventario.obtenerStock(idProducto) < cantidadTotal) {
      throw new StockInsuficienteError();
    }
  }
}

module.exports = { Carrito };