const usuario = true;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log('Si puedes comprar')
}
else if (!usuario && !puedePagar) {
    console.log('No estas registrado');
}
else if (!usuario) {
    console.log('Iniciar sesión o crear cuenta')
}
else if (!puedePagar) {
    console.log('Fondos insuficientes');
}
