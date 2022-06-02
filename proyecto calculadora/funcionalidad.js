var numeroa;
var numerob;
var operador;
function init() {
    //enlazar id de html
    let lcd = document.getElementById("lcd");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let division = document.getElementById("division");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let multiplicacion = document.getElementById("multiplicacion");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let resta = document.getElementById("resta");
    let igual = document.getElementById("igual");
    let reset = document.getElementById("reset");
    let cero = document.getElementById("cero");
    let suma = document.getElementById("suma");
    // obtener datos
    cero.onclick = function (e) {
        lcd.textContent += "0"
    }

    uno.onclick = function (e) {
        lcd.textContent += "1"   
    }

    dos.onclick = function (e) {
        lcd.textContent += "2"
    }

    tres.onclick = function (e) {
        lcd.textContent += "3"
    }

    cuatro.onclick = function (e) {
        lcd.textContent += "4"
    }

    cinco.onclick = function (e) {
        lcd.textContent += "5"
    }

    seis.onclick = function (e) {
        lcd.textContent += "6"
    }

    siete.onclick = function (e) {
        lcd.textContent += "7"
    }

    ocho.onclick = function (e) {
        lcd.textContent += "8"
    }

    nueve.onclick = function (e) {
        lcd.textContent += "9"
    }
    //operadores
    suma.onclick = function (e) {
        numeroa = lcd.textContent;
        operador = "+";
        console.log(typeof(numeroa))
        console.log(numeroa)
        limpiar()
    }

    resta.onclick = function (e) {
        /* lcd.textContent += "-" */
        numeroa = lcd.textContent
        operador = "-"
        limpiar()
    }

    division.onclick = function (e) {
        /* lcd.textContent += "/" */
        numeroa = lcd.textContent
        operador = "/"
        limpiar()
    }

    multiplicacion.onclick = function (e) {
       /*  lcd.textContent += "x"; */
        numeroa = lcd.textContent
        operador = "x"
        limpiar()
    }

    igual.onclick = function (e) {
        numerob = lcd.textContent
        console.log(typeof(numerob))
        console.log(numerob)
        calcular();
    }
    reset.onclick = function (e) {
        borrar()
    }
}


//funcion limpiar pantalla
function limpiar (){
    lcd.textContent = "";
}
//funcion borra elementos de lcd
function borrar (){
    numeroa = 0;
    numerob = 0;
    lcd.textContent = "";
    operador = "";
}
//funcion calcular
function calcular (/* operador */){
    var resultado = 0;
    console.log(operador);
   resultado = operador == "+" ? parseFloat(numeroa) + parseFloat(numerob):
   operador == "-" ? parseFloat(numeroa) - parseFloat(numerob):
   operador == "x" ? parseFloat(numeroa) * parseFloat(numerob):
   operador == "/" ? parseFloat(numeroa) / parseFloat(numerob):
   borrar()
   
   lcd.textContent = resultado;
}