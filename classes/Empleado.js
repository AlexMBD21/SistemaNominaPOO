// Archivo: classes/Empleado.js
// Autora: Daniela Andrea Arteaga Doria
// Clase base que define los atributos comunes de todos los empleados

export default class Empleado {
  constructor(nombre, id, salarioBase = 0) {
    this.nombre = nombre;
    this.id = id;
    this.salarioBase = salarioBase;
  }

  // Métodos de acceso (getters y setters)
  getNombre() {
    return this.nombre;
  }

  getId() {
    return this.id;
  }

  getSalarioBase() {
    return this.salarioBase;
  }

  setSalarioBase(nuevoSalario) {
    this.salarioBase = nuevoSalario;
  }

  // Método genérico de cálculo (será sobreescrito por las subclases)
  calcularPago() {
    return this.salarioBase;
  }

  // Mostrar información general del empleado
  mostrarInfo() {
    return `Empleado: ${this.nombre} (ID: ${this.id}) - Salario base: $${this.salarioBase}`;
  }
}
