function suma (a,b) {
    return a + b;
}

function resta (a,b) {
    return a - b;
}

describe('Testing a las funciones de suma y resta', () => {
    test('Suma de 2 + 3', () => {
        expect(suma(2, 3)).toBe(5);
    });

    test('Resta de 10 - 3', () => {
        expect(resta(10, 3)).toBe(7);
    });

    
});