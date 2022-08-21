function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear objetos
const juan = new Comprador('Juan Cruz');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(juan);
subasta.registrar(anibal);
subasta.registrar(vendedor);



vendedor.oferta('Mustang 1969', 10000);

juan.oferta(11000, juan);
anibal.oferta(11500, anibal);
juan.oferta(12100, juan);
anibal.oferta(12500, anibal);

vendedor.vendido('Anibal');