const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 1000
    },
    {
        platillo: 'Hamburguesa',
        precio: 600
    },
    {
        platillo: 'Pancho',
        precio: 150
    },
];

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro menú`);

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push(nuevo);
    }
}


restaurantApp.funciones.ordenar(1);

restaurantApp.funciones.agregarPlatillo('Taco', 180);

const {platillos} = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);