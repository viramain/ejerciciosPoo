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
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Agenda {
    constructor(nombreP, telefonoP) {
        this.nombre = nombreP;
        this.telefono = telefonoP;
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
}

//-----------------------------------------------------------------
function buscarContacto(nombreP) {
    console.log("en funcion");
    for (let cantContactos = 0;
        (cantContactos < arrayContactos.length); cantContactos++) {
        console.log("en FOR");
        console.log("nombreP:" + nombreP);
        console.log("array: " + arrayContactos[cantContactos].nombre);
        if (nombreP == arrayContactos[cantContactos].nombre) {
            console.log("encuentra nomre: " + arrayContactos[cantContactos].nombre)
            let existeContacto = 1;
            let buscaTel = arrayContactos[cantContactos].telefono;
            cantContactos = cantContactos + arrayContactos.length;
        }
    }
    return buscaTel;
}

// se define arreglo que almacenara los contactos
let arrayContactos = [];
let contacto1 = new Agenda("JUAN PEREZ", 123456);
let contacto2 = new Agenda("MARIA LOPEZ", 123456);
let contacto3 = new Agenda("PEDRO RODRIGUEZ", 123456);
let contacto4 = new Agenda("ANA MARTINEZ", 123456);
let contacto5 = new Agenda("RAUL GARCIA", 123456);
arrayContactos[0] = contacto1;
arrayContactos[1] = contacto2;
arrayContactos[2] = contacto3;
arrayContactos[3] = contacto4;
arrayContactos[4] = contacto5;
console.log(arrayContactos[0]);
console.log(arrayContactos[1]);
console.log(arrayContactos[2]);
console.log(arrayContactos[3]);
console.log(arrayContactos[4]);

let existeContacto = 0;

let buscaNombre = prompt("Ingrese Nombre que desea buscar:").toUpperCase();

console.log("Antes de llamar funcion:" + buscaNombre);

let buscaTelefono = buscarContacto(buscaNombre);

console.log("despues de llamar funcion:" + buscaTelefono);
if (existeContacto == 1) {
    document.write(`<h3>Datos Encontrados</h3>
    Nombre:${buscaNombre}
    <br>Telefono:${buscaTelefono}<hr>`);
} else {
    document.write("Contacto No Encontrado.")
}