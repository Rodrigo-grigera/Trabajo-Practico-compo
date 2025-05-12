/*
Implementar a una clase que represente una cuenta bancaria, con dos atributos: Número de
cuenta y Saldo actual. Implementa los siguientes métodos:
● Un constructor que me permita establecer el número de cuenta y el saldo.
● Un método que incremente el saldo.
● Un método que disminuya el saldo si hay fondos suficientes, caso contrario no hace nada.
● Un método que devuelva el saldo actual */
var Banco = /** @class */ (function () {
    function Banco(num_Cuenta, saldo_Actual) {
        this.num_Cuenta = num_Cuenta;
        this.saldo_Actual = saldo_Actual;
    }
    Banco.prototype.incrementar_Saldo = function (saldo_Actual) {
        this.saldo_Actual += saldo_Actual;
    };
    Banco.prototype.disminuir_saldos = function (saldo_Actual) {
        console.log("\n Dinero debitado: ".concat(saldo_Actual, " $"));
        if (saldo_Actual > this.saldo_Actual) {
            console.log("\n Fondos insuficientes para realizar esta operacion. Estado de su cuenta:");
        }
        else {
            return this.saldo_Actual -= saldo_Actual;
        }
    };
    Banco.prototype.info = function () {
        console.log("\n            Numero de cuenta: ".concat(this.num_Cuenta, "\n            Saldo en la cuenta: ").concat(this.saldo_Actual, " $"));
    };
    return Banco;
}());
var cuenta = new Banco(25, 1000);
cuenta.incrementar_Saldo(2000);
cuenta.incrementar_Saldo(2000);
cuenta.incrementar_Saldo(2000);
cuenta.incrementar_Saldo(2000);
cuenta.info();
cuenta.disminuir_saldos(4000);
cuenta.info();
cuenta.disminuir_saldos(4000);
cuenta.info();
cuenta.disminuir_saldos(4000);
cuenta.info();
