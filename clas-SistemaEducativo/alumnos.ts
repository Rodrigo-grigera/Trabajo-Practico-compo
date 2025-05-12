/*Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
• Los profesores deben tener un listado de sus alumnos.
• Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es 
mayor que 7). 
• La escuela debe tener un registro de los alumnos y maestros, y debe poder 
matricular/contratar y expulsar/despedir a los mismos */

class Alumnos{
    
    private nombre: string;
    private nota: number;
    private aprobado: boolean = false;

    public constructor(nombre:string, nota:number){
        this.nombre = nombre;
        this.nota = nota;
    }
    public aprobar(){
        if(this.nota > 10 || this.nota < 1){
            console.log(`Error de nota. verifique que la nota sea de "1" a "10"`);
        }else
            if(this.nota <= 6){
                this.aprobado 
                console.log("desaprobado");
            }else{
                this.aprobado = true
                console.log("Aprobado");
        }
    }
    public datosAlumno(){
        console.log(`
            -------------------------------------
                    Nombre: ${this.nombre}
                    Calificacion: ${this.nota}`);
    }
    public get_alumno(){
        console.log(`Alumno: ${this.nombre}`)
    }

}
const alum1: Alumnos = new Alumnos("Juan Materapzi", 8);
const alum2: Alumnos = new Alumnos("Marcos Mancanu", 6);
const alum3: Alumnos = new Alumnos("Manuel Perrats", 7);

let alumnos : Alumnos [] =[alum1,alum2,alum3];


class Profesor{
    private nombre: string;
    private apellido: string;
    private alumnos : Alumnos[] ;

    public constructor(nombre:string, apellido:string, alumnos:Alumnos[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.alumnos = alumnos;
    }
    public nombre_profesor(){
        console.log(`Profesor: ${this.nombre} ${this.apellido}`); 
    }

    public info(){
        for(let i=0; i<alumnos.length; i++){
                alumnos[i].datosAlumno()
                alumnos[i].aprobar()

        }
    }
    get_profesor(){
        return `${this.nombre} ${this.apellido}`
    }
}

const profes1 : Profesor = new Profesor("Marcos", "Gimenez",alumnos);
const profes2 : Profesor = new Profesor("Marcela", "stefan",alumnos);
const profes3 : Profesor = new Profesor("Tomas", "fioreta",alumnos);
const profes4 : Profesor = new Profesor("Roman", "Riquelme",alumnos);
const profes5 : Profesor = new Profesor("Castro", "Fidel",alumnos);

const profesores : Profesor[] =[];


class Escuela{
    private nombreEsc: string;
    private alumnos: Alumnos[];
    private profesores: Profesor[];

    public constructor(nombreEsc:string, alumnos:Alumnos[], profesores:Profesor[]){
        this.nombreEsc = nombreEsc;
        this.alumnos = alumnos;
        this.profesores = profesores;
    }
    
    public registro_alumnos(){
        for(let i = 0; i < this.alumnos.length; i++){
            this.alumnos[i].get_alumno()
        }
        console.log("------------------------------");
    }
    public registro_profesor(){
        for (let i = 0; i < this.profesores.length; i++) {
            this.profesores[i].nombre_profesor();
        }
        console.log("------------------------------");

    }
    public expulsar(profesorAEliminar: Profesor) {
        console.log(`-------------------------------------------`);
        this.profesores = this.profesores.filter(pro => pro !== profesorAEliminar);
        console.log(`Profesor expulsado: ${profesorAEliminar.get_profesor()}
-----------------------------------------`);
    }
    
    public contratarProfesor(profesorContrato: Profesor){
        this.profesores.push(profesorContrato);
        console.log(`Profesor: ${profesorContrato.get_profesor()} contratado`);
    }
}

const colegio : Escuela = new Escuela("ESSB Nª3",alumnos,profesores);


colegio.registro_profesor()
colegio.contratarProfesor(profes2)
colegio.contratarProfesor(profes3)
colegio.contratarProfesor(profes4)
colegio.contratarProfesor(profes5)
colegio.contratarProfesor(profes1)

colegio.expulsar(profes2)
colegio.registro_profesor()

