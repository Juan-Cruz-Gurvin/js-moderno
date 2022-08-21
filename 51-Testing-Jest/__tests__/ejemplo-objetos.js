const cliente = {
    nombre: 'Juan Cruz',
    saldo: 500
};

describe('Testing al cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.saldo).toBeGreaterThan(400);
    });

    test('Es Juan Cruz', () => {
        expect(cliente.nombre).toBe('Juan Cruz');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect(cliente.saldo).not.toBe(300);
    })
});