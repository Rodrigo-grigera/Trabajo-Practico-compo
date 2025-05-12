"use strict";
/*Implementar la clase Televisor con todos los atributos
y métodos, como se vio en clase, incluido
la funcionalidad mute. */
Object.defineProperty(exports, "__esModule", { value: true });
var decodificador_1 = require("../clas-Decodificador/decodificador");
var Televisor = /** @class */ (function () {
    function Televisor(brand, decodificador) {
        this.volume = 0;
        this.channel = 1;
        this.maxChannel = 99;
        this.isOn = false;
        this.muted = false;
        this.act_Decodificador = false;
        this.brand = brand;
        this.decodificador = decodificador;
    }
    Televisor.prototype.switchPower = function () {
        this.isOn = !this.isOn;
    };
    Televisor.prototype.getTime = function () {
        var fullDate = new Date();
        return "".concat(fullDate.getHours(), ":").concat(fullDate.getMinutes());
    };
    Televisor.prototype.info = function () {
        if (this.isOn === false) {
            return;
        }
        else {
            console.log("\n                Channel: ".concat(this.channel, "\n                Volume: ").concat(this.volume, "\n                Hour: ").concat(this.getTime(), "\n                -----------\n"));
        }
    };
    Televisor.prototype.activar_decodificador = function () {
        if (!this.decodificador) {
            console.log("No hay decodificador conectado.");
            return;
        }
        this.act_Decodificador = !this.act_Decodificador;
        if (this.act_Decodificador) {
            this.maxChannel += this.decodificador.canales_extras();
            console.log("Decodificador activado.");
        }
        else {
            this.maxChannel = 99;
            if (this.channel > this.maxChannel) {
                this.channel = this.maxChannel;
            }
            console.log("Decodificador desactivado. Canales hasta ".concat(this.maxChannel));
        }
    };
    Televisor.prototype.channelUp = function () {
        if (this.channel === this.maxChannel) {
            this.channel = 1;
        }
        else {
            this.channel += 1;
        }
    };
    Televisor.prototype.channelDown = function () {
        if (this.channel === 1) {
            this.channel = this.maxChannel;
        }
        else {
            this.channel -= 1;
        }
    };
    Televisor.prototype.selectChannel = function (channelNumber) {
        if (channelNumber > 0 && channelNumber <= this.maxChannel) {
            this.channel = channelNumber;
        }
    };
    Televisor.prototype.selectVolumenup = function () {
        if (this.volume >= 100) {
            this.volume = 100;
        }
        else {
            this.volume++;
        }
    };
    Televisor.prototype.selectVolumenDown = function () {
        if (this.volume <= 0) {
            this.volume = 0;
        }
        else {
            this.volume--;
        }
    };
    Televisor.prototype.isMuted = function () {
        this.muted = !this.muted;
        if (this.muted && this.volume > 0) {
            console.log("Muted activado\n                Volumen = ".concat(this.volume = 0));
        }
        else {
            console.log("Muted desactivado ");
        }
    };
    return Televisor;
}());
var deco = new decodificador_1.Decodificar();
var tv1 = new Televisor("TCL", deco);
tv1.switchPower();
tv1.channelUp();
tv1.channelUp();
tv1.channelUp();
tv1.channelUp();
tv1.channelUp();
tv1.info();
tv1.activar_decodificador();
tv1.selectChannel(122);
tv1.channelUp();
tv1.activar_decodificador();
tv1.channelUp();
tv1.channelUp();
tv1.info();
