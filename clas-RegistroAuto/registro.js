"use strict";
/*-Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, con
métodos para:
● Agregar un auto
● Buscar un auto por patente
● Eliminar o actualizar autos existente */
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("../clas-Autos/auto");
var RegistroAuto = /** @class */ (function () {
    function RegistroAuto() {
        this.auto = [];
        this.patente = [];
    }
    RegistroAuto.prototype.buscarAuto_porPatente = function (patenteAuto) {
        var encontrar;
        for (var i = 0; i < this.patente.length; i++) {
            encontrar = this.patente[i];
            if (encontrar === patenteAuto) {
                console.log("Auto con patente: ".concat(patenteAuto, " , ya se encuentra Registrado"));
            }
        }
    };
    RegistroAuto.prototype.agregarAuto = function (auto, patente) {
        this.auto.push(auto);
        this.patente.push(patente);
        console.log("\n            Auto Agregado correctamente al registro\n            -----------------------------------------");
    };
    RegistroAuto.prototype.info_autos = function () {
        console.log("Autos registrados:");
        if (this.auto.length > 0) {
            for (var i = 0; i < this.auto.length; i++) {
                var auto = this.auto[i];
                var patente = this.patente[i];
                console.log("- ".concat(auto.getMarca(), " ").concat(auto.getModelo(), " (").concat(patente, ")"));
            }
        }
        else {
            console.log("No hay autos registrados");
        }
    };
    RegistroAuto.prototype.eliminarAuto = function (patente) {
        var index = this.patente.indexOf(patente);
        if (index !== -1) {
            this.auto.splice(index, 1);
            this.patente.splice(index, 1);
            console.log("Auto con patente ".concat(patente, " eliminado del registro."));
        }
        else {
            console.log("No se encontr\u00F3 esa patente para eliminar.");
        }
    };
    return RegistroAuto;
}());
var autos = new RegistroAuto();
var auto1 = new auto_1.Auto("Ford", "Mustang", "Rojo");
autos.agregarAuto(auto1, "RXTZ-442");
autos.info_autos();
