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

    buscaContacto(buscaNombre) {
        let encontrado = 0;
        for (let i = 0; i < arrayContactos.length; i++) {
            if (arrayContactos[i].nombre == buscaNombre) {
                encontrado = 1;
                document.write(`<hr><h3>Contacto Encontrado</h3>
                Nombre: ${arrayContactos[i].nombre}
                <br> Teléfono: ${arrayContactos[i].telefono}<br><hr>`);
                break;
            }
        }
        if (encontrado == 0) {
            alert(`El Contacto No fue encontrado en la Agenda.`);
        }
    }

    eliminarContacto(eliminaNombre) {
        let eliminado = 0;
        for (let i = 0; i < arrayContactos.length; i++) {
            if (arrayContactos[i].nombre == eliminaNombre) {
                arrayContactos.splice(i, 1);
                eliminado = 1;
                alert(`El Contacto ${eliminaNombre} ha sido eliminado de la Agenda.`)
                break;
            }
        }
        if (eliminado == 0) {
            alert(`El Contacto No fue encontrado para ser eliminado de la Agenda.`)
        }
    }

    listarContactos() {
        document.write("<h3>Lista de Contactos</h3>");
        for (let impr = 0; impr < arrayContactos.length; impr++) {
            document.write(`
            Nombre: ${arrayContactos[impr].nombre}
            <br>Teléfono: ${arrayContactos[impr].telefono}<hr>`);
        }
    }

    agendaLlena() {
        if (arrayContactos.length > 10) {
            document.write(`<br>La Agenda está llena.<br>`)
        } else {
            document.write(`<br>La Agenda no está llena.<br>`)
        }
    }

    huecosLibres() {
        let libres = 0;
        if (arrayContactos.length < 10) {
            libres = 10 - arrayContactos.length;
            document.write(`<br>Existen ${libres} espacios disponibles.<br>`)
        } else {
            document.write(`<br>No Existen espacios libres.<br>`)
        }
    }
}
// se define arreglo que almacenara los contactos
let arrayContactos = [];
// contador de contactos para ingresar solo hasta 10 contactos
let cantContactos = 0;
let existeContacto = 0;

// ------ Bucle para ingresar hasta 10 contactos --------
do {
    let nuevoNombre = prompt("Ingrese Nombre:").toUpperCase().trimEnd().trimStart();
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
nuevoContacto.listarContactos();

//---- Cantidad de huecos libres en la Agenda ---------
nuevoContacto.huecosLibres();

//--- indica si la Agenda esta llena------------------
nuevoContacto.agendaLlena();

// ---- Buscar contacto x nombre y mostrar telefono ---
let buscaNomb = prompt("Ingrese Nombre del contacto a BUSCAR: ").toUpperCase().trimEnd().trimStart();
nuevoContacto.buscaContacto(buscaNomb);

// ---- Eliminar contacto --------
let eliminaNomb = prompt("Ingrese Nombre del contacto a ELIMINAR: ").toUpperCase().trimEnd().trimStart();
nuevoContacto.eliminarContacto(eliminaNomb);
//------------------------------------------------------
//---- listar todos los Contactos de la Agenda ------
nuevoContacto.listarContactos();