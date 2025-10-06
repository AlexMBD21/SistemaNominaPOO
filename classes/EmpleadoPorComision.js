// Archivo: classes/EmpleadoPorComision.js
// Autor: Sebastián Andrés Tordecilla Ramírez
// Clase para empleados que ganan un salario base más comisiones

import Empleado from "./Empleado.js";

export default class EmpleadoPorComision extends Empleado {
  constructor(nombre, id, salarioBase, ventasRealizadas, porcentajeComision) {
    super(nombre, id, salarioBase);
    this.ventasRealizadas = ventasRealizadas;
    this.porcentajeComision = porcentajeComision;
  }

  calcularPago() {
    const comision = this.ventasRealizadas * (this.porcentajeComision / 100);
    return this.salarioBase + comision;
  }

  mostrarInfo() {
    return `Empleado por Comisión: ${this.nombre} - Ventas: $${this.ventasRealizadas} - Pago total: $${this.calcularPago()}`;
  }
}
