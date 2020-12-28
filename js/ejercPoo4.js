// Producto
// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
//  nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus 
//  propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos
//  instanciados.

class Producto {
    constructor(codigoP, nombreP, precioP) {
        this.codigo = codigoP;
        this.nombre = nombreP;
        this.precio = precioP;
    }

    imprimeDatos() {
        document.write(`<h4> Datos del Producto</h4>
        Código: ${this.codigo}
        <br>Nombre: ${this.nombre}
        <br>Precio: ${this.precio}`)
    }

    get mostrarCodigo() {
        return this.codigo;
    }

    get mostrarNombre() {
        return this.nombre;
    }

    get mostrarPrecio() {
        return this.precio;
    }

    set modificarCodigo(nuevoCodigo) {
        this.codigo = nuevoCodigo;
    }

    set modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    set modificarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
}

//----- INICIO CODIGO -------
let producto1 = new Producto("101", "Producto1", 100);
let producto2 = new Producto("102", "Producto2", 200);
let producto3 = new Producto("103", "Producto3", 300);


let i = 1;
let arreglo = [];

for (let i = 1;
    (i <= 3); i++) {


}