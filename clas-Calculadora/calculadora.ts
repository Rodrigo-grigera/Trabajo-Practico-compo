/*
Implementar  una clase que simule el comportamiento de una Calculadora, con dos números y 
las cuatro operaciones básicas: suma resta, multiplicación y división. Todas la operaciones deben 
retornar un resultado, que luego va a ser mostrado por un método aparte. A su vez en las 
operaciones de multiplicación y división se debe validar que no se ingrese un valor igual a 0. 
Probar la calculadora con diferentes valores */

class Calculadora{
    private num1 : number;
    private num2 : number;

    public constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }
    private suma(){
        return this.num1 + this.num2
    }
    private resta(){
        return this.num1 - this.num2
    }
    private multiplica(){
        if(this.num1 != 0 && this.num2 != 0){
            return this.num1 * this.num2
        }else{
            return (`Ingresar valores distintos de 0`);
        }
    }
    private division(){
        if(this.num1 != 0 && this.num2 != 0){

            return this.num1 / this.num2
        }else{
            return (`Ingresar valores distintos de 0`);
        }
    }
    public resultado(){console.log(`
        ${this.num1} + ${this.num2} = ${this.suma()}
        ${this.num1} - ${this.num2} = ${this.resta()}
        ${this.num1} * ${this.num2} = ${this.multiplica()}
        ${this.num1} / ${this.num2} = ${this.division()}
        `);
    }

}

const calcu = new Calculadora(24,2);
calcu.resultado();
