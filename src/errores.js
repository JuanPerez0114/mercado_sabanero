class CantidadInvalidaError extends Error {
  constructor(mensaje = 'La cantidad debe ser un entero entre 1 y 50') {
    super(mensaje);
    this.name = 'CantidadInvalidaError';
  }
}

class StockInsuficienteError extends Error {
  constructor(mensaje = 'Stock insuficiente') {
    super(mensaje);
    this.name = 'StockInsuficienteError';
  }
}

module.exports = { CantidadInvalidaError, StockInsuficienteError };