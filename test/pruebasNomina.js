// Archivo: test/pruebasNomina.js
// Autor: Alex Miguel Bello Doria
// Propósito: Verificar el funcionamiento de todas las clases del sistema de nómina

import EmpleadoAsalariado from "../classes/EmpleadoAsalariado.js";
import EmpleadoPorHoras from "../classes/EmpleadoPorHoras.js";
import EmpleadoPorComision from "../classes/EmpleadoPorComision.js";

console.log("=== PRUEBAS DEL SISTEMA DE NÓMINA ===");

// Crear instancias de cada tipo de empleado
const empleado1 = new EmpleadoAsalariado("María López", 101, 2000000);
const empleado2 = new EmpleadoPorHoras("Carlos Pérez", 102, 45, 30000);
const empleado3 = new EmpleadoPorComision("Laura Gómez", 103, 1000000, 5000000, 10);

// Mostrar resultados en consola
console.log(empleado1.mostrarInfo());
console.log(empleado2.mostrarInfo());
console.log(empleado3.mostrarInfo());

console.log("=====================================");
