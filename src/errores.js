class CantidadInvalidaError extends Error {
  constructor(mensaje = 'La cantidad debe ser un entero entre 1 y 50') {
    super(mensaje);
    this.name = 'CantidadInvalidaError';
  }
}

module.exports = { CantidadInvalidaError };