"use strict";
/*
Plantear una clase Auto de la forma en que se vió en la clase
especificando variables internas
y métodos. Implementar en TypeScript
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, color) {
        this.caja_autom = true;
        this.vel_max = 250;
        this.vel_inicial = 0;
        this.apagado = true;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }
    Auto.prototype.encendido = function () {
        this.apagado = !this.apagado;
    };
    Auto.prototype.aceleracion = function () {
        if (this.apagado == false) {
            return this.vel_inicial += 10;
        }
    };
    Auto.prototype.caja_manual = function () {
        this.caja_autom = !this.caja_autom;
    };
    Auto.prototype.vel_crucero = function () {
        if (this.vel_inicial >= 120) {
            console.log("Se activo velocidad crucero : ".concat(this.vel_inicial = 120));
        }
    };
    Auto.prototype.data_auto = function () {
        console.log("\n            Marca: ".concat(this.marca, "\n            Modelo: ").concat(this.modelo, "\n            Color: ").concat(this.color, "\n            Tipo de caja: ").concat(this.caja_autom ? "Automatic" : "Manual", "\n            Velocidad Maxima: ").concat(this.vel_max, "\n            --------------------------------"));
    };
    Auto.prototype.velocidad_actual = function () {
        if (this.vel_inicial <= 250) {
            console.log("Velocidad actual: ".concat(this.vel_inicial));
        }
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    return Auto;
}());
exports.Auto = Auto;
;
var auto2 = new Auto("Chevrolet", "Camaro", "Negro");
// auto2.data_auto()
// autos.agregarAuto("Mazda", "RXTZ")
// autos.info_autos()
// autos.eliminarAuto("Falcon")
// autos.info_autos();
// auto1.caja_manual()
// auto1.data_auto()
// auto2.caja_manual()
// auto2.data_auto()
