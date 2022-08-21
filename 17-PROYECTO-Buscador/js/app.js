// Variables
const marca = document.querySelector('#marca');
const año = document.querySelector('#año');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max -10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    año: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}



// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
})

// Event listener para los select de búsqueda
marca.addEventListener('change', evento => {
    datosBusqueda.marca = evento.target.value;

    filtrarAuto();
});

año.addEventListener('change', evento => {
    datosBusqueda.año = parseInt(evento.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', evento => {
    datosBusqueda.minimo = evento.target.value;

   filtrarAuto();
});

maximo.addEventListener('change', evento => {
    datosBusqueda.maximo = evento.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', evento => {
    datosBusqueda.puertas = parseInt(evento.target.value);

    filtrarAuto();
});

transmision.addEventListener('change', evento => {
    datosBusqueda.transmision = evento.target.value;

    filtrarAuto();
});

color.addEventListener('change', evento => {
    datosBusqueda.color = evento.target.value;

    filtrarAuto();
});


// Funciones
function mostrarAutos(autos) {

    LimpiarHTML(); // Elimina el HTML previo

    autos.forEach( auto => {

        const { marca, modelo, año, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${año} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}

        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML)
    })
}

// Limpiar HTML
function LimpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select
function llenarSelect() {
    
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');  
        opcion.value = i;
        opcion.textContent = i;
        año.appendChild(opcion); // Agrega las opciones de año al select
    }
    

}

// Función que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarAño).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    
    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    LimpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if(marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarAño(auto) {
    const {año} = datosBusqueda;
    if(año) {
        return auto.año === año;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if(puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if(color) {
        return auto.color === color;
    }
    return auto;
}