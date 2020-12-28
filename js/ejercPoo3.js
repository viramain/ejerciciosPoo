// Rectángulos
// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, 
// calcular el perímetro y el área

class Rectangulos {
    constructor(altoP, anchoP) {
        this.alto = altoP;
        this.ancho = anchoP;
        this.perimetro = 0.00;
        this.area = 0.00;
    }

    calculaPerimetro() {
        this.perimetro = 2 * (this.alto + this.ancho);
        return;
    }

    calculaArea() {
        this.area = this.alto * this.ancho;
        return;
    }

    mostrarDatos() {
        document.write(`
        <br>Alto: ${this.alto}
        <br>Ancho: ${this.ancho}
        <br>Perimetro: ${this.perimetro}
        <br>Area: ${this.area}`)
    }

    //---- GETTER ------
    get mostrarAlto() {
        return this.alto;
    }
    get mostrarAncho() {
        return this.ancho;
    }

    get mostrarPerimetro() {
        return this.perimetro;
    }
    get mostrarArea() {
        return this.area;
    }

    //---- SETTER ------
    set modificarAlto(nuevoAlto) {
        this.alto = nuevoAlto;
    }

    set modificarAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
    }

    set modificarPermitro(nuevoPerimetro) {
        this.perimetro = nuevoPerimetro;
    }

    set modificarArea(nuevaArea) {
        this.area = nuevaArea;
    }
}

//----------------INCIO CODIGO ---------------------

// let alto = parseFloat(prompt("Ingrese Altura del Rectangulo:"));
// let ancho = parseFloat(prompt("Ingrese Ancho del Rectangulo:"));
// let nuevoRectangulo = new Rectangulos(alto, ancho);

// nuevoRectangulo.calculaPerimetro();
// nuevoRectangulo.calculaArea();
// nuevoRectangulo.mostrarDatos();

let nrorectang = 1;

do {
    let alto = parseFloat(prompt("Ingrese Altura del Rectangulo:"));
    let ancho = parseFloat(prompt("Ingrese Ancho del Rectangulo:"));
    let nuevoRectangulo = new Rectangulos(alto, ancho);
    nuevoRectangulo.calculaPerimetro();
    nuevoRectangulo.calculaArea();
    document.write(`RECTANGULO NRO: ` + nrorectang);
    nuevoRectangulo.mostrarDatos();
    nrorectang++;
} while (confirm("Desea continuar ingresando Rectangulos?"));