const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const operacion = fn => fn(10, 4);

console.log(operacion (suma));
console.log(operacion (resta));
console.log(operacion (multiplicacion));
console.log(operacion (division));