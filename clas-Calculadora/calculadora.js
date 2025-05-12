/*
Implementar  una clase que simule el comportamiento de una Calculadora, con dos números y
las cuatro operaciones básicas: suma resta, multiplicación y división. Todas la operaciones deben
retornar un resultado, que luego va a ser mostrado por un método aparte. A su vez en las
operaciones de multiplicación y división se debe validar que no se ingrese un valor igual a 0.
Probar la calculadora con diferentes valores */
var Calculadora = /** @class */ (function () {
    function Calculadora(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculadora.prototype.suma = function () {
        return this.num1 + this.num2;
    };
    Calculadora.prototype.resta = function () {
        return this.num1 - this.num2;
    };
    Calculadora.prototype.multiplica = function () {
        if (this.num1 != 0 && this.num2 != 0) {
            return this.num1 * this.num2;
        }
        else {
            return ("Ingresar valores distintos de 0");
        }
    };
    Calculadora.prototype.division = function () {
        if (this.num1 != 0 && this.num2 != 0) {
            return this.num1 / this.num2;
        }
        else {
            return ("Ingresar valores distintos de 0");
        }
    };
    Calculadora.prototype.resultado = function () {
        console.log("\n        ".concat(this.num1, " + ").concat(this.num2, " = ").concat(this.suma(), "\n        ").concat(this.num1, " - ").concat(this.num2, " = ").concat(this.resta(), "\n        ").concat(this.num1, " * ").concat(this.num2, " = ").concat(this.multiplica(), "\n        ").concat(this.num1, " / ").concat(this.num2, " = ").concat(this.division(), "\n        "));
    };
    return Calculadora;
}());
var calcu = new Calculadora(24, 2);
calcu.resultado();
