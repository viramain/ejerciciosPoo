// Cuenta bancaria
// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y 
//volver a mostrar la descripción del estado de la cuenta.


class CtaBancaria {
    constructor(nrocuentaP, titularP) {
        this.nroCuenta = nrocuentaP;
        this.titular = titularP;
        this.saldo = 0.00;
    }

    // ----- METODOS -----------
    ingresarDinero(cantidad) {
        this.saldo = this.saldo + cantidad;
    }

    extraerDinero(cantidad) {
        this.saldo = this.saldo - cantidad;
    }

    informar() {
        document.write(`Nro de Cuenta: ${this.nroCuenta}
        <br>Titular: ${this.titular}
        <br>Saldo: ${this.saldo}`)
    }

    //------- SETs --------
    get mostrarNroCuenta() {
        return this.nroCuenta;
    }
    get mostrarTitular() {
        return this.titular;
    }
    get mostrarSaldo() {
        return this.saldo;
    }

    //-------- GETs --------
    set modificarNroCuenta(nuevoNroCuenta) {
        this.nroCuenta = nuevoNroCuenta;
    }
    set modificarTitular(nuevoTitular) {
        this.titular = nuevoTitular;
    }
    set modificarSaldo(nuevoSaldo) {
        this.saldo = nuevoSaldo;
    }
}

// ----- INICIO CODIGO ------
// crea objeto cuenta con valores iniciales
let cuenta = new CtaBancaria(14505, "Alex");
//muestra valores iniciales
document.write(`<h4>Datos Iniciales Cuenta Bancaria</h4>`);
cuenta.informar();

//Ingresa dinero a la cuenta
let dinero = parseFloat(prompt("Ingrese monto a depositar en su cuenta: "));
cuenta.ingresarDinero(dinero);
document.write(`<h4>Datos Depósito Cuenta Bancaria</h4>`);
cuenta.informar();

//Extrae dinero de la cuenta
dinero = parseFloat(prompt("Ingrese monto a extraer de su cuenta: "));
if (cuenta.saldo >= dinero) {
    cuenta.extraerDinero(dinero);
    document.write(`<br>Monto Extracción = ` + dinero);
    document.write(`<h4>Datos Saldo Cuenta Bancaria</h4>`);
    cuenta.informar();

} else {
    alert("El monto a extraer es superior al Saldo de su cuenta")
}