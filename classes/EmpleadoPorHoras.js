// Archivo: classes/EmpleadoPorHoras.js
// Autor: Daniel Felipe Madera Cavadia
// Clase para empleados que cobran por hora trabajada

import Empleado from "./Empleado.js";

export default class EmpleadoPorHoras extends Empleado {
  constructor(nombre, id, horasTrabajadas, tarifaPorHora) {
    super(nombre, id);
    this.horasTrabajadas = horasTrabajadas;
    this.tarifaPorHora = tarifaPorHora;
  }

  calcularPago() {
    let pago = this.horasTrabajadas * this.tarifaPorHora;
    if (this.horasTrabajadas > 40) {
      const extras = this.horasTrabajadas - 40;
      pago += extras * (this.tarifaPorHora * 0.5);
    }
    return pago;
  }

  mostrarInfo() {
    return `Empleado por Horas: ${this.nombre} - Horas: ${this.horasTrabajadas} - Pago: $${this.calcularPago()}`;
  }
}
