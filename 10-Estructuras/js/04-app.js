const dinero = 1000;
const totalAPagar = 500;
const tarjeta = true;

if(dinero >= totalAPagar) {
    console.log('Si podemos pagar');
}
else if(tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta');
}
else {
    console.log('Fondos insuficientes');
}