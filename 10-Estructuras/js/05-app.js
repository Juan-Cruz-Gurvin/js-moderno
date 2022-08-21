// Switch case

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break;
    case 'mercado pago':
        console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break;
    case '':
        console.log('Aún no has seleccionado un método de pago');
        break;
    default:
        console.log('Método de pago no soportado');
        break;
}


function pagar() {
    console.log('Pagando ...');
}