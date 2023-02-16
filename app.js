// Utilizando if y else, crear 5 variables de tipo number y evaluar si cada una de esas variables 
// es par o impar, en caso de ser par, imprimir “la variable es par”, 
// en caso de ser impar el mensaje deberá decir, “la variable es impar”. 
let number1= 16;
let number2= 29;
let number3= 127;
let number4= 133;
let number5= 2574;

if (number3 % 2 === 0) {
  console.log("El numero es par");
  
} else {
  console.log("el numero es impar");
}
if (number1 % 2 === 0) {
  console.log("El numero es par");
  
} else {
  console.log("el numero es impar");
}
if (number2 % 2 === 0) {
  console.log("El numero es par");
  
} else {
  console.log("el numero es impar");
}
if (number4 % 2 === 0) {
  console.log("El numero es par");
  
} else {
  console.log("el numero es impar");
}

// Un alumno de programación está creando su primera aplicación web.
// Crear una variable cuyo valor sea la etiqueta h1 de html con el mensaje “Hola Mundo” 
// en el medio e imprimirla en la consola.
let h1 = "  <h1>                  hola mundo </h1>"
console.log(h1);
document.write(h1);

//El profesor le pide al alumno que agregue al h1 anterior un poco de estilos, 
//crear una variable cuyo valor sea h1 { color: red; } e imprimirla en consola

console.log('%c'+h1, 'color: red;')

// Dibujar en la consola una pirámide

let h2 ="    ."
let h3 ="   ..."
let h4 ="  ....."
let h5 =" ......."
let h6 ="........."

console.log(h2);
console.log(h3);
console.log(h4);
console.log(h5);
console.log(h6);

// Un cliente que desea alquilar canchas de futbol 5 solicita que se le realice 
// un sistema que le permita al usuario reservar la cancha, crear 4 casos diferentes 
// con sus respectivas variables, las variables a utilizar en cada caso serán:
//  numero de cancha, si la cancha se encuentra alquilada, si la cancha es techada 
//  y el precio de la cancha. Ej:
// Además el sistema deberá contemplar el clima, crear variables que representen el día lluvioso
// o soleado para cada caso,y  seleccionar arbitrariamente que clima tendrá la cancha  EJ: 
// let numero_cancha = 5;
// let precio_cancha = 120;
// let esta_alquilada = true;
// let es_techada = true;
// let clima = “soleado”;
// Evaluar en un if si la cancha está alquilada, el clima y si es techada o no, en caso de 
//cumplirse las siguientes condiciones imprimir el valor de la cancha con un mensaje que diga
//“Felicidades su cancha fue reservada con éxito, por favor abone el monto de “  + precio_cancha:
// Condiciones a cumplirse:  
// La cancha si o si debe estár libre, es decir esta_alquilada debe ser false
// Si el clima es lluvioso la cancha debe ser techada si o si
// Si el clima es soleado la cancha puede ser techada o no
let cancha = 1;
let precio = 3000;
let disponibilidad = false;
let techada = true;

let clima1 = "soleado";
let clima2 = "lluvioso";

let cancha2 = 2;
let precio2 = 1500;
let disponibilidad2 = true;
let techada2 = false;

let cancha3 = 3;
let precio3 = 2500;
let disponibilidad3 = true;
let techada3 = false;

let cancha4 = 4;
let precio4 = 4000;
let disponibilidad4 = true;
let techada4 = true;

acumulador = 0;

console.log("caso 1")

if (cancha && disponibilidad === true && clima2 && techada4 === true) {
  acumulador += precio;
  console.log("Felicidades su cancha fue alquilada, debe abonar $"+acumulador);
  
} else {
  console.log("La cancha N° 1 no se encuentra disponible, consulte otras canchas");
}

if (cancha && disponibilidad && clima1) {
  acumulador += precio;
  console.log("Felicidades su cancha fue alquilada");
  
} else {
  console.log("No es posible realizar la reserva");
}

console.log("caso 2")

acumulador = 0

if (cancha4 && disponibilidad4 === true && clima2 && techada) {
  acumulador += precio;
  console.log("Felicidades su cancha fue alquilada, debe abonar $"+acumulador);
  
} else {
  console.log("La cancha N° 1 no se encuentra disponible, consulte otras canchas");
}

console.log("caso 3")

if (cancha && disponibilidad && clima1) {
  acumulador += precio;
  console.log("Felicidades su cancha fue alquilada");
  
} else {
  console.log("Cancha no disponible, consulte otras");
}

console.log("caso 4")

switch (clima1) {
  case "soleado": 
  if (disponibilidad2 === true && techada2 === true) {
    acumulador += precio;
    console.log("Felicidades su cancha fue alquilada");
  }
  else {
    console.log("no esta disponible");
  }
  break;
  case "lluvioso":
  if (disponibilidad2 === true && techada2 === false) {
    console.log("La cancha no se encuentra disponible por mal clima");
  }
 default: 
 console.log("la cancha no esta disponible");
    break;
}

