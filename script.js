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

let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let suma = parseInt(numero1) + parseInt(numero2);
let resta = parseInt(numero1) - parseInt(numero2);
let multiplicacion = parseInt(numero1) * parseInt(numero2);
let division = parseInt(numero1) / parseInt(numero2);
console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicación es: " + multiplicacion);
console.log("La división es: " + division);  // No se puede dividir por 0git