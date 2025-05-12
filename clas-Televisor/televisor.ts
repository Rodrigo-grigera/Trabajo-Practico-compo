/*Implementar la clase Televisor con todos los atributos
y métodos, como se vio en clase, incluido 
la funcionalidad mute. */

import { Decodificar } from "../clas-Decodificador/decodificador";

    class Televisor {
        private brand: string;
        private volume: number = 0;
        private channel: number = 1;
        private maxChannel: number = 99;
        private isOn: boolean = false;
        private muted: boolean = false;
        private decodificador? : Decodificar;
        private act_Decodificador : boolean = false;

    public constructor(brand: string,decodificador?:Decodificar) {
        this.brand = brand;
        this.decodificador = decodificador;
    }
        public switchPower(): void {
            this.isOn = !this.isOn
        }
        private getTime(): string {
            const fullDate = new Date()
            return `${fullDate.getHours()}:${fullDate.getMinutes()}`


    }
    public info(): void {
        if (this.isOn === false) {
            return
        } else {
            console.log(`
                Channel: ${this.channel}
                Volume: ${this.volume}
                Hour: ${this.getTime()}
                -----------\n`)
        }
    }
    public activar_decodificador(): void {
        if (!this.decodificador) {
            console.log("No hay decodificador conectado.");
            return;
        }

        this.act_Decodificador = !this.act_Decodificador;

        if (this.act_Decodificador) {
            this.maxChannel += this.decodificador.canales_extras();
            console.log(`Decodificador activado.`);
        } else {
            this.maxChannel = 99;
            if (this.channel > this.maxChannel) {
                this.channel = this.maxChannel;
            }
            console.log(`Decodificador desactivado. Canales hasta ${this.maxChannel}`);
        }
    }

    public channelUp(): void {
        
        if (this.channel === this.maxChannel) {
            this.channel = 1
        } else {
            this.channel += 1
        }
    }
    public channelDown(): void {
        if (this.channel === 1) {
            this.channel = this.maxChannel
        } else {
            this.channel -= 1
        }
    }
    public selectChannel(channelNumber: number) {
        if (channelNumber > 0 && channelNumber <= this.maxChannel) {
            this.channel = channelNumber
            
        }
    }
    public selectVolumenup(){
        if(this.volume >= 100 ){
            this.volume = 100
        }else{
            this.volume ++
            
        }
        
    }
    public selectVolumenDown(){
        if(this.volume <= 0){
            this.volume = 0
        }else{
            this.volume --
        }
    }
    public isMuted(){
        this.muted = !this.muted
        if(this.muted  && this.volume > 0){
            console.log(`Muted activado
                Volumen = ${this.volume = 0}`);
            }else{
                console.log(`Muted desactivado `);
            
            }
    }

}


    
const deco = new Decodificar();

const tv1 = new Televisor("TCL", deco);


tv1.switchPower()
tv1.channelUp()
tv1.channelUp()
tv1.channelUp()
tv1.channelUp()
tv1.channelUp()
tv1.info()
tv1.activar_decodificador()
tv1.selectChannel(122)
tv1.channelUp()

tv1.info()
