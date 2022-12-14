let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacios
    const camposVacios = [ mesa, hora ].some( campo => campo === '' );

    if(camposVacios) {
        // Verificar si ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta) {
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);  
            
            // Eliminar nuestra alerta
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    } 
    
    // Asignar datos del formulario a cliente
    cliente = { ...cliente, mesa, hora }

    // console.log(cliente);

    // Ocultar Modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    // Mostrar las secciones
    mostrarSecciones();

    // Obtener platillos de la API de JSON-Server
    obtenerPlatos();
}

function mostrarSecciones() {
        const seccionesOcultas = document.querySelectorAll('.d-none');
        seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatos() {
    const url = 'http://localhost:4000/platos';

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarPlatos(resultado))
        .catch( error => console.log(error));
}

function mostrarPlatos(platos) {
    const contenido = document.querySelector('#platos .contenido');

    platos.forEach( platos => {
        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombre = document.createElement('DIV');
        nombre.classList.add('col-md-4');
        nombre.textContent = platos.nombre;

        const precio = document.createElement('DIV');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$${platos.precio}`;

        const categoria = document.createElement('DIV');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[platos.categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platos.id}`;
        inputCantidad.classList.add('form-control');

        // Funci??n que detecta la cantidad y el plato que se esta agregando
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlato({...platos, cantidad});
        }

        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    })
}

function agregarPlato(producto) {
    // Extraer el pedido actual
    let { pedido } = cliente;

    // Revisar que la cantidad sea mayor a 0
    if(producto.cantidad > 0) {

        // Comprueba si el elemento ya existe en el array
        if(pedido.some(articulo => articulo.id === producto.id)) {
            // El articulo ya existe, actualizar la cantidad
            const pedidoActualizado = pedido.map(articulo => {
                if(articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        } else {
            // El articulo no existe, lo agregamos al array de pedido
            cliente.pedido = [...pedido, producto];    
        }

        
    } else {
        // Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);

        cliente.pedido = [...resultado];
    }

    // Limpiar el c??digo HTML previo
    limpiarHTML();

    if(cliente.pedido.length) {
        // Mostrar el resumen
        actualizarResumen();    
    } else {
        mensajePedidoVacio();
    }

   
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');

    // Informaci??n de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    // Informaci??n de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    // Agregar a los elementos padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    // Titulo de la secci??n
    const heading = document.createElement('H3');
    heading.textContent = 'Platos consumidos';
    heading.classList.add('my-4', 'text-center');

    // Iterar sobre el array de pedidos
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach(articulo => {
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreElemento = document.createElement('H4');
        nombreElemento.classList.add('my-4');
        nombreElemento.textContent = nombre;


        // Cantidad del articulo
        const cantidadElemento = document.createElement('P');
        cantidadElemento.classList.add('fw-bold');
        cantidadElemento.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;


        // Precio del articulo
        const precioElemento = document.createElement('P');
        precioElemento.classList.add('fw-bold');
        precioElemento.textContent = 'Precio: ';

        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;


        // Subtotal del articulo
        const subtotalElemento = document.createElement('P');
        subtotalElemento.classList.add('fw-bold');
        subtotalElemento.textContent = 'Subtotal: ';

        const subtotalValor = document.createElement('SPAN');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio, cantidad);

        // Boton para eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido';

        // Funci??n para eliminar del pedido
        btnEliminar.onclick = function() {
            eliminarProducto(id);
        }

        // Agregar valores a sus contenedores
        cantidadElemento.appendChild(cantidadValor);
        precioElemento.appendChild(precioValor);
        subtotalElemento.appendChild(subtotalValor);

        // Agregar elementos al LI
        lista.appendChild(nombreElemento);
        lista.appendChild(cantidadElemento);
        lista.appendChild(precioElemento);
        lista.appendChild(subtotalElemento);
        lista.appendChild(btnEliminar);

        // Agregar lista al grupo principal
        grupo.appendChild(lista);

    });

    // Agregar al contenido
    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    // Mostrar formulario de propinas
    formularioPropinas();
}


function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');

    while( contenido.firstChild ) {
        contenido.removeChild(contenido.firstChild);
    }
}


function calcularSubtotal(precio, cantidad) {
    return  `$ ${precio * cantidad}`;
}

function eliminarProducto(id) {
    const {pedido} = cliente;
    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

    // Limpiar el c??digo HTML previo
    limpiarHTML();

    if(cliente.pedido.length) {
        // Mostrar el resumen
        actualizarResumen();    
    } else {
        mensajePedidoVacio();
    }

    // El producto se elimin?? por lo tanto regresamos la cantidad a 0 en el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
}

function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent = 'A??ade los elementos del pedido';

    contenido.appendChild(texto);
}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('DIV');
    divFormulario.classList.add('card', 'py-2', 'px-3', 'shadow');

    const heading = document.createElement('H3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'Propina';


    // Radio button 5%
    const radio5 = document.createElement('INPUT');
    radio5.type = 'radio';
    radio5.name = 'propina';
    radio5.value = "5";
    radio5.classList.add('form-check-input');
    radio5.onclick = calcularPropina;

    const radio5Label = document.createElement('LABEL');
    radio5Label.textContent = '5%';
    radio5Label.classList.add('form-check-label');

    const radio5Div = document.createElement('DIV');
    radio5Div.classList.add('form-check');

    radio5Div.appendChild(radio5);
    radio5Div.appendChild(radio5Label);


    // Radio button 10%
    const radio10 = document.createElement('INPUT');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = "10";
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('DIV');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);


    // Radio button 25%
    const radio25 = document.createElement('INPUT');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = "25";
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('DIV');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);



    // Agregar al Div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio5Div);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);

    // Agregar al formulario
    formulario.appendChild(divFormulario);



    contenido.appendChild(formulario);
}


function calcularPropina() {

    const {pedido} = cliente;
    let subtotal = 0;

    // Calcular el subtotal a pagar
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio;
    })

    // Seleccionar el radio button con la propina del cliente
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

    // Calcular la propina
    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    // Calcular el total a pagar
    const total = subtotal + propina;

    mostrarTotalHTML(subtotal, total, propina);
}


function mostrarTotalHTML(subtotal, total, propina) {

    const divTotales = document.createElement('DIV');
    divTotales.classList.add('total-pagar', 'my-5');

    // Subtotal
    const subtotalParrafo = document.createElement('P');
    subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subtotalParrafo.textContent = 'Subtotal Consumo: ';

    const subtotalSpan = document.createElement('SPAN');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);

    // Propina
    const propinaParrafo = document.createElement('P');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'Propina: ';
  
    const propinaSpan = document.createElement('SPAN');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;
  
    propinaParrafo.appendChild(propinaSpan);


    // Total
    const totalParrafo = document.createElement('P');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = 'Total a pagar: ';
  
    const totalSpan = document.createElement('SPAN');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;
  
    totalParrafo.appendChild(totalSpan);


    // Eliminar el ??ltimo resultado
    const totalPagarDiv = document.querySelector('.total-pagar');
    if(totalPagarDiv) {
        totalPagarDiv.remove();
    }


    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario > div ');
    formulario.appendChild(divTotales);

}