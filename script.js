//Ejercicio 1

/*
let nombre = "Jeidi";
let edad = 18;
let ciudad = "Garzón";
console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".");
*/

/*  Ejercicio 2: Crea una variable llamada precio y asígnale un valor decimal. 
luego  crea otra variable llamda cantidad y asígnale un valor entero.
Muestra el tipo de dato de cada variable en la consola.*/

/*
let precio = 9.4;
let cantidad = 5;
console.log(typeof precio, precio);//Imprime en la consola
console.log(typeof cantidad, cantidad);//Imprime en la consola
console.log(typeof precio); //Imprime en el documento
alert(typeof cantidad); //Imprime en una ventana emergente
*/

/* Ejercicio Descuento: Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/

/*
let descuento = 0.25;
let compra = 100;
let total = compra - (compra * descuento);
console.log("El total a pagar es: " + total);
*/
/*Ejercicio ganancia: Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/
/*
let capital = 2000;
let ganancia = capital * 0.02;
let totalGanancia = capital + ganancia;
document.write("El total de ganancia es: $" + totalGanancia);
*/

/* Ejercicio calificación final: Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/ 
/*

let parcial1 = 5;
let parcial2 = 4.5;
let parcial3 = 3.6;
let final = 4.5;
let trabajo = 5;
let promedio = (parcial1 + parcial2 + parcial3) / 3;
let calificacionFinal = (promedio * 0.55) + (final * 0.30) + (trabajo * 0.15);
console.log("La calificación final es: " + calificacionFinal);
*/

/*Ejercicio artículo: El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/


/*

let precioCompra = 50000;
let ganancia = 0.30;
let precioVenta = precioCompra + (precioCompra * ganancia);
console.log("El precio de venta es: $" + precioVenta);

*/
/*Ejercicio taxi:Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/

/*
let kilometros = 12;
let minutos = 60;
let precioKm = 15000;
let precioMin = 2000;
let total = (kilometros * precioKm) + (minutos * precioMin);
console.log("El monto a pagar es: $" + total);
*/

/*Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.*/

/*
let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let numero3 = prompt("Ingrese el tercer número");
let cuadrado1 = numero1 * numero1;
let cuadrado2 = numero2 * numero2;
let cuadrado3 = numero3 * numero3;
console.log("El cuadrado del primer número es: " + cuadrado1);
console.log("El cuadrado del segundo número es: " + cuadrado2);
console.log("El cuadrado del tercer número es: " + cuadrado3);
*/
/* En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
Ginecología 40%
Traumatología 30%
Pediatría 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

/*
let presupuesto = 100000000;
let ginecologia = presupuesto * 0.40;
let traumatologia = presupuesto * 0.30;
let pediatria = presupuesto * 0.30;
console.log("El área de Ginecología recibirá: $" + ginecologia);
console.log("El área de Traumatología recibirá: $" + traumatologia);
console.log("El área de Pediatría recibirá: $" + pediatria);
*/ 
/* Ejercicio inversión: Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida*/
/*
let inversion1 = 50000;
let inversion2 = 800000;
let inversion3 = 2000000;
let total = inversion1 + inversion2 + inversion3;
let porcentaje1 = (inversion1 / total) * 100;
let porcentaje2 = (inversion2 / total) * 100;
let porcentaje3 = (inversion3 / total) * 100;
console.log("El porcentaje de la primera persona es: " + porcentaje1 + "%");
console.log("El porcentaje de la segunda persona es: " + porcentaje2 + "%");
console.log("El porcentaje de la tercera persona es: " + porcentaje3 + "%");
*/
/*
Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división*/

/*let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let suma = parseInt(numero1) + parseInt(numero2);
let resta = parseInt(numero1) - parseInt(numero2);
let multiplicacion = parseInt(numero1) * parseInt(numero2);
let division = parseInt(numero1) / parseInt(numero2);
console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicación es: " + multiplicacion);
console.log("La división es: " + division);  // No se puede dividir por 0git
*/
//Estructuras de control

//Ejemplo 1- Declarar dos variables una que sea el nombre y otra que sea la edad y mostrar si es mayor de edad o no.

/*
El usuario digite nombre y edad con la siguiente estructura de verficación:
1 a 18 años es joven
19 a 40 años es adulto
41 a 60 años maduro
61 en adelante es anciano
*/
/*
let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
if(edad >= 1 && edad <= 18){
    alert (nombre + " eres una persona joven.");
} else if(edad >= 19 && edad <= 40){
    alert (nombre + " eres una persona adulta.");
    } else if(edad >= 41 && edad <= 60){
        alert (nombre + " eres una persona madura.");
    }
    else if(edad >= 61){
        alert (nombre + " eres una persona anciana.");
    }
*/
// Ciclo while
// Declarar una variable numérica que muestre la cuenta regresiva a llagar a 0

/*
let cuentaAtras = parseInt(prompt("Ingrese un número"));
while (cuentaAtras> 0) {
    document.write(cuentaAtras , "<br>");
    cuentaAtras = cuentaAtras - 1
  } 
*/
//Do while

/* Imprmir 5 edades de difrentes personas y determinar si son mayores de edad o no , utilizando el método DO while*/


/*
 let contador = 0;

do {
    let edad = parseInt(prompt("Ingrese la edad de la persona " + (contador + 1)));
    if (edad >= 18) {
        document.write("La persona " + (contador + 1) + " es mayor de edad.<br>");
    } else {
        document.write("La persona " + (contador + 1) + " es menor de edad.<br>");
    }
    contador++;
} while (contador < 5);
*/

 /*
 let numPersonas = 0;
do {
    let nombre = prompt("Ingrese el nombre de la persona " );
    let edad = parseInt(prompt("Ingrese la edad de la persona "));
    if (edad >= 18) {
        alert( nombre + " es mayor de edad.");
    } else {
       alert(nombre + " es menor de edad.");
    }
    numPersonas++;
}
while (numPersonas <= 5);
*/
//Ciclo for
/* Imprimir las tablas de multiplicar del número que el ususario digite hasta el número 10 utilizando el ciclo for, mostrar en pantalla la siguiente sintaxis :
5x1=5
5x2=10
5x3=15
5x4=20
5x5=25
5x6=30
5x7=35
5x8=40
5x9=45
5x10=50

*/
/*
let numero = parseInt(prompt("Ingresa  el número de la tabla de multiplicar que deseas ver"));
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + "x" + i + "=" + resultado, "<br>");
}
*/
//Imprime por consola un mensaje si el usuario y contraseña coincide con los valores establecidos
/*
let usuario = "Jeidi";
let contraseña = "Jeidi2006";
let usuarioIngresado = prompt("Ingrese su usuario");
let contraseñaIngresada = prompt("Ingrese su contraseña");  
if (usuarioIngresado == usuario && contraseñaIngresada == contraseña) {
    alert("Bienvenido al sistema");
}
else {
    alert("Usuario o contraseña incorrectos");
}
*/
//Verifica si un número es positivo, negativo o cero e imprime un mensaje 

/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero > 0) {
    alert("El número es positivo");
}
else if (numero < 0) {
    alert("El número es negativo");
}
else {
    alert("El número es cero");
}
*/
//STWITCH
//EJERCICIO 1 Ingresar un programa que determine en qué dia de la semana corresponde hoy, ingresando o utilizando la función promt


/*
let dia = prompt ("Ingrese el día de la semana");

switch (dia) {

    case "lunes":
    console.log("¡Hoy es lunes! El día más duro, pero tu puedes 😢")
    break

    case "martes":
    console.log("¡Hoy es martes! martes de tristeza 😢")
    break
    
    case "miercoles":
        console.log("¡Hoy es miercoles! Hombligüito de la semana :)")
        break

    case "jueves":
        console.log("¡Hoy es jueves ya casi es viernes! 😊")
        break

    case "viernes":
        console.log("¡Hoy es viernes! 🎉 ")
        break

    case "sabado":
        console.log("¡Hoy es sabado! Ya lo lograste 🎉")
        break

    case "domingo":
        console.log("¡Hoy es domingo! descansa 😊")
        break
    default:
        console.log("No es un día de la semana")
        break
}
*/
// 1. Programa que dada la edad de una persona indique si es mayor o menor de edad. Se considera mayor de edad a partir de los 18 años.
/*
let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
if (edad >= 18) {
    alert(nombre + " eres mayor de edad.");
}   else {
    alert(nombre + " eres menor de edad.");
}
*/
// 3. Dado dos números A y B, determinar si A es mayor, menor o igual que B
/*
let numeroA = parseInt(prompt("Ingrese el número A"));
let numeroB = parseInt(prompt("Ingrese el número B"));
if (numeroA > numeroB) {
    alert("El número A es mayor que el número B");
}
else if (numeroA < numeroB) {
    alert("El número A es menor que el número B");
}
else {
    alert("El número A es igual al número B");
}
*/

/*  5. Dado el peso de una persona:
a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de
Peso;
b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso
promedio;
c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”
*/
/*
let peso = parseInt(prompt("Ingrese su peso"));
switch (true) { 
    case peso <= 40:            
        alert("Eres una persona baja de peso");
        break;
    case peso >= 41 && peso <= 70:
        alert("Eres una persona con peso promedio");
        break;
    case peso > 71:
        alert("Eres una persona con sobrepeso");
        break;
    default:
        alert("No es un peso válido");
        break;
        }
*/

// 7. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál será la cantidad que pagara una persona por su compra?

/*
let compra = parseInt(prompt("Ingrese el valor de la compra"));

switch (true) {
    case compra > 1000:
        let descuento = compra * 0.20;
        let total = compra - descuento;
        alert("El total a pagar es: $" + total);
        break;
    case compra <= 1000:
        let descuento2 = compra * 0.05;
        let total2 = compra - descuento2;
        alert("El total a pagar es: $" + total2);
        break;
    default:
        alert("No es un valor válido");
        break;
}
*/
// 9. Programa que lea los nombres y edades de dos personas e imprima cuál de ellas tiene más edad.

/*

let nombre1 = prompt("Ingrese el nombre de la primera persona");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona"));
let nombre2 = prompt("Ingrese el nombre de la segunda persona");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"));
if (edad1 > edad2) {
    alert(nombre1 + " es mayor que " + nombre2);
}
else if (edad1 < edad2) {
    alert(nombre2 + " es mayor que " + nombre1);
}
else {
    alert("Ambas personas tienen la misma edad");
}
*/

// 11. Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.

/*
let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
switch (true) {
    case numero1 == numero2:
        let multiplicacion = numero1 * numero2;
        alert("El resultado de la multiplicación es: " + multiplicacion);
        break;
    case numero1 > numero2:
        let resta = numero1 - numero2;
        alert("El resultado de la resta es: " + resta);
        break;
    default:
        let suma = numero1 + numero2;
        alert("El resultado de la suma es: " + suma);
        break;
}
*/
// 13.  13.Escribe un programa que determine si un número ingresado por el usuario es par o impar.

/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero % 2 == 0) {
    alert("El número es par");
}
else {
    alert("El número es impar");
}
*/

// 15. Crea un programa que solicite un número y verifique si es positivo, negativo o igual a cero.

/*
let numero = parseInt(prompt("Ingrese un número"));
if (numero > 0) {
    alert("El número es positivo");
}
else if (numero < 0) {
    alert("El número es negativo");
}
else {
    alert("El número es cero");
}
*/

// 17.Escribe un programa que permita al usuario seleccionar una figura geométrica (triángulo y cuadrado) y luego calcule el área de esa figura ingresando los datos necesarios para cada caso.*
/*
let figura = prompt("Ingrese la figura geométrica (triángulo o cuadrado)");
switch (figura) {
    case "triángulo":
        let base = parseInt(prompt("Ingrese la base del triángulo"));
        let altura = parseInt(prompt("Ingrese la altura del triángulo"));
        let areaTriangulo = (base * altura) / 2;
        alert("El área del triángulo es: " + areaTriangulo);
        break;
    case "cuadrado":
        let lado = parseInt(prompt("Ingrese el lado del cuadrado"));
        let areaCuadrado = lado * lado;
        alert("El área del cuadrado es: " + areaCuadrado);
        break;
    default:
        alert("No es una figura válida");
        break;
}
*/
// 19.Diseña un programa que solicite el nombre de un usuario y su contraseña. Si el nombre es "admin" y la contraseña es "12345", muestra un mensaje de acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.

let usuario = "admin";
let contraseña = "J12345";
let usuarioIngresado = prompt("Ingrese su usuario");
let contraseñaIngresada = prompt("Ingrese su contraseña");  
if (usuarioIngresado == usuario && contraseñaIngresada == contraseña) {
    alert("Acceso concedido");
}
else {
    alert("Acceso denegado");
}


