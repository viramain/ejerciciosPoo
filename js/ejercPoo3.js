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
        <br>Area: ${this.area}<br>`)
    }

    //---- GETTER (mostrar) ------
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

    //---- SETTER (modificar) ------
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

//----------------INICIO CODIGO ---------------------
let nrorectang = 1;
do {
    let varAlto = parseFloat(prompt("Ingrese Altura del Rectangulo:"));
    if (varAlto > 0) {
        errorCarga = 0;
        let varAncho = parseFloat(prompt("Ingrese Ancho del Rectangulo:"));
        if (varAncho > 0) {
            // ---- Crea Rectangulo ----
            errorCarga = 0;
            let nuevoRectangulo = new Rectangulos(varAlto, varAncho);
            nuevoRectangulo.calculaPerimetro();
            nuevoRectangulo.calculaArea();
            document.write(`<br>RECTANGULO NRO: ${nrorectang}<br>`);
            nuevoRectangulo.mostrarDatos();
            nrorectang++;
        } else {
            alert("El ancho del Rectangulo debe ser mayor que cero.");
        }
    } else {
        alert("El alto del Rectangulo debe ser mayor que cero.");
    }
} while (confirm("Desea continuar ingresando Rectangulos?"));

alert("Proceso Terminado.")