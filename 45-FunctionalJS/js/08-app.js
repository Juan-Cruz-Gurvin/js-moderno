const obtenerCliente = () => {
    const nombre = 'Juan Cruz';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();