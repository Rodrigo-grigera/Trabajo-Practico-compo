/*Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
• Los profesores deben tener un listado de sus alumnos.
• Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es
mayor que 7).
• La escuela debe tener un registro de los alumnos y maestros, y debe poder
matricular/contratar y expulsar/despedir a los mismos */
var Alumnos = /** @class */ (function () {
    function Alumnos(nombre, nota) {
        this.aprobado = false;
        this.nombre = nombre;
        this.nota = nota;
    }
    Alumnos.prototype.aprobar = function () {
        if (this.nota > 10 || this.nota < 1) {
            console.log("Error de nota. verifique que la nota sea de \"1\" a \"10\"");
        }
        else if (this.nota <= 6) {
            this.aprobado;
            console.log("desaprobado");
        }
        else {
            this.aprobado = true;
            console.log("Aprobado");
        }
    };
    Alumnos.prototype.datosAlumno = function () {
        console.log("\n            -------------------------------------\n                    Nombre: ".concat(this.nombre, "\n                    Calificacion: ").concat(this.nota));
    };
    Alumnos.prototype.get_alumno = function () {
        console.log("Alumno: ".concat(this.nombre));
    };
    return Alumnos;
}());
var alum1 = new Alumnos("Juan Materapzi", 8);
var alum2 = new Alumnos("Marcos Mancanu", 6);
var alum3 = new Alumnos("Manuel Perrats", 7);
var alumnos = [alum1, alum2, alum3];
var Profesor = /** @class */ (function () {
    function Profesor(nombre, apellido, alumnos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.alumnos = alumnos;
    }
    Profesor.prototype.nombre_profesor = function () {
        console.log("Profesor: ".concat(this.nombre, " ").concat(this.apellido));
    };
    Profesor.prototype.info = function () {
        for (var i = 0; i < alumnos.length; i++) {
            alumnos[i].datosAlumno();
            alumnos[i].aprobar();
        }
    };
    Profesor.prototype.get_profesor = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    return Profesor;
}());
var profes1 = new Profesor("Marcos", "Gimenez", alumnos);
var profes2 = new Profesor("Marcela", "stefan", alumnos);
var profes3 = new Profesor("Tomas", "fioreta", alumnos);
var profes4 = new Profesor("Roman", "Riquelme", alumnos);
var profes5 = new Profesor("Castro", "Fidel", alumnos);
var profesores = [];
var Escuela = /** @class */ (function () {
    function Escuela(nombreEsc, alumnos, profesores) {
        this.nombreEsc = nombreEsc;
        this.alumnos = alumnos;
        this.profesores = profesores;
    }
    Escuela.prototype.registro_alumnos = function () {
        for (var i = 0; i < this.alumnos.length; i++) {
            this.alumnos[i].get_alumno();
        }
        console.log("------------------------------");
    };
    Escuela.prototype.registro_profesor = function () {
        for (var i = 0; i < this.profesores.length; i++) {
            this.profesores[i].nombre_profesor();
        }
        console.log("------------------------------");
    };
    Escuela.prototype.expulsar = function (profesorAEliminar) {
        console.log("-------------------------------------------");
        this.profesores = this.profesores.filter(function (pro) { return pro !== profesorAEliminar; });
        console.log("Profesor expulsado: ".concat(profesorAEliminar.get_profesor(), "\n-----------------------------------------"));
    };
    Escuela.prototype.contratarProfesor = function (profesorContrato) {
        this.profesores.push(profesorContrato);
        console.log("Profesor: ".concat(profesorContrato.get_profesor(), " contratado"));
    };
    return Escuela;
}());
var colegio = new Escuela("ESSB Nª3", alumnos, profesores);
// colegio.registro_alumnos()
// colegio.expulsar(profes1)
colegio.registro_profesor();
colegio.contratarProfesor(profes2);
colegio.contratarProfesor(profes3);
colegio.contratarProfesor(profes4);
colegio.contratarProfesor(profes5);
colegio.contratarProfesor(profes1);
colegio.expulsar(profes2);
colegio.registro_profesor();
