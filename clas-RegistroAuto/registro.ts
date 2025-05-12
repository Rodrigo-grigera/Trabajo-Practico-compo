/*-Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, con
métodos para:
● Agregar un auto
● Buscar un auto por patente
● Eliminar o actualizar autos existente */

import { Auto } from "../clas-Autos/auto";

class RegistroAuto{
    private auto: Auto[];
    private patente: string[];

    public constructor(){
        
        this.auto = []
        this.patente = []
    }
    
    public buscarAuto_porPatente(patenteAuto: string){
        let encontrar;

        for(let i = 0; i < this.patente.length;i++){
            encontrar =  this.patente[i] 
            if(encontrar === patenteAuto){
                console.log(`Auto con patente: ${patenteAuto} , ya se encuentra Registrado`);
        }
    }

}
    public agregarAuto(auto : Auto, patente:string){
        
        this.auto.push(auto);
        this.patente.push(patente);

        console.log(`
            Auto Agregado correctamente al registro
            -----------------------------------------`);
        
    }

    public info_autos(){
        console.log("Autos registrados:");
    if(this.auto.length > 0){

        for (let i = 0; i < this.auto.length; i++) {
            const auto = this.auto[i];
            const patente = this.patente[i];
            console.log(`- ${auto.getMarca()} ${auto.getModelo()} (${patente})`);
        }
    }else{
        console.log(`No hay autos registrados`);
    }
    }
    
    public eliminarAuto(patente: string): void {
    const index = this.patente.indexOf(patente);
    if (index !== -1) {
    this.auto.splice(index, 1);
    this.patente.splice(index, 1);
    console.log(`Auto con patente ${patente} eliminado del registro.`);
    } else {
    console.log(`No se encontró esa patente para eliminar.`);
    }
}
}

const autos = new RegistroAuto();
const auto1 : Auto = new Auto("Ford", "Mustang", "Rojo")

autos.agregarAuto(auto1, "RXTZ-442");
autos.info_autos();


