/*
Plantear una clase Auto de la forma en que se vió en la clase 
especificando variables internas 
y métodos. Implementar en TypeScript
*/


export class Auto{

    private marca : string;
    private modelo : string;
    private caja_autom : boolean = true;
    private color : string;
    private vel_max = 250;
    private vel_inicial = 0;
    private apagado : boolean = true;

    public constructor(marca:string, modelo:string, color:string){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    
    }

    encendido(){
        this.apagado = !this.apagado;
    }
    public aceleracion(){
        if(this.apagado == false){
            return this.vel_inicial += 10;
        }
    }
    public caja_manual(){
        this.caja_autom = !this.caja_autom;
        
    }
    public vel_crucero(){
        if(this.vel_inicial >= 120){
            console.log(`Se activo velocidad crucero : ${this.vel_inicial = 120}`);
        }
    }
    
    public data_auto(){
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Color: ${this.color}
            Tipo de caja: ${this.caja_autom ? "Automatic": "Manual"}
            Velocidad Maxima: ${this.vel_max}
            --------------------------------`);
        }
    public velocidad_actual(){
        if(this.vel_inicial <= 250 ){
            console.log(`Velocidad actual: ${this.vel_inicial}`)
        }
    }
    public getMarca(){
        return this.marca
    }
    public getModelo(){
        return this.modelo
    }
    
};


const auto2 : Auto = new Auto ("Chevrolet","Camaro","Negro");

// auto2.data_auto()
// autos.agregarAuto("Mazda", "RXTZ")
// autos.info_autos()
// autos.eliminarAuto("Falcon")
// autos.info_autos();




// auto1.caja_manual()
// auto1.data_auto()
// auto2.caja_manual()
// auto2.data_auto()

