iniciarApp();

function iniciarApp() {
    console.log('iniciando app...');
    
    segundaFuncion(); // Manda a llamar a la siguiente función
}

function segundaFuncion() {
    console.log('Desde la segunda función')

    usuarioAutenticado('Juan'); // Manda a llamar a la siguiente función
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}