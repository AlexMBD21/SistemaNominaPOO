// Archivo: main.js
// Autor: Alex Miguel Bello Doria
// Integración de clases y prueba en la interfaz web

import EmpleadoAsalariado from "./classes/EmpleadoAsalariado.js";
import EmpleadoPorHoras from "./classes/EmpleadoPorHoras.js";
import EmpleadoPorComision from "./classes/EmpleadoPorComision.js";

const resultadoDiv = document.getElementById("resultado");

const empleado1 = new EmpleadoAsalariado("María López", 101, 2000000);
const empleado2 = new EmpleadoPorHoras("Carlos Pérez", 102, 45, 30000);
const empleado3 = new EmpleadoPorComision("Laura Gómez", 103, 1000000, 5000000, 10);

resultadoDiv.innerHTML = `
  <p>${empleado1.mostrarInfo()}</p>
  <p>${empleado2.mostrarInfo()}</p>
  <p>${empleado3.mostrarInfo()}</p>
`;

console.log("Sistema de Nómina ejecutado correctamente.");
