const cliente = {
    nombre: 'Juan Cruz',
    saldo: 500,
    categoria: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Juan Cruz', () => {
        expect(cliente).toMatchSnapshot();
    })
})