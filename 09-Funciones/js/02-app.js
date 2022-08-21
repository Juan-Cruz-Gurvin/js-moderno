//Declaración de función ( Function Declaration )
sumar();
function sumar() {
    console.log(2 + 2);
}


//Expresión de Función (Function Expression)
// no ejecuta debido al hoisting
sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}

