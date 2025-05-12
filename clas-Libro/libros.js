"use strict";
/*
Implementar  una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor,
Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al
usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
libro y el número de páginas.  Crear dos o tres instancias de la Clase e implementar ambos
métodos. */

Object.defineProperty(exports, "__esModule", { value: true });

var rls = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro() {
        this.titulo = "";
        this.autor = "";
        this.ISBN = "";
        this.num_pag = 0;
    }
    Libro.prototype.datos_usuario = function () {
        this.titulo = rls.question("Ingresar Titulo del libro: ");
        this.autor = rls.question("Ingresar Autor del libro: ");
        this.ISBN = rls.question("Ingresar ISBN del libro: ");
        this.num_pag = rls.questionFloat("Ingresar cantidad de paginas del libro: ");
        return;
    };
    Libro.prototype.informe = function () {
        console.log("\n        Libro: ".concat(this.titulo, "\n        Autor: ").concat(this.autor, "\n        ISBN: ").concat(this.ISBN, "\n        Numero de paginas: ").concat(this.num_pag));
    };
    return Libro;
}());
var lib1 = new Libro();
var lib2 = new Libro();
var lib3 = new Libro();
lib1.datos_usuario();
lib1.informe();
lib2.datos_usuario();
lib2.informe();
// "Cien Años de Soledad", "Gabriel García Márquez", "978-0307474728", 417
// "1984", "George Orwell", "978-0451524935", 328
// "Don Quijote de la Mancha", "Miguel de Cervantes", "978-8420472128", 863
