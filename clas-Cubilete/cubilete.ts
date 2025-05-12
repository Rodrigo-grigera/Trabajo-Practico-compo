/*
-Usando la clase Dado del ejercicio 6, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o
dados en particular
*/
import { Dado } from "../clas-Dado/dado";

class Cubilete{
    private dados: Dado[]

    public constructor(dados: Dado[]){
        this.dados = dados
    }
    public dados_al_Vaso(dado: Dado){
        this.dados.push(dado)

    }
    public lanzar_dados(){
        for (let i = 0; i < this.dados.length; i++) {
            
            this.dados[i].lanzamiento()
            this.dados[i].mostrar_dado()
        
        }
    }
}


const dado1 = new Dado();
const dado2 = new Dado();
const dado3 = new Dado();
const dado4 = new Dado();
const dado5 = new Dado();

const dados : Dado [] = [];

const cubilete : Cubilete = new Cubilete(dados);

cubilete.dados_al_Vaso(dado1);
cubilete.dados_al_Vaso(dado2);
cubilete.dados_al_Vaso(dado3);
cubilete.dados_al_Vaso(dado4);
cubilete.dados_al_Vaso(dado5);

cubilete.lanzar_dados();

