import Citas from "../js/classes/Citas";


describe('Probar la clase de citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Felipe',
            propietario: 'Juan',
            telefono: '3232423',
            fecha: '08-08-2022',
            hora:'10:30',
            sintomas: 'vacunas'
        };

        citas.agregarCita(citaObj);

        // Prueba 
        expect(citas).toMatchSnapshot();
    });

    test('actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nativa',
            propietario: 'Juan',
            telefono: '3232423',
            fecha: '08-08-2022',
            hora:'10:30',
            sintomas: 'vacunas'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});