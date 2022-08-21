// Constructores
function Seguro (chasis, año, tipo) {
    this.chasis = chasis;
    this.año = año;
    this.tipo = tipo;
}

// Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function() {
    /*
        1 = Hatchback 1.15
        2 = Sedan 1.20
        3 = Coupé 1.30
        4 = Suv 1.35
        5 = PickUp 1.38
    */

    let cantidad;
    const base = 2000;

    switch(this.chasis) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.20;
            break;
        case '3':
            cantidad = base * 1.30;
            break;
        case '4':
            cantidad = base * 1.35;
            break;
        case '5':
            cantidad = base * 1.38;
            break;
        default:
            break;
    }

    // Leer el año
    const diferencia = new Date().getFullYear()-this.año;


    // Cada año que la diferencia es mayor, el costo va a reducirse un 3% el seguro
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        Si el seguro es Básico se multiplica por un 30% más
        Si el seguro es Intermedio se multiplica por un 50% más
        Si el seguro es Completo se multiplica por un 70% más
    */

    if(this.tipo === 'basico') {
        cantidad *= 1.30;
    } else if(this.tipo === 'intermedio') {
        cantidad *= 1.50;
    } else {
        cantidad *= 1.70;
    }

    return cantidad;
}

function UI () {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#año');


    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 2500);
}

UI.prototype.mostrarResultado = (total, seguro) => {

    const { chasis, año, tipo} = seguro;

    let textoChasis;

    switch(chasis) {
        case '1':
            textoChasis = 'Hatchback';
            break;
        case '2':
            textoChasis = 'Sedan';
            break;
        case '3':
            textoChasis = 'Coupé';
            break;
        case '4':
            textoChasis = 'Suv';
            break;
        case '5':
            textoChasis = 'PickUp';
            break;

        default:
            break;
    }

    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Chasis: <span class="font-normal"> ${textoChasis} </span></p>
    <p class="font-bold">Año: <span class="font-normal"> ${año} </span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo} </span></p>
    <p class="font-bold">Total: <span class="font-normal">$ ${total} </span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.appendChild(div);

    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none'; // Se borra el spinner
        resultadoDiv.appendChild(div); // Se muestra el resultado
    }, 2500);
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // Llena el select con los años
})

eventListener();
function eventListener() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(evento) {
    evento.preventDefault();

    // Leer la marca seleccionada
    const chasis = document.querySelector('#chasis').value;

    // Leer el año seleccionado
    const año = document.querySelector('#año').value;

    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(chasis === '' || año === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    } 

    ui.mostrarMensaje('Cotizando...', 'exito');

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null) {
        resultados.remove();
    }

    // Instanciar el seguro
    const seguro = new Seguro(chasis, año, tipo);
    const total = seguro.cotizarSeguro();

    // Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total, seguro);

}