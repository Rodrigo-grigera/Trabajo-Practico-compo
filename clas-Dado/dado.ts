/*-Implementar una clase  que simule el comportamiento de un dado de seis caras. La clase debe 
tener un atributo que almacena el valor actual del dado (un número entre 1 y 6). A su vez la clase 
cuenta con varios métodos.
● Método constructor que inicializa el dado con un valor aleatorio entre 1 y 6.
● Método que simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al 
atributo valor del dado
● Método que devuelve el valor actual del dado.
Proba el funcionamiento del dado */

export class Dado {
    private valor_actual: number;

    public constructor() {
        this.valor_actual = this.num_dado()
    }
    public lanzamiento(){
        this.valor_actual =  this.num_dado()
    }
    private num_dado(){
        return Math.floor(Math.random()*6) + 1; 
    }
    public mostrar_dado(){
        console.log(`Lanzamiento de dado: ${this.valor_actual}`);
    }
}
const dado1 = new Dado();



