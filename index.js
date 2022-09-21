// This is the first line of the file

// Creamos una funcion que escriba en consola
function hello() {
    return function () {
        return 'Hello World!'
    }
}

// Llamamos la funcion
console.log(hello()());     // Hello World

// PARAMETROS DE FUNCIONES
function add(x, y){
    return x + y
}

console.log(add(10, 20));       // 30

// PARAMETROS POR DEFECTO
function addDefault(x, y = 0){
    return x + y;
}

console.log(addDefault(25));       // 25

// OBJETOS
const user = {
    name: 'Jhonny',
    lastname: 'Doe',
    years: 24,
    address: {
        country: 'US',
        city: 'FL',
        street: 'Main St. 21'
    },
    friends: ['Brad', 'Helena', 'Jerry'],
    active: false,
    sendMessage: function () {
        return 'enviando correo...'
    }
}

console.log(user.name);     // Jhonny
console.log(user.address.country);      // US
console.log(user.active);       // false
console.log(user.sendMessage());        // enviando correo...

console.log( )

// SHORTHAND PROPERTY NAMES
const name = 'laptop';
const price = 1000;

const product = {
    name: name,
    price: price
}

console.log(product);       // object

// Esto puede abreviarse si la variable tiene el mismo nombre que la propiedad del objeto.
const newProduct = {
    name,
    price
}

console.log(newProduct);        // object

// MANIPULACION DEL DOM

// Creamos una constante que  almacene la creacion de un nuevo elemento HTML <h1></h1>
const title = document.createElement('h1')
title.innerText = 'Hola Mundo desde JS'

const button = document.createElement('button')
button.innerText = 'Click'

console.log(title)      // h1 element

document.body.append(title)     // Podremos verlo en la pagina
document.body.append(button)     // Podremos verlo en la pagina

// EVENT HANDLERS

// el metodo .addEventListener toma 2 parametros: un evento y una funcion a ejecutar 
button.addEventListener('click', function() {
    title.innerText = 'Texto actualizado con JS'
    console.log('click!')
})

// OBJETOS COMO PARAMETROS

// Creamos un objeto
const song = {
    name: 'Cheap Thrills',
    artist: 'Sia',
    year: 2016
}

// Creamos una funcion que tome como parametro un objeto (song)
// Podremos acceder a los parametros del objeto desde la funcion
function printSong(song) {
    return `<p><strong>${song.name}</strong> - <em>${song.artist}</em>. Release Date: ${song.year}</p>`
}

// con document.body.innerHTML podemos agregar elementos al HTML
// Este metodo puede leer e interpretar codigo HTML
document.body.innerHTML = printSong(song);      // Cheap Thrills - Sia. Release Date: 2016

// DESTRUCTURING DE OBJETOS
const destructured = {
    first: 'First',
    second: 'Second',
    third: 'Third',
    state: true
}

// La funcion buscara objetos que tengan estas propiedades y podremos acceder a ellas
function destruct({first, third, state}) {
    return `<h1> This is the ${first} and the ${third} property of the destructured object`
}

// Ahora podemos añadir lo que retorna la funcion.
document.body.innerHTML = destruct(destructured)    // This is the First and the Third property of the destructured object

// Tambien podemos desestructurar un objeto al declarar una variable
const myself = {
    name: 'Luisfer',
    lastname: 'Doria',
    age: 19
}

// La funcion toma un objeto por parametro
function meeting(myself) {

    // Luego, crea una constante que desestructura el objeto
    const { name, age } = myself;
    return `Hi! I'm ${name}, and I'm ${age} years old :D`
}

console.log( meeting(myself))   // Hi! I'm Luisfer, and I'm 19 years old :D

// FUNCIONES ANONIMAS

// Javascript puede ejecutar funciones que no tengan nombre de la siguiente manera
console.log(
    function () {
        return 'Starting...'
    }()
)

const buttonAF = document.createElement('buttonAF')
buttonAF.innerText = 'Click Me'
buttonAF.addEventListener('click', function() {
    console.log('Cliked')
})

document.body.append(buttonAF)  // Clicked en consola

// ARROW FUNCTIONS
const addAF = (x, y) => { 
    return x + y 
} 

// INLINE ARROW FUNCTIONS

// Si el codigo de la funcion es de una sola linea, podemos escribir una AF así:
const showText = () => 'Hola Mundo desde una Funcion flecha';
console.log(showText());    // Hola Mundo desde una Funcion flecha

// Podemos devolver varios tipos de datos de esta manera:
const showNumber = () => 10;
console.log(showNumber());      // 10

const showBool = () => false;
console.log(showBool());        // false

const showArray = () => [1,2,3];
console.log(showArray());       // [1,2,3]

/*
    Algo pasa si queremos usar una Arrow Function que retorne un objeto.
    La sintaxis de un objeto es: {property1: value1, property2: value2}
    Si usamos un arrow function que retorne un objeto debemos usar un ()
    Este () permite delimitar que es lo que se debe retornar
    El () está implícito en una inline arrow function
*/

const showObject = () => ({name: 'David', age: 45});
console.log(showObject());      // {name: 'David', age: 45}

// RETURN

/*
    La palabra return nos permite retornar un valor de una funcion
    Tambien nos permite no ejecutar todo el codigo que haya despues del return
*/

const authButton = document.createElement('button');
authButton.innerText = 'AuthO';

// Creamos un bool para comprobar si está autorizado o no
const isAuth = true;

authButton.addEventListener('click', () => {
    // Si la constante isAuth es verdadera: 
    if (isAuth) {

        // Retornar alerta. Aqui acaba la ejecucion de la funcion
        return alert('Estás autorizado')
    }

    alert('No estás autorizado')
});

document.body.append(authButton);

// STRING LITERALS

// Nos permiten concatenar strings con variables y valores de Javascript

// Creamos un elemento <div></div>
const box = document.createElement('div');
box.innerText = 'Caja';

// Ahora creamos unas constantes que contengan los valores de estilo que aplicaremos
const background = 'steelblue';
const color = 'white';
const conditional = true;

// Aplicaremos los estilos al elemento con un String Literal y un Operador Ternario
box.style = `background: ${conditional ? (background) : ('red')}; color: ${color}`;

document.body.append(box);

// ARRAY METHODS

// Nos permiten listar arreglos y recorrerlos o filtrarlos segun caracteristicas especificas

const names = ['Luisfer', 'Bob', 'Mike']

// Este bucle for nos lleva muchas lineas de codigo, y por lo general no usaremos este bucle For
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element)    /* 
        Luisfer
        Bob
        Mike
    */
}

// Una manera de obtener el mismo resultado es con los métodos propios de los Arrays
names.forEach(name => {
    console.log(name)   /*
        Luisfer
        Bob
        Mike
    */
});

// MAP method
// El metodo .map nos permite recorrer el arreglo tal como lo haria forEach, pero crea un nuevo arreglo a partir de ello

// .map() toma como parametro una funcion
const newNames = names.map( (name) => `Hola ${name}`);

console.log(newNames);      // (3) ['Hola Luisfer', 'Hola Bob', 'Hola Mike']

// FIND method
/*
El método .find nos devuelve el primer elemento de un arreglo que cumpla con las condiciones de búsqueda de la función que toma como parámetro dicho método.
 */

const findName = names.find((name) => {
    if (name.length <= 5) {
        return name
    }
} )

console.log(findName);      // Bob

// FILTER method

/*
el metodo .filter nos permite filtrar y crear un nuevo array con los elementos que cumplan una condicion */

const filterNames = names.filter(name => {
    if (name.length <=5){
        return name
    }
})

console.log(filterNames);       // (2) ['Bob', 'Mike']

// CONCAT method

// Nos permite concatenar un arreglo 1 con un arreglo 2. Crea un nuevo arreglo
const irrationals = ['pi', 'euler', '2^1/2'];
const rationals = [1, 2, 100, 0];

// Uso del metodo .concat()
const reals = irrationals.concat(rationals);
console.log(reals);     // (7) ['pi', 'euler', '2^1/2', 1, 2, 100, 0]

// SPREAD OPERATOR

// El Spread Operator nos permite concatenar o unir varios arreglos, tal como lo haria el metodo .concat()
// Se usa de la siguiente manera

console.log([...irrationals, ...rationals]);    // (7) ['pi', 'euler', '2^1/2', 1, 2, 100, 0]

// También funciona con Objetos.

const colors = {
    blue: 'azul',
    red: 'rojo',
    green: 'verde',
    yellow: 'amarillo'
}

const phones = {
    xiaomi: 'Note 9S',
    iphone: '13 Pro Max',
    huawei: 'P20'
}

const phoneColor = { ...colors, ...phones };

console.log(phoneColor);        // {blue: 'azul', red: 'rojo', green: 'verde', yellow: 'amarillo', xiaomi: 'Note 9S', …}

// ECMASCRIPT MODULES

// Podemos importar y exportar funciones, variables, objetos, etc de otros archivos .js

// Usamos esta sintaxis, entre { } desestructuramos los datos que usaremos en este archivo
import { suma, multiply, titulo, active, nums } from './modules.js';

// Ahora podemos acceder a las funciones y variables importadas
console.log(suma(10,15));       // 25

// export default
// Podemos usar export default para indicarle a Javascript que esa sera la funcionalidad que se importara por defecto
import importedTitle from './modules.js';

// Ahora podemos acceder a la funcionalidad que se exporta por defecto
console.log(importedTitle);

// OPTIONAL CHAINING

/* 
Cuando trabajamos con Frontend vamos a querer leer datos de un Backend
Si queremos leer las propiedades de un objeto, y una propiedad no existe, Js nos tirara error.
Con el optional chaining, indicamos a Javascript que verifique si alguna propiedad existe
Si existe, podremos acceder a ella. Si no, no hara nada, pero no nos arrojara algun error
*/

// Veamos como funciona

const db = {
    name: 'Luis',
    age: 19,
    address: {
        city: 'Caracas'
    }
}

console.log(db.location?.city);     // undefined

// Como la propiedad location no existe en el objeto db, no pasara nada.
// En caso que la propiedad location si exista, entonces accedera a su propiedad city

// FETCH()

// Lo aprenderemos con un ejemplo bastante comun que se usa en React: Pedir datos de un backend

// Usaremos una funcion de Javascript llamada fetch(), que nos permite realizar peticiones para obtener datos .json de un directorio en la web
// La funcion fetch() devuelve una Promise que sera aceptada cuando reciba una respuesta
// Sera rechazada si hay algun fallo en la red o si no se pudo completar la peticion

let data = fetch('https://jsonplaceholder.typicode.com/posts')

console.log(data);      // Promise {<pending>}

// .then()

// La asincronía nos permite ejecutar logica de Javascript mientras se realizan otras tareas.
// Es decir, mientras se realizan funciones asincronas, el codigo seguira ejecutando las siguientes lineas de codigo

// Las promesas tienen unos metodos especiales que se activan si una Promise se cumple o no.
// usamos .then() si una Promise se ha cumplido
// usamos .catch() si una Promise no se cumplio

// Entonces, podemos usar la asincronia para ejecutar una funcion cuando la Promise se cumpla

// .then() ejecuta la funcion que toma como parametro si la Promise se cumple
data.then( (res)=> {
    console.log('Ha finalizado la carga de los datos');
    console.log(res)
})

console.log('Linea 2 de codigo');

/* 
    Linea 2 de codigo
    Ha finalizado la carga de los datos
    Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
*/

// Vemos que se muestra en consola un Response, pero queremos trabajar con estos datos.


// Podemos pensar que en la consola se mostrara primero el cumplimiento de la Promesa, y luego la linea 2
// Pero debido a que la funcion fetch() devuelve una Promesa que espera a ser cumplida
// Entonces, mientras se espera a ver si se cumple o no la Promesa, el codigo sigue ejecutandose

// .json()

// Haremos uso de un metodo .json() que transforma un Response en codigo .json el cual podemos leer y trabajar.
// El metodo .json() tambien devuelve un Promise, por lo que tambien usaremos un .then() anidado

// Veamos un ejemplo de como mostrar en nuestra pagina los datos de la url que pedimos.

// Crearemos un elemento <ul> </ul> que contendra los datos en una lista
const ul = document.createElement('ul');

// hacemos la peticion de los datos de esta url
fetch('https://jsonplaceholder.typicode.com/albums')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach( (post) => {
            const li = document.createElement('li');
            li.innerText = post.title;
            ul.append(li);
        });     
        document.body.append(ul);
    });     // Usamos un ; porque ya ha terminado los .then()// Usamos un ; porque ya ha terminado los .then()

// Este codigo nos imprimira en nuestra pagina una lista con la propiedad title de la informacion que solicitamos a la url


// ASYNC / AWAIT

// Usando funciones asincronas podemos optimizar mucho más este codigo:

// Usamos la palabra reservada async delante de la funcion para indicarle que es una funcion asincrona
// es decir, una funcion que se ejecutara mientras otros procesos y codigos del archivo se ejecutan.

const ol = document.createElement('ol');

// Lo que cambiaremos sera incluir todo en una funcion asincrona (async)
const loadData = async () => {
    
    // Las funciones que devuelvan Promises le colocaremos un await antes para indicar que se esperara por la respuesta de una Promise
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    // Aqui seria el mismo codigo de antes para imprimirlo en la pagina
    data.forEach( (user) => {
        const li = document.createElement('li');
        li.innerText = user.username;
        ol.append(li);
    });
    document.body.append(ol);
}

// Finalmente, ejecutamos la funcion asincrona
loadData();