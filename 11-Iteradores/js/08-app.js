// for in itera sobre objetos
const automovil = {
    marca: 'Ford',
    modelo: 'Mustang',
    año: 1969,
    motor: 'GT 500 7.0 V8 (340HP)',
}

for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`)
}


for(let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);

}