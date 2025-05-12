/*
-Plantear una clase Persona, pensar que atributos y
métodos puede tener e implementarla en Typescript.
 */
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, dni, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
    }
    Persona.prototype.info_persona = function () {
        console.log("\n        Nombre: ".concat(this.nombre, "\n        Apellido: ").concat(this.apellido, "\n        DNI: ").concat(this.dni, "\n        Edad: ").concat(this.edad));
    };
    Persona.prototype.mayor_edad = function () {
        if (this.edad > 18) {
            console.log("\n".concat(this.nombre, " es mayor de edad"));
        }
        else {
            console.log("\n".concat(this.nombre, " es menor de edad"));
        }
    };
    return Persona;
}());
var perso1 = new Persona("Roman", "Riquelme", 15876456, 45);
perso1.info_persona();
perso1.mayor_edad();
