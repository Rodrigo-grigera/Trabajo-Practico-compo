"use strict";
/*-Implementar una clase  que simule el comportamiento de un dado de seis caras. La clase debe
tener un atributo que almacena el valor actual del dado (un número entre 1 y 6). A su vez la clase
cuenta con varios métodos.
● Método constructor que inicializa el dado con un valor aleatorio entre 1 y 6.
● Método que simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al
atributo valor del dado
● Método que devuelve el valor actual del dado.
Proba el funcionamiento del dado */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
var Dado = /** @class */ (function () {
    function Dado() {
        this.valor_actual = this.num_dado();
    }
    Dado.prototype.lanzamiento = function () {
        this.valor_actual = this.num_dado();
    };
    Dado.prototype.num_dado = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    Dado.prototype.mostrar_dado = function () {
        console.log("Lanzamiento de dado: ".concat(this.valor_actual));
    };
    return Dado;
}());
exports.Dado = Dado;
var dado1 = new Dado();
