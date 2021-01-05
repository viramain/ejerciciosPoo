// 1- Crea un objeto llamado auto que tenga algunas características como el color,
// marca, modelo y si está encendido o apagado. 
// Crea los métodos necesarios para permitir encender y apagar el auto.

//primero se definen clases, metodos y objetos

class automotor {
    constructor(colorP, marcaP, modeloP, onoffP, tipoP) {
        this.color = colorP;
        this.marca = marcaP;
        this.modelo = modeloP;
        this.onoff = onoffP;
        this.tipo = tipoP;
    }

    // metodo para indicar si esta prendido o apagado
    onOffAuto(onoffP) {
        if (onoffP == 1) {
            document.write("<br>" + "<h3>Auto Encendido</h3)")
        } else {
            document.write("<br>" + "<h3>Auto Apagado</h3)")
        }
    }

    mostrarDatos() {
        document.write(`<br><h4>Auto</h4>
        Color: ${this.color}
        <br>Marca: ${this.marca}
        <br>Modelo: ${this.modelo}
        <br>Encendido/Apagado: ${this.onoff}
        <br>Tipo: ${this.tipo}`)
    }

    get mostrarOnoff() {
        return this.onoff;
    }

    set modificarOnoff(nuevoOnoff) {
        this.onoff = nuevoOnoff;
    }

}

// INICIO CODIGO DEL PROYECTO

let auto = new automotor("Gris", "Ford", "Focus", null, "auto");
let accion = prompt("¿ Desea Encender el Auto ? Responda con S (Si)/ N (No): ");
accion = accion.toUpperCase();

if (accion == "S") {
    auto.onOffAuto(1);
    auto.onoff = 1;
    auto.mostrarDatos();
} else {
    if (accion == "N") {
        auto.onOffAuto(0);
        auto.onoff = 0;
        auto.mostrarDatos();
    } else {
        document.write("No ingresó S o N");
    }
}