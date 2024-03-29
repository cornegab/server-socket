"use strict";
/*  Este código va en el backend
    Es la nueva clase de GraficaData

    Si este archivo ya existe, reemplazarlo por este nuevo.
    Esta simplificado pero funciona de la misma manera
    que en la sección anterior.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraficaData = void 0;
class GraficaData {
    constructor() {
        this.labels = [];
        this.valores = [0, 0, 0, 0];
    }
    setLabels(labels) {
        this.labels = labels;
    }
    getDataGrafica() {
        return [
            { data: this.valores, label: 'Preguntas' }
        ];
    }
    incrementarValor(opcion, valor) {
        this.valores[opcion] += valor;
        return this.getDataGrafica();
    }
}
exports.GraficaData = GraficaData;
