// Array Method concat (une arreglos)
const meses1 = ['Enero', 'Febrero', 'Marzo'];
const meses2 = ['Abril', 'Mayo', 'Junio']; 
const meses3 = ['Julio', 'Agosto', 'Septiembre'];
const meses4 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const añoEntero = meses1.concat(meses2, meses3, meses4);
console.log(añoEntero);

// otra forma con spread operator
const añoEntero2 = [...meses1, ...meses2, ...meses3, ...meses4];
console.log(añoEntero2);