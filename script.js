//Ejercicio 1

/*
let nombre = "Jeidi";
let edad = 18;
let ciudad = "Garzón";
console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".");
*/

/*  Ejercicio 2: Crea una variable llamada precio y asígnale un valor decimal. n
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
/*
let usuario = "admin";
let contraseña = "12345";
let usuarioIngresado = prompt("Ingrese su usuario");
let contraseñaIngresada = prompt("Ingrese su contraseña");  
if (usuarioIngresado == usuario && contraseñaIngresada == contraseña) {
    alert("Acceso concedido");
}
else {
    alert("Acceso denegado");
}
*/  

//Funciones
/*
function saludar() {
    alert('Hola probando las funciones')
  }

  saludar();
*/
/*
function sumar (){
    let num1 = parseInt(prompt ("Ingrese el primer número"));
    let num2 = parseInt(prompt ("Ingrese el segundo número"));
    return num1 + num2;

}
alert (sumar());
*/
/*
function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318
  
    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318
  
    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6
  
    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7
  
    // devolvemos el resultado
    return result
  }
  alert (getRandomNumber());
*/
/*
function saludar(nombre) {
    alert ("Hola " + nombre);
  }

  saludar ("Jeidi Segura");

*/


// ==================================================
// 1. Funciones en JavaScript
// ==================================================

/*
**Concepto: Funciones Declarativas**
Las funciones declarativas se definen usando la palabra clave `function` seguida del nombre de la función.
Pueden ser llamadas antes de su definición debido al hoisting.
*/
/*
function calcularAreaRectangulo(base, altura) {  // Define una función llamada `calcularAreaRectangulo` que toma dos parámetros.
    return base * altura;  // Retorna el área del rectángulo (base * altura).
}
alert(calcularAreaRectangulo(5, 10));  // Llama a la función con los argumentos 5 y 10, y muestra el resultado en una alerta.
*/
/*
**Concepto: Funciones Expresivas**
Las funciones expresivas se asignan a una variable. No tienen nombre y solo pueden ser llamadas después de su definición.
*/
/*
const calcularVolumenCubo = function(lado) {  // Define una función anónima y la asigna a la variable `calcularVolumenCubo`.
    return lado ** 3;  // Retorna el volumen del cubo (lado al cubo).
};
alert(calcularVolumenCubo(4));  // Llama a la función con el argumento 4 y muestra el resultado en una alerta.
*/
/*
**Concepto: Funciones Flecha**
Las funciones flecha (arrow functions) tienen una sintaxis más corta y no tienen su propio `this`.
Son ideales para funciones simples.
*/
/*
const calcularPromedio = (a, b, c) => (a + b + c) / 3;  // Define una función flecha que calcula el promedio de tres números.
alert(calcularPromedio(10, 20, 30));  // Llama a la función con los argumentos 10, 20 y 30, y muestra el resultado en una alerta.
*/

// ==================================================
// 2. Arreglos en JavaScript
// ==================================================

/*
**Concepto: Creación de arreglos**
Los arreglos son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
*/
/*
const colores = ["Rojo", "Verde", "Azul"];  // Crea un arreglo llamado `colores` con tres elementos.
*/

/*
**Concepto: Acceso a elementos**
Los elementos de un arreglo se acceden mediante su índice, comenzando desde 0.
*/
/*
alert(colores[2]);  // Accede al tercer elemento del arreglo (índice 2) y lo muestra en una alerta ("Azul").
*/

/*
**Concepto: Métodos comunes**
- `push()`: Añade un elemento al final del arreglo.
- `pop()`: Elimina el último elemento del arreglo.
*/
/*
colores.push("Amarillo");  // Añade "Amarillo" al final del arreglo `colores`.
alert(colores);  // Muestra el contenido actualizado del arreglo en una alerta.

const ultimoColor = colores.pop();  // Elimina el último elemento del arreglo ("Amarillo") y lo asigna a `ultimoColor`.
alert(ultimoColor);  // Muestra el último elemento eliminado en una alerta.
*/

/*
**Concepto: Iteración sobre arreglos**
El método `forEach()` permite ejecutar una función para cada elemento del arreglo.
*/
/*
colores.forEach(color => {  // Itera sobre cada elemento del arreglo `colores`.
    alert(color);  // Muestra cada elemento en una alerta.
});
*/

// ==================================================
// 3. Programación Orientada a Objetos (POO)
// ==================================================

/*
**Concepto: Clases y Objetos**
Las clases son plantillas para crear objetos. Un objeto es una instancia de una clase.
*/
/*
class Animal {  // Define una clase llamada `Animal`.
    constructor(nombre, sonido) {  // Define el constructor de la clase, que toma dos parámetros: `nombre` y `sonido`.
        this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre` del objeto.
        this.sonido = sonido;  // Asigna el valor del parámetro `sonido` a la propiedad `sonido` del objeto.
    }

    hacerSonido() {  // Define un método llamado `hacerSonido`.
        alert(`${this.nombre} hace ${this.sonido}.`);  // Muestra un mensaje con el nombre y el sonido del animal.
    }
}


const perro = new Animal("Perro", "Guau");  // Crea una instancia de la clase `Animal` con los argumentos "Perro" y "Guau".
perro.hacerSonido();  // Llama al método `hacerSonido` del objeto `perro`.
*/
/*
**Concepto: Herencia**
La herencia permite crear una clase basada en otra clase existente.
La clase hija hereda propiedades y métodos de la clase padre.
*/
/*
class Gato extends Animal {  // Define una clase `Gato` que hereda de la clase `Animal`.
    constructor(nombre, sonido, color) {  // Define el constructor de la clase `Gato`.
        super(nombre, sonido);  // Llama al constructor de la clase padre (`Animal`) con los argumentos `nombre` y `sonido`.
        this.color = color;  // Asigna el valor del parámetro `color` a la propiedad `color` del objeto.
    }

    ronronear() {  // Define un método llamado `ronronear`.
        alert(`${this.nombre} está ronroneando.`);  // Muestra un mensaje con el nombre del gato.
    }
}

const gato1 = new Gato("Gato", "Miau", "Gris");  // Crea una instancia de la clase `Gato`.
gato1.hacerSonido();  // Llama al método `hacerSonido` heredado de la clase `Animal`.
gato1.ronronear();  // Llama al método `ronronear` de la clase `Gato`.
*/

// ==================================================
// 4. Manejo de Eventos y el DOM
// ==================================================

/*
**Concepto: Selección de elementos del DOM**
El DOM (Document Object Model) permite interactuar con los elementos HTML.
Se puede seleccionar un elemento usando `document.getElementById()`.
*/
/*
const botonCambiarColor = document.getElementById("cambiarColor");  // Selecciona el elemento del DOM con el ID `cambiarColor`.
*/
/*
**Concepto: Agregar un evento**
Los eventos permiten ejecutar código cuando ocurre una interacción del usuario, como un clic.
*/
/*
botonCambiarColor.addEventListener("click", function() {  // Agrega un evento de clic al botón seleccionado.
    document.body.style.backgroundColor = "lightblue";  // Cambia el color de fondo del cuerpo del documento a azul claro.
    alert("Color de fondo cambiado!");  // Muestra una alerta cuando se hace clic en el botón.
});
*/

// ==================================================
// 5. Módulos en JavaScript
// ==================================================

/*
// Importación de exportaciones nombradas
import { sumar, PI } from './mathOperations.js';

// Importación de la exportación por defecto
import multiplicar from './mathOperations.js';

// Uso de las funciones y constantes importadas
console.log(sumar(5, 3)); // Output: 8
console.log(PI); // Output: 3.1416
console.log(multiplicar(4, 2)); // Output: 8
*/

// ==================================================
// 6. Programación Asíncrona
// ==================================================

/*
**Concepto: Callbacks**
Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una operación.
*/
/*
function simularDescargaDeDatos(callback) {  // Define una función llamada `simularDescargaDeDatos` que toma un callback como parámetro.
    setTimeout(() => {  // Simula una operación asíncrona con `setTimeout`.
        callback("Datos descargados correctamente");  // Llama al callback con el mensaje "Datos descargados correctamente".
    }, 2000);  // Espera 2 segundos antes de ejecutar el callback.
}

simularDescargaDeDatos(function(mensaje) {  // Llama a la función `simularDescargaDeDatos` y pasa un callback.
    alert(mensaje);  // Muestra el mensaje "Datos descargados correctamente" en una alerta.
});
*/

/*
**Concepto: Promesas**
Las promesas representan un valor que puede estar disponible ahora, en el futuro o nunca.
Permiten manejar operaciones asíncronas de manera más legible.
*/
/*
function simularCargaDeDatos() {  // Define una función llamada `simularCargaDeDatos`.
    return new Promise((resolve, reject) => {  // Retorna una nueva promesa.
        setTimeout(() => {  // Simula una operación asíncrona con `setTimeout`.
            resolve("Datos cargados correctamente");  // Resuelve la promesa con el mensaje "Datos cargados correctamente".
        }, 2000);  // Espera 2 segundos antes de resolver la promesa.
    });
}

simularCargaDeDatos().then(mensaje => {  // Llama a la función `simularCargaDeDatos` y maneja la promesa resuelta.
    alert(mensaje);  // Muestra el mensaje "Datos cargados correctamente" en una alerta.
});
*/

/*
**Concepto: Async/Await**
`async` y `await` son una forma más moderna de trabajar con promesas.
`async` define una función asíncrona, y `await` pausa la ejecución hasta que la promesa se resuelva.
*/
/*
async function mostrarDatosCargados() {  // Define una función asíncrona llamada `mostrarDatosCargados`.
    const mensaje = await simularCargaDeDatos();  // Espera a que la promesa se resuelva y asigna el resultado a `mensaje`.
    alert(mensaje);  // Muestra el mensaje "Datos cargados correctamente" en una alerta.
}

mostrarDatosCargados();  // Llama a la función `mostrarDatosCargados`.

*/
//Ejercicio 1
/*
let nombre= "Jeidi";
const saludar = nombre => {
    console.log("Hola " + nombre)
  }
*/
//Calculadora con funciones tradicionales
/*
function sumar (a,b){
    return a + b;
    }
    function dividir (a,b){
    return a / b;
    }
    function restar (a,b){
        return a - b;
    }
    function multiplicar (a,b){
        return a * b;
    }

    console.log(sumar(34,5));
    console.log(dividir(40,2));
    console.log(restar(21,5));
    console.log(multiplicar(7,8));
*/
//Calculadora con funciones flecha
/*
const sumarFlecha = (a,b) => {
    return a + b;
}
const restarFlecha = (a,b) => {
    return a - b;
}
const multiplicarFlecha = (a,b) => {
    return a * b;
}
const dividirFlecha = (a,b) => {
    return a / b;
}
    console.log (sumarFlecha(55,76));
    console.log (restarFlecha(54,42));
    console.log (multiplicarFlecha(10,6));
    console.log (dividirFlecha(50,5));
*/
/*
function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es
    // menor de 0 entonces salimos de la función
    if (numero < 0) { return }
  
    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)
  
    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
  }

    cuentaAtras(40);

*/
//Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva.
/*
function sumaNumeros(numero) {
    // Condición base: Si n es 1, la suma es 1
    if (numero === 1) {
        return 1
      } else {
        // Si n no es 1, sumamos n con la suma de los números anteriores
        return n + sumaNumeros(numero - 1)
      }
    }
    console.log(sumaNumeros(10));
*/
/*
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 20

console.log(numbers)
*/
/*
const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length)
*/
/*En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
*/

/*
function procesarPedido(pedidos) {
    const nombreCliente = pedidos.shift();
    pedidos.unshift("bebida");
    pedidos.push(nombreCliente);
    return pedidos
}
const pedidos = ["Jesus", "Hamburguesa", "Papas Fritas", "Coca cola" ]
console.log(procesarPedido(pedidos))
*/
/*
Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números
 pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar 
si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para
solucionarlo.
*/
/*
function sumarPares(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i]
        }
        }
    return suma
  }
numeros =[22, 2, 3, 4, 5, 6, 7, 18, 9, 2]
console.log(sumarPares(numeros))
*/
/*
Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con 
la letra "a" y false si al menos una palabra no termina con la letra "a".
Usa el método endsWith() de string para resolverlo.
*/
/*
function acabanEnA(words) {
   const acabanenA= words.every( words => words.endsWith("a"))
   return acabanenA
  }

  const words = ["Pepe", "Casa", "Luna", "Mora"]
  console.log(acabanEnA(words)) 
*/
/*Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto.
 Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].
Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
*/
/*
    function sortAbsoluteNumbers(numbers) {
        const numerosOrdenados = numbers.sort ((a, b) => Math.abs(a)- Math.abs(b));
       console.log(numerosOrdenados)
    }
sortAbsoluteNumbers ([5, -10, -2, -25, -7]);
*/
/*

const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numbers.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // si no, devolvemos lo que ya teníamos
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers) // [8, 12]
*/
let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros.length)
