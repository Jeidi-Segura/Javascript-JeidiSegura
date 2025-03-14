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
function saludar(nombre) {  // Define una función llamada `saludar` que toma un parámetro `nombre`.
    return `Hola, ${nombre}`;  // Retorna un mensaje de saludo usando el parámetro `nombre`.
}
alert(saludar("Juan"));  // Llama a la función `saludar` con el argumento "Juan" y muestra el resultado en una alerta.

/*
**Concepto: Funciones Expresivas**
Las funciones expresivas se asignan a una variable. No tienen nombre y solo pueden ser llamadas después de su definición.
*/
const despedir = function(nombre) {  // Define una función anónima y la asigna a la variable `despedir`.
    return `Adiós, ${nombre}`;  // Retorna un mensaje de despedida usando el parámetro `nombre`.
};
alert(despedir("Ana"));  // Llama a la función `despedir` con el argumento "Ana" y muestra el resultado en una alerta.

/*
**Concepto: Funciones Flecha**
Las funciones flecha (arrow functions) tienen una sintaxis más corta y no tienen su propio `this`.
Son ideales para funciones simples.
*/
const sumar = (a, b) => a + b;  // Define una función flecha que toma dos parámetros `a` y `b` y retorna su suma.
alert(sumar(5, 3));  // Llama a la función `sumar` con los argumentos 5 y 3, y muestra el resultado en una alerta.

// ==================================================
// 2. Arreglos en JavaScript
// ==================================================

/*
**Concepto: Creación de arreglos**
Los arreglos son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
*/
const frutas = ["Manzana", "Banana", "Cereza"];  // Crea un arreglo llamado `frutas` con tres elementos.

/*
**Concepto: Acceso a elementos**
Los elementos de un arreglo se acceden mediante su índice, comenzando desde 0.
*/
alert(frutas[1]);  // Accede al segundo elemento del arreglo (índice 1) y lo muestra en una alerta ("Banana").

/*
**Concepto: Métodos comunes**
- `push()`: Añade un elemento al final del arreglo.
- `pop()`: Elimina el último elemento del arreglo.
*/
frutas.push("Naranja");  // Añade "Naranja" al final del arreglo `frutas`.
alert(frutas);  // Muestra el contenido actualizado del arreglo en una alerta.

const ultimaFruta = frutas.pop();  // Elimina el último elemento del arreglo ("Naranja") y lo asigna a `ultimaFruta`.
alert(ultimaFruta);  // Muestra el último elemento eliminado en una alerta.

/*
**Concepto: Iteración sobre arreglos**
El método `forEach()` permite ejecutar una función para cada elemento del arreglo.
*/
frutas.forEach(fruta => {  // Itera sobre cada elemento del arreglo `frutas`.
    alert(fruta);  // Muestra cada elemento en una alerta.
});

// ==================================================
// 3. Programación Orientada a Objetos (POO)
// ==================================================

/*
**Concepto: Clases y Objetos**
Las clases son plantillas para crear objetos. Un objeto es una instancia de una clase.
*/
class Persona {  // Define una clase llamada `Persona`.
    constructor(nombre, edad) {  // Define el constructor de la clase, que toma dos parámetros: `nombre` y `edad`.
        this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre` del objeto.
        this.edad = edad;  // Asigna el valor del parámetro `edad` a la propiedad `edad` del objeto.
    }

    saludar() {  // Define un método llamado `saludar`.
        alert(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);  // Muestra un mensaje de saludo con las propiedades del objeto.
    }
}

const persona1 = new Persona("Carlos", 30);  // Crea una instancia de la clase `Persona` con los argumentos "Carlos" y 30.
persona1.saludar();  // Llama al método `saludar` del objeto `persona1`.

/*
**Concepto: Herencia**
La herencia permite crear una clase basada en otra clase existente.
La clase hija hereda propiedades y métodos de la clase padre.
*/
class Estudiante extends Persona {  // Define una clase `Estudiante` que hereda de la clase `Persona`.
    constructor(nombre, edad, curso) {  // Define el constructor de la clase `Estudiante`.
        super(nombre, edad);  // Llama al constructor de la clase padre (`Persona`) con los argumentos `nombre` y `edad`.
        this.curso = curso;  // Asigna el valor del parámetro `curso` a la propiedad `curso` del objeto.
    }

    estudiar() {  // Define un método llamado `estudiar`.
        alert(`${this.nombre} está estudiando ${this.curso}.`);  // Muestra un mensaje con el nombre y el curso del estudiante.
    }
}

const estudiante1 = new Estudiante("Ana", 22, "Matemáticas");  // Crea una instancia de la clase `Estudiante`.
estudiante1.saludar();  // Llama al método `saludar` heredado de la clase `Persona`.
estudiante1.estudiar();  // Llama al método `estudiar` de la clase `Estudiante`.

// ==================================================
// 4. Manejo de Eventos y el DOM
// ==================================================

/*
**Concepto: Selección de elementos del DOM**
El DOM (Document Object Model) permite interactuar con los elementos HTML.
Se puede seleccionar un elemento usando `document.getElementById()`.
*/
const boton = document.getElementById("miBoton");  // Selecciona el elemento del DOM con el ID `miBoton`.

/*
**Concepto: Agregar un evento**
Los eventos permiten ejecutar código cuando ocurre una interacción del usuario, como un clic.
*/
boton.addEventListener("click", function() {  // Agrega un evento de clic al botón seleccionado.
    alert("Botón clickeado!");  // Muestra una alerta cuando se hace clic en el botón.
});

// ==================================================
// 5. Módulos en JavaScript
// ==================================================

/*
**Concepto: Exportación de funciones**
Los módulos permiten dividir el código en archivos separados.
Las funciones pueden exportarse usando `export`.
*/
function saludarModulo(nombre) {  // Define una función llamada `saludarModulo`.
    return `Hola desde el módulo, ${nombre}`;  // Retorna un mensaje de saludo.
}

function despedirModulo(nombre) {  // Define una función llamada `despedirModulo`.
    return `Adiós desde el módulo, ${nombre}`;  // Retorna un mensaje de despedida.
}

/*
**Concepto: Uso de funciones exportadas**
Las funciones exportadas pueden importarse en otros archivos usando `import`.
*/
alert(saludarModulo("Pedro"));  // Llama a la función `saludarModulo` y muestra el resultado en una alerta.
alert(despedirModulo("Laura"));  // Llama a la función `despedirModulo` y muestra el resultado en una alerta.

// ==================================================
// 6. Programación Asíncrona
// ==================================================

/*
**Concepto: Callbacks**
Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una operación.
*/
function obtenerDatos(callback) {  // Define una función llamada `obtenerDatos` que toma un callback como parámetro.
    setTimeout(() => {  // Simula una operación asíncrona con `setTimeout`.
        callback("Datos recibidos");  // Llama al callback con el mensaje "Datos recibidos".
    }, 2000);  // Espera 2 segundos antes de ejecutar el callback.
}

obtenerDatos(function(datos) {  // Llama a la función `obtenerDatos` y pasa un callback.
    alert(datos);  // Muestra el mensaje "Datos recibidos" en una alerta.
});

/*
**Concepto: Promesas**
Las promesas representan un valor que puede estar disponible ahora, en el futuro o nunca.
Permiten manejar operaciones asíncronas de manera más legible.
*/
function obtenerDatosPromesa() {  // Define una función llamada `obtenerDatosPromesa`.
    return new Promise((resolve, reject) => {  // Retorna una nueva promesa.
        setTimeout(() => {  // Simula una operación asíncrona con `setTimeout`.
            resolve("Datos recibidos con promesa");  // Resuelve la promesa con el mensaje "Datos recibidos con promesa".
        }, 2000);  // Espera 2 segundos antes de resolver la promesa.
    });
}

obtenerDatosPromesa().then(datos => {  // Llama a la función `obtenerDatosPromesa` y maneja la promesa resuelta.
    alert(datos);  // Muestra el mensaje "Datos recibidos con promesa" en una alerta.
});

/*
**Concepto: Async/Await**
`async` y `await` son una forma más moderna de trabajar con promesas.
`async` define una función asíncrona, y `await` pausa la ejecución hasta que la promesa se resuelva.
*/
async function obtenerDatosAsync() {  // Define una función asíncrona llamada `obtenerDatosAsync`.
    const datos = await obtenerDatosPromesa();  // Espera a que la promesa se resuelva y asigna el resultado a `datos`.
    alert(datos);  // Muestra el mensaje "Datos recibidos con promesa" en una alerta.
}

obtenerDatosAsync();  // Llama a la función `obtenerDatosAsync`.





