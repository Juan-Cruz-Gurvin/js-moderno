const autenticado = true;

if(autenticado) {
    console.log('El usuario esta autenticado');
}



const puntaje = 100;

function revisarPuntaje() {
if(puntaje >= 400) {
    console.log('Exelente');
    return;
}
else if (puntaje >= 300) {
    console.log('Buen puntaje');
    return;
}    
else if (puntaje >= 200) {
    console.log('Bien');
    return;
}
else {
    console.log('Regular');
    return;
}
}

revisarPuntaje();
