import { suma } from '../js/funciones.js';

describe('Suma de dos números', () => {
    test('La suma de 10 y 20, debe dar como resultado 30', () => {
        expect(suma(10,20)).toBe(30);
    })
});

