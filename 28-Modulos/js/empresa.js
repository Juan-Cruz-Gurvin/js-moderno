// 5) Heredar una clase exportada...

import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    constructor(nombreCliente, ahorro, categoria) {
        super(nombreCliente, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombreCliente} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`
    }
}