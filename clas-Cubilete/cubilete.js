"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
-Usando la clase Dado del ejercicio 6, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o
dados en particular
*/
var dado_1 = require("../clas-Dado/dado");
var Cubilete = /** @class */ (function () {
    function Cubilete(dados) {
        this.dados = dados;
    }
    Cubilete.prototype.dados_al_Vaso = function (dado) {
        this.dados.push(dado);
    };
    Cubilete.prototype.lanzar_dados = function () {
        for (var i = 0; i < this.dados.length; i++) {
            this.dados[i].lanzamiento();
            this.dados[i].mostrar_dado();
        }
    };
    return Cubilete;
}());
var dado1 = new dado_1.Dado();
var dado2 = new dado_1.Dado();
var dado3 = new dado_1.Dado();
var dado4 = new dado_1.Dado();
var dado5 = new dado_1.Dado();
var dados = [];
var cubilete = new Cubilete(dados);
cubilete.dados_al_Vaso(dado1);
cubilete.dados_al_Vaso(dado2);
cubilete.dados_al_Vaso(dado3);
cubilete.dados_al_Vaso(dado4);
cubilete.dados_al_Vaso(dado5);
cubilete.lanzar_dados();
