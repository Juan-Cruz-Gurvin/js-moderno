
const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`pausando...`),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),
    
    // set es una forma de agregar valores
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    // get es una forma de obtener devuelta esos valores
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Poppin Them Thangs';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(50);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Rap');
reproductor.crearPlaylist('Rock nacional');
reproductor.reproducirPlaylist('Rap');