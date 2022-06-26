// ACTIVIDAD 1
const radioButton1 = document.getElementById("radiobutton1");
const radioButton2 = document.getElementById("radiobutton2");

function clickButton1() {
    alert("Has seleccionado el botón de opción 1");
}

function clickButton2() {
    alert("Has seleccionado el botón de opción 2");
}

radioButton1.onclick = clickButton1;
radioButton2.onclick = clickButton2;

//ACTIVIDAD 2
const btnAveriguar = document.getElementById("button");

function averiguarMayor() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if (numero1 > numero2) {
        alert("El número 1 (" + numero1 + ") es mayor que el número 2 (" + numero2 + ").");
    } else {
        alert("El número 2 (" + numero2 + ") es mayor que el número 1 (" + numero1 + ").");
    }
}

btnAveriguar.onclick = averiguarMayor;

//ACTIVIDAD 3
const btnSumar = document.getElementById("sumar");

function sumar() {
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);
    let suma = nro1 + nro2;
    document.getElementById("total").value = suma;
}

btnSumar.onclick = sumar;
