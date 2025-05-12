/*
-Plantear una clase Persona, pensar que atributos y
métodos puede tener e implementarla en Typescript.
 */

class Persona{
    private nombre: string;
    private apellido: string;
    private dni: number;
    private edad : number;

    public constructor(nombre: string, apellido: string, dni: number, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        
    }
    info_persona(){console.log(`
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        DNI: ${this.dni}
        Edad: ${this.edad}`);
    }
    mayor_edad(){
        if(this.edad > 18){
            console.log(`\n${this.nombre} es mayor de edad`);
        }else{
            console.log(`\n${this.nombre} es menor de edad`);
        }
    }
}
const perso1 = new Persona("Roman", "Riquelme",15876456, 45);

perso1.info_persona()
perso1.mayor_edad()

