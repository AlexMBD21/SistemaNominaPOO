// Archivo: classes/EmpleadoAsalariado.js
// Autor: Alex Miguel Bello Doria
// Clase para empleados asalariados de pago fijo mensual

import Empleado from "./Empleado.js";

export default class EmpleadoAsalariado extends Empleado {
  constructor(nombre, id, salarioMensual) {
    super(nombre, id, salarioMensual);
  }

  calcularPago() {
    return this.salarioBase; // Pago fijo mensual
  }

  mostrarInfo() {
    return `Empleado Asalariado: ${this.nombre} - Pago mensual: $${this.calcularPago()}`;
  }
}
