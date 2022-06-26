// 1er prompt (“Ingrese su nombre”)
let nombre = prompt("Ingresa tu nombre:");

// 2. 2do prompt (“Ingresa tu apellido”)
let apellido = prompt("Ingresa tu apellido:");

// 3. Añade un nuevo enlace en el primer párrafo
let enlace = document.createElement("a");
enlace.innerHTML = "Ir a Google";
enlace.href = "https://www.google.com.ar/";
document.getElementById("p").appendChild(enlace);

// 4. Un mensaje que de la bienvenida y muestre solo el nombre ingresado
// 5. Número de enlaces con los que cuenta la página.
window.onload = function() {
    var info = document.getElementById("infopag");
    var enlaces = document.getElementsByTagName("a");
    // Mensaje de bienvenida mas nombre ingresado (Pista usar ,innerHTML)
    // Numero de enlaces que tiene la pagina (Pista usar ,innerHTML)
    info.innerHTML = "Bienvenid@ " + nombre + " a nuestro sitio. Nuestro sitio tiene " + enlaces.length + " enlaces.";
}

// 6. Completar el código JavaScript proporcionado para que se añada un nuevo elemento a la lista cada vez que se pulsa sobre el botón, (El nombre y apellido ingresados con los prompt) Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la lista existente. En esta parte del ejercicio, sólo se debe saber que al pinchar sobre el botón, se ejecuta la función llamada agrega().
// completa la funcion agrega()
function agrega() {
    let elemento = document.createElement("li");
    let contenido = document.createTextNode(nombre + " " + apellido);
    elemento.appendChild(contenido);
    document.getElementById("alumnos").appendChild(elemento);
}

// 7. Revisar el funcionamiento que tiene el código JavaScript proporcionado que cuando se pinche sobre el ultimo enlace se muestra completo el contenido de texto. Además, el enlace deja de mostrarse después de pulsarlo por primera vez.. En este ejercicio, sólo se debe saber que al pinchar sobre el enlace, se ejecuta la función llamada muestra().
//con esta funcion mostramos el contenido faltante del ultimo parrafo
function muestra() {
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";

    var enlace = document.getElementById("enlace");
    enlace.className = "oculto";
}






