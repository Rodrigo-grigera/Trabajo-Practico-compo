/*
Implementar a una clase que represente una cuenta bancaria, con dos atributos: Número de 
cuenta y Saldo actual. Implementa los siguientes métodos:
● Un constructor que me permita establecer el número de cuenta y el saldo.
● Un método que incremente el saldo.
● Un método que disminuya el saldo si hay fondos suficientes, caso contrario no hace nada.
● Un método que devuelva el saldo actual */

class Banco{
    private num_Cuenta: number;
    private saldo_Actual: number;

    public constructor(num_Cuenta:number, saldo_Actual:number){
        this.num_Cuenta = num_Cuenta;
        this.saldo_Actual = saldo_Actual;
    }

    incrementar_Saldo(saldo_Actual: number){
        this.saldo_Actual += saldo_Actual
    }
    disminuir_saldos(saldo_Actual: number){
        console.log(`\n Dinero debitado: ${saldo_Actual} $`);

        if(saldo_Actual > this.saldo_Actual){
            console.log(`\n Fondos insuficientes para realizar esta operacion. Estado de su cuenta:`);
        }else{
            return this.saldo_Actual -= saldo_Actual
        }
    }
    info(){
        console.log(`
            Numero de cuenta: ${this.num_Cuenta}
            Saldo en la cuenta: ${this.saldo_Actual} $`);
    }
}
const cuenta = new Banco(25, 1000);
cuenta.incrementar_Saldo(2000)
cuenta.incrementar_Saldo(2000)
cuenta.incrementar_Saldo(2000)
cuenta.incrementar_Saldo(2000)
cuenta.info()
cuenta.disminuir_saldos(4000)
cuenta.info()
cuenta.disminuir_saldos(4000)
cuenta.info()
cuenta.disminuir_saldos(4000)
cuenta.info()


