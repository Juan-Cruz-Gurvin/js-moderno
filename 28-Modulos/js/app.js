// import permite traerlo a este archivo
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js'
import { Empresa } from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);

nuevaFuncion();


console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

// class
const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());


// Importar empresa 
const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en línea');
console.log(empresa.mostrarInformacion());