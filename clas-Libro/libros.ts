/*
Implementar  una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor, 
Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al 
usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
libro y el número de páginas.  Crear dos o tres instancias de la Clase e implementar ambos 
métodos. */

import * as rls from "readline-sync";

class Libro{
    private ISBN : string;
    private titulo: string;
    private autor: string;
    private num_pag: number;

    public constructor(){
        this.titulo = ""
        this.autor = ""
        this.ISBN = ""
        this.num_pag = 0
    }
    datos_usuario(){
        this.titulo = rls.question("Ingresar Titulo del libro: ");
        this.autor = rls.question("Ingresar Autor del libro: ");
        this.ISBN = rls.question("Ingresar ISBN del libro: ");
        this.num_pag = rls.questionFloat("Ingresar cantidad de paginas del libro: ");
        return ;
    }
    
    informe(){console.log( `
        Libro: ${this.titulo}
        Autor: ${this.autor}
        ISBN: ${this.ISBN}
        Numero de paginas: ${this.num_pag}`);
    }

}

const lib1 = new Libro();
const lib2 = new Libro();
const lib3 = new Libro();



lib1.datos_usuario();
lib1.informe();
lib2.datos_usuario()
lib2.informe();


// "Cien Años de Soledad", "Gabriel García Márquez", "978-0307474728", 417
// "1984", "George Orwell", "978-0451524935", 328
// "Don Quijote de la Mancha", "Miguel de Cervantes", "978-8420472128", 863