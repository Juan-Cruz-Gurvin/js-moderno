// new binding

// También cuando creas un nuevo objeto con el object constructor tienes acceso a la palabra this via un nuevo objeto con new 

function Auto(marca, modelo, color, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
}
const auto = new Auto('Ford', 'Mustang', 'Negro', '2020');
console.log(auto);

// Window binding
window.color = 'negro';
function hola() {
    console.log(color);
}

hola();