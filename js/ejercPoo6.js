// Libros
// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN (international Standard Book Number)
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libros {
    constructor(isbnP, tituloP, autorP, nroPaginasP) {
        this.ISBN = isbnP;
        this.titulo = tituloP;
        this.autor = autorP;
        this.nroPaginas = nroPaginasP;
    }

    mostrarLibros() {
        document.write(`El Libro ${this.mostrarTitulo} con ISBN ${this.mostrarISBN} creado por el autor ${this.mostrarAutor} tiene ${this.mostrarNroPaginas} páginas. <br>`);
    }

    get mostrarISBN() {
        return this.ISBN;
    }
    get mostrarTitulo() {
        return this.titulo;
    }
    get mostrarAutor() {
        return this.autor;
    }
    get mostrarNroPaginas() {
        return this.nroPaginas;
    }
    set modificaISBN(nuevoISBN) {
        this.ISBN = nuevoISBN;
    }
    set modificaTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }
    set modificaAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    }
    set modificaNroPaginas(nuevoNroPaginas) {
        this.nroPaginas = nuevoNroPaginas;
    }
}

let libro1 = new Libros("9788498381498", "El Principito", "Antoine De Saint-Exupery", 99);
let libro2 = new Libros("9789877382570", "Rayuela", "Julio Cortazar", 576);
libro1.mostrarLibros();
libro2.mostrarLibros();

if (libro1.nroPaginas > libro2.nroPaginas) {
    document.write(`El libro ${libro1.mostrarTitulo} tiene más páginas que ${libro2.mostrarTitulo}.<br>`);
} else {
    if (libro1.nroPaginas < libro2.nroPaginas) {
        document.write(`El libro ${libro2.mostrarTitulo} tiene más páginas que ${libro1.mostrarTitulo}.<br>`);
    } else {
        document.write(`Ambos libros ${libro1.mostrarTitulo} y ${libro2.mostrarTitulo} tienen la misma cantidad de páginas.<br>`);
    }
}