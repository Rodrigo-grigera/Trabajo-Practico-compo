"use strict";
/* - Implementar una clase Decodificador
y relacionarla con la clase Televisor del ejercicio 2 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decodificar = void 0;
var Decodificar = /** @class */ (function () {
    function Decodificar() {
        this.channelMax = 51;
    }
    Decodificar.prototype.canales_extras = function () {
        return this.channelMax;
    };
    return Decodificar;
}());
exports.Decodificar = Decodificar;
