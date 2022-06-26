var datosPersonales = [];

datosPersonales[0] = prompt("Ingresa tu nombre:");
datosPersonales[1] = prompt("Ingresa tu apellido:");
datosPersonales[2] = prompt("Ahora ingresa tu edad:");
datosPersonales[3] = prompt("Por último ingresa la ciudad donde vives:");

document.write("<h3>A continuación se muestran los datos personales ingresados: </h3>");
document.write("Tu nombre es " + datosPersonales[0] + ". <br>");
document.write("Tu apellido es " + datosPersonales[1] + ". <br>");
document.write("Tienes " + datosPersonales[2] + " años de edad. <br>");
document.write("Y vives en la ciudad de " + datosPersonales[3] + ".");