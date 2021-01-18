// Agenda telefónica

// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono.
// Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. 
//Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// OK aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar 
//mas contactos indicar por pantalla.
// OK existeContacto(Conctacto): indica si el contacto pasado existe o no.
// OK listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, 
// indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Agenda {
    constructor(nombreP, telefonoP) {
        this.nombre = nombreP;
        this.telefono = telefonoP;
    }

    existeContacto(nombreP) {
        let existe = 0;
        if (arrayContactos.length > 0) {
            for (let cont = 0; cont < arrayContactos.length; cont++) {
                if (nombreP == arrayContactos[cont].nombre) {
                    existe = 1;
                    cont = cont + arrayContactos.length;
                } else {
                    existe = 0;
                }
            }
        } else {
            if (arrayContactos.length = 0) {
                existe = 0;
            }
        }
        return existe;
    }

    aniadirContacto() {
        arrayContactos.push(nuevoContacto);
    }

    listarContactos() {
        document.write("<h3>Lista de Contactos</h3>");
        for (let impr = 0; impr < arrayContactos.length; impr++) {
            document.write(`
            <br>Nombre: ${arrayContactos[impr].nombre}
            <br>Teléfono: ${arrayContactos[impr].telefono}<hr>`);
        }
    }

    agendaLlena() {
        let llena = this.huecosLibres();

        if (llena != 0) {
            alert("La Agenda tiene espacios disponibles.")
        } else {
            alert("La Agenda llena.")
        }
    }

    huecosLibres() {
        let libres = 0;
        if (arrayContactos.length > 0) {
            for (let cont = 0; cont < arrayContactos.length; cont++) {
                if (arrayContactos[cont].nombre == null && arrayContactos[cont].telefono == null) {
                    libres++;
                } else {
                    libres = 0;
                }
            }
        } else {
            alert("La Agenda está vacía.");
            libres = 0;
        }
        return libres;
    }

}
// se define arreglo que almacenara los contactos
let arrayContactos = [];
// contador de contactos para ingresar solo hasta 10 contactos
let cantContactos = 0;
let existeContacto = 0;

// ------ Bucle para ingresar hasta 10 contactos --------
do {
    let nuevoNombre = prompt("Ingrese Nombre:").toUpperCase();
    let nuevoTelefono = prompt("Ingrese Telefono");
    nuevoContacto = new Agenda(nuevoNombre, nuevoTelefono);

    if (cantContactos != 0) {
        // Verifica si el contacto existe, antes de agregarlo a la agenda
        let existeContacto = nuevoContacto.existeContacto(nuevoNombre);
        if (existeContacto == 0) {
            // --- Agrega Contacto ----
            cantContactos++;
            nuevoContacto.aniadirContacto();
        } else {
            // -- NO agrega contacto ---
            alert("Contacto ya Existente.");
        }
    } else {
        // la primera vez agrega contacto SIN verificar que existe
        cantContactos++;
        nuevoContacto.aniadirContacto(nuevoContacto);
    }
}
while (confirm("Desea seguir ingresando Contactos?") && (cantContactos < 10));
//-------------- FIN BUCLE PARA INGRESAR DATOS ----------

//---- listar todos los Contactos de la Agenda ------
this.listarContactos();

//---- Cantidad de huecos libres en la Agenda ---------
let cantHuecos = this.huecosLibres();
document.write("Cantidad de huecos libres en la Agenda: " + cantHuecos);


//----

// agregar un elemento en una posicion en particular
//personajes.splice(posicion donde se agregaelemento, si quiero borrar un elemento (cantidad) , cuan es el valor de elemento)
// personajes.splice(1, 0, "Lisa")
// mostrarPersonajes("Agregar un elemento en una posicion del arreglo en particular");

// eliminar un elemento de una posicion particular (posicion que quiero borrar, cuantos elementos quiero borrar desde la posicion que indique)
// personajes.splice(4, 2);
// mostrarPersonajes("Eliminar un elemento en una posicion del arreglo en particular");