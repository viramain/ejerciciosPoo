// Producto
// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
//  nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus 
//  propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos
//  instanciados.

class Productos {
    constructor(codigoP, nombreP, precioP) {
        this.codigo = codigoP;
        this.nombre = nombreP;
        this.precio = precioP;
    }

    // listado de los productos ingresados
    imprimeDatos() {
        for (let imprime = 0;
            (imprime < arrayProductos.length); imprime++) {
            document.write(`<h3>Datos del Producto Nro ${imprime+1}</h3>
            Código: ${arrayProductos[imprime].codigo}
            <br>Nombre: ${arrayProductos[imprime].nombre}
            <br>Precio: ${arrayProductos[imprime].precio}<br>`)
        }
    }

    // muestra el producto recien ingresado
    mostrarDatos() {
        document.write(`<h4> Datos del Producto</h4>
        Código: ${this.codigo}
        <br>Nombre: ${this.nombre}
        <br>Precio: ${this.precio}<br>`)
    }

    //---- SETTER Y GETTER---------
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
let arrayProductos = [];

for (let i = 0;
    (i <= 2); i++) {
    let nuevoProd = prompt("Ingrese Nombre del producto: ");
    if (nuevoProd != null && nuevoProd != "") {
        let nuevoPcio = prompt("Ingrese Precio del producto: ");
        if (nuevoPcio > 0) {
            let producto = new Productos(i + 1, nuevoProd, nuevoPcio);
            arrayProductos[i] = producto;
            producto.mostrarDatos();
            // producto.imprimeDatos();
        } else {
            alert("El precio del producto debe ser mayor que 0.");
        }
    } else {
        alert("Debe ingresar nombre del producto");
    }

}

// NO FUNCIONA FUERA DEL FOR
// producto.imprimeDatos();

document.write("<br>" + "Se ingresaron los 3 productos requeridos.");

// class Product
// {
// 	constructor(code, name, price)
// 	{
// 		this._code = code;
// 		this._name = name;
// 		this._price = price;
// 	}

// 	printData(pos)
// 	{
// 		console.group(`Producto ${pos}:`);
// 		console.log(`Codigo: ${this._code}`);
// 		console.log(`Nombre: ${this._name}`);
// 		console.log(`Precio: $${this._price}`);
// 		console.groupEnd();
// 	}
// }

// let array = [];
// let objOne = new Product(1, 'Smartphone', 42000);
// let objTwo = new Product(2, 'Smart-TV', 183000);
// let objThree = new Product(3, 'Notebook', 135000);

// array = [objOne, objTwo, objThree];

// for (let i=0; i<array.length; i++)
// {
// 	array[i].printData(i+1);
// }