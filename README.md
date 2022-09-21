# js-for-react
A guide of what terms of Javascript u need to learn React

La información presentada en este artículo ha sido extraída de [Javascript para Aprender React
](https://www.youtube.com/watch?v=lVqHiTCIRQg&ab_channel=Fazt)

## Configuración  del Proyecto

Empezaremos creando una carpeta para almacenar el proyecto llamada `js-for-react`:

``` bash
mkdir js-for-react
```

A continuación, entraremos en la carpeta `js-for-react` y crearemos 3 archivos: `index.html`, `index.css` y `index.js`

``` bash
cd js-for-react

touch index.html index.css index.js
```

En `index.html` agregamos el siguiente código con el shorthand `html:5`:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

En `index.css` agregamos los siguientes estilos:

``` css
body {
    background: #202020;
    color: #fafafa;
}
```

En `index.js` agregamos el siguiente código:

``` javascript
console.log("Hola Mundo");
```

Haremos uso de Live Server para visualizar el contenido de nuestro proyecto:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663637394862/hJ5xRQ1Fo.png align="left")

Ya hemos configurado el proyecto, se debe ver así:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663637466678/Dt0c3ONTw.png align="left")

Puedes acceder al repositorio de este proyecto [aquí](https://github.com/luis123doria/js-for-react).


## Funciones de Javascript

Debemos saber como crearlas y llamarlas, ya que la usaremos mucho cuando trabajemos con React.

Crearemos una función `function hello() {}` que escriba Hola mundo en la consola:

``` javascript
// Creamos una funcion que escriba en consola
function hello() {
    console.log("Hola Mundo");
}

// Llamamos la funcion
hello()      // Hola Mundo
```

Una funcion también puede retornar un valor, que puede ser cualquier tipo de dato `string` `number` `float` `boolean` `object` `array`...

``` javascript
// Creamos una funcion que escriba en consola
function hello() {
    return 20;
}

// Almacenamos en una variable el valor que retorna la funcion
const res = hello();

// Y luego lo mostramos en consola
console.log(res)      // 20
```

O podemos evitar crear una variable mostrando directamente en consola el valor que retorna la funcion:

``` javascript
function hello() {
    return true;
}

console.log(hello());      // true
```

Una funcion puede retornar otra funcion:

``` javascript 
function hello() {
    return function () {
        return 'Hello World!'
    }
}

console.log(hello());      
/* ƒ () {
        return 'Hello World!'
    }
*/
```

Si queremos obtener el valor que retorna la funcion dentro de `function hello()` podemos agregar un par de '()' al lado del `console.log()`:

``` javascript
function hello() {
    return function () {
        return 'Hello World!'
    }
}

console.log(hello()());      // Hello World
```

Más información en: [Declarar y Llamar Funciones en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#definir_funciones)

## Parámetros de funciones

Los parámetros de funciones nos permiten interactuar con funciones y variables en un proyecto. Veamos un ejemplo:

``` javascript
function add(x, y){
    return x + y
}

console.log(add(10, 20))      // 30
```

## Parámetros por defecto 

A veces, puede que una funcion que deba tomar unos parámetros, no lo hará, lo que conducirá a un error. Por eso, establecer el valor por defecto de los parámetros de una función es una buena práctica para el manejo de errores. Veamos como hacerlo:

``` javascript
function add(x, y = 0){      // y = 0 indica que el valor por defecto de y sera igual a 0 si no lo asignamos al llamar la funcion
    return x + y;
}

console.log(add(25));      // 25
```

Más información en: [Parámetros de función en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#par%C3%A1metros_de_funci%C3%B3n)

## Objetos

Son representados dentro de llaves {}. Pueden contener valores, que por lo general se representan en un  par clave : 'valor'. Construyamos un objeto:

``` javascript
const user = {
    name: 'Jhonny',      // Par clave: 'valor'
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
```

Los objetos pueden almacenar objetos, arreglos y hasta funciones. Si queremos acceder a las propiedades de un objeto usaremos la siguiente sintáxis `objectName.propertyName`

``` javascript
console.log(user.name);      // Jhonny
console.log(user.address.country);      // US
console.log(user.active);      // false
console.log(user.sendMessage());      // enviando correo...
```

## Shorthand property names

Si queremos crear un objeto a partir de los datos de otras variables podemos hacer lo siguiente:

``` javascript 
const name = 'laptop';
const price = 1000;

const product = {
    name: name,
    price: price
}

console.log(product);       // object
```

Este codigo puede abreviarse si la variable tiene el mismo nombre que la propiedad del objeto:

``` javascript 
const name = 'laptop';
const price = 1000;

const newProduct = { name, price }

console.log(newProduct);        // object
```

Más información en: [Objetos en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)

## Manipulación del DOM

Cuando trabajamos con React, Javascript es el encargado de manipular el DOM (Document Object Model) para renderizar los elementos en la página. Veamos un poco como funciona la manipulación del DOM:

En nuestra página podemos ir a la Consola de las opciones de desarrollador y podemos escribir:

```
document.title
> 'JS for React'
```

Nos ha devuelto el titulo de la pagina. Teniendo esto en cuenta, podemos escribir codigo Javascript que permita añadir codigo HTML a la pagina:

``` javascript
// Creamos una constante que  almacene la creacion de un nuevo elemento HTML <h1></h1>
const title = document.createElement('h1')
title.innerText = 'Hola Mundo desde JS'

const button = document.createElement('button')      // Este es un elemento botón
button.innerText = 'Click'

console.log(title)      // h1 element
```

Si queremos añadir este nuevo elemento H1 al codigo HTML, debemos usar el método `.body.append(elementName)`:

``` javascript
document.body.append(title)     // Añadira el elemento H1 a la pagina
document.body.append(button)
```

Más información en: [¿Qué es el DOM en Javascript?](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction#.c2.bfqu.c3.a9_es_el_dom.3f) [Manipulación básica con el DOM en Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)

## Event Handlers

Si queremos escuchar por eventos y hacer algo en cuanto ese evento ocurra, hacemos uso de los manejadores de eventos (EventListeners).

Veamos como usar un EventListener:

``` javascript
// el metodo .addEventListener toma 2 parametros: un evento y una funcion a ejecutar 
button.addEventListener('click', function() {
    title.innerText = 'Texto actualizado con JS'
    console.log('click!')
})
```

Con este código, al clicar en el boton que hemos creado con JS, el contenido del titulo se modificará.

Más información en: [Manejando Eventos en Javascript](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) [Referencia de Eventos](https://developer.mozilla.org/es/docs/Web/Events)

## Objetos como parámetros

En una funcion podemos usar objetos como parametros, para poder acceder a sus propiedades dentro de la funcion. Veamos un ejemplo:

``` javascript
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
```

## Destructuring de Objetos

El destructuring nos permite 'desestructurar' un objeto para poder acceder a sus propiedades y sus valores. Es otra forma de acceder a ellos, diferente a `objetctName.propertyName` o `objectName['propertyName']`.

Consiste en usar `{ propertyName }` como parámetro de una funcion. Esto lo que buscara son objetos que tengan una propiedad con el nombre `propertyName`

``` javascript
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
```

Esta forma nos ayuda en sintáxis al no tener que escribir `objectName['propertyName']` lo cual puede ser bastante engorroso en algunas ocasiones.

Tambien es posible desestructurar un objeto al declarar una variable:

``` javascript
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
```

Más información en: [Desestructuración en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#sintaxis) [Como utilizar la Desestructuración de Arreglos y Objetos en Javascript](https://www.freecodecamp.org/espanol/news/desestructuracion-de-arreglos-y-objetos-en-javascript/) [Desestructuración de Objetos en Javascript](https://lenguajejs.com/javascript/objetos/desestructuracion-objetos/)

## Funciones anónimas

Javascript puede ejecutar funciones que no tengan un nombre asignado si las escribimos al ejecutar una tarea.

``` javascript
console.log(
    function () {
        return 'Starting...'
    }()
)      // Starting...
``` 

Las funciones anónimas se usan mucho cuando escuchamos eventos:

``` javascript
const buttonAF = document.createElement('buttonAF')
buttonAF.innerText = 'Click Me'
buttonAF.addEventListener('click', function() {
    console.log('Cliked')
})

document.body.append(buttonAF)      // Clicked en consola
```

Más información en: [Funciones Anónimas en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#definir_funciones) [Funciones Anónimas en Javascript](https://lenguajejs.com/javascript/fundamentos/funciones/#funciones-an%C3%B3nimas)

## Arrow Functions (Funciones Flecha)

Hasta ahora hemos usado funciones que se declaran con la palabra clave reservada `function`, pero en las versiones más nuevas de Javascript se introdujeron las 'arrow functions', que se escriben en menos lineas de código. También difieren de las funciones normales en algunos aspectos de scope y de como acceden a las variables.

``` javascript
const add = (x, y) => { 
    return x + y 
}
```

## Inline Arrow Functions

Otra forma de escribir Funciones flecha es si la instruccion de dicha funcion ocupa solo una línea, en ese caso, podemos obviar el `{ return }`. 

``` javascript
const showText = () => 'Hola Mundo desde una Funcion flecha'
console.log(showText());    // Hola Mundo desde una Funcion flecha

// Podemos devolver varios tipos de datos de esta manera:
const showNumber = () => 10;
console.log(showNumber());      // 10

const showBool = () => false;
console.log(showBool());      // false

const showArray = () => [1,2,3];
console.log(showArray());      // [1,2,3]
```

Algo pasa si queremos usar una Arrow Function que retorne un objeto. La sintaxis de un objeto es: `{property1: value1, property2: value2}`.
Si usamos un arrow function que retorne un objeto debemos usar un (). Este () permite delimitar que es lo que se debe retornar, y está implícito en una inline arrow function.

``` javascript
const showObject = () => ({name: 'David', age: 45});
console.log(showObject());      // {name: 'David', age: 45}
```

Más información en: [Funciones Flecha en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions) [Arrow Functions en Javascript](https://lenguajejs.com/javascript/fundamentos/funciones/#arrow-functions)

## Return

La palabra return nos permite retornar un valor de una funcion. Tambien nos permite no ejecutar todo el codigo que haya despues del return.

``` javascript
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
```

De esta manera podemos terminar con la ejecucion de una funcion cuando se cumple una condicion o en un paso especifico de la misma.

Más información en: [Return en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/return)

## String Literals

Nos permiten concatenar o unir strings, pero a su vez tambien nos permiten interpretar valores y variables de Javascript.

Veamos un ejemplo de como usarlo: 

``` javascript
// Creamos un elemento <div></div>
const box = document.createElement('div');
box.innerText = 'Caja';
const conditional = true;

// Ahora creamos unas constantes que contengan los valores de estilo que aplicaremos
const background = 'steelblue';
const color = 'white';

// Aplicaremos los estilos al elemento con un String Literal y un Operador Ternario
box.style = `background: ${conditional ? (background) : ('red')}; color: ${color}`;

document.body.append(box);
```

De esta forma, podemos concatenar valores y variables de Javascript usando la sintaxis `${something}`

Más información en: [Plantillas literales en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals) [Interpolación de Variables en Javascript](https://lenguajejs.com/javascript/string/variables-texto/#interpolaci%C3%B3n-de-variables)

## Operador Ternario

El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if. 


Más información en: [Operador condicional (ternario) en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) [Operador ternario en Javascript](https://lenguajejs.com/javascript/introduccion/estructuras-de-control/#operador-ternario)

## Métodos de Arreglos

Los métodos de los areglos nos permiten listar varios elementos y filtrarlos de acuerdo a unas características.

``` javascript
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
```

Más información en: [Arreglos en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array) [Array Functions en Javascript](https://lenguajejs.com/javascript/arrays/array-functions/#qu%C3%A9-son-las-array-functions)

### Método `.forEach`

Una manera de obtener el mismo resultado es con los métodos propios de los Arrays, en este caso `arrayName.forEach( () => {})`

``` javascript
const names = ['Luisfer', 'Bob', 'Mike']

names.forEach(name => {
    console.log(name)   /*
        Luisfer
        Bob
        Mike
    */
});
```

Más información en: [Método forEach en Javascript](https://lenguajejs.com/javascript/arrays/array-functions/#por-cada-uno-foreach)

## Método `.map`

El metodo `.map` es muy útil ya que nos permite recorrer el arreglo tal como lo haria el método forEach, pero también crea un nuevo arreglo con las modificaciones de la función que llama el método `.map`

``` javascript
// .map() toma como parametro una funcion
const newNames = names.map( (name) => `Hola ${name}`);

console.log(newNames);      // (3) ['Hola Luisfer', 'Hola Bob', 'Hola Mike']
```

Más información en: [Método map en Javascript](https://lenguajejs.com/javascript/arrays/array-functions/#transformar-map)

### Método `.find`

El método `.find` nos devuelve el primer elemento de un arreglo que cumpla con las condiciones de búsqueda de la función que toma como parámetro dicho método.

``` javascript
const findName = names.find((name) => {
    if (name.length <= 5) {
        return name
    }
} )

console.log(findName);      // Bob
```

Más información en: [Método find en Javascript](https://lenguajejs.com/javascript/arrays/array-functions/#buscar-find-findindex)

### Método `.filter`

El método `.filter` nos permite filtrar y crear un nuevo array con los elementos que cumplan una condición de una función.

``` javascript 
const filterNames = names.filter(name => {
    if (name.length <=5){
        return name
    }
})

console.log(filterNames);       // (2) ['Bob', 'Mike']
```

Más información en: [Método filter en Javascript](https://lenguajejs.com/javascript/arrays/array-functions/#filtrar-filter)

### Método `.concat`

Este método nos permite concatenar un arreglo1 con un arreglo2. El arreglo resultante es una copia, por lo que los arreglos originales no se ven modificados.

``` javascript
const irrationals = ['pi', 'euler', '2^1/2'];
const rationals = [1, 2, 100, 0];

// Uso del metodo .concat()
const reals = irrationals.concat(rationals);
console.log(reals);      // (7) ['pi', 'euler', '2^1/2', 1, 2, 100, 0]
``` 

Más información en: [Método concat en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## Spread Operator

Este operador funciona similar a como lo hace el método .concat(), pero lo hace de una manera más sencilla:

``` javascript
const irrationals = ['pi', 'euler', '2^1/2'];
const rationals = [1, 2, 100, 0];

console.log([...irrationals, ...rationals]);    // (7) ['pi', 'euler', '2^1/2', 1, 2, 100, 0]
```

Este operador también funciona para concatenar objetos.

``` javascript
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
```

Más información en: [Sintáxis Spread Operator en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## ECMAscript Modules

Podemos importar y exportar funciones, variables, objetos, etc de otros archivos .js. Para importar funcionalidades de un archivo .js a otro primero debemos agregar un atributo a la etiqueta `<src />` en `index.html`

``` html
<!-- Usamos este atributo para el src -->
    <script type='module' src="./index.js"></script>
```

Luego, creamos un nuevo archivo nuevo `modules.js` donde alojaremos las funcionalidades que exportaremos:

``` javascript
// modules.js

export function suma(x, y) {
    return x + y
}

export function multiply(x, y) {
    return x * y
}

export const titulo = 'Js for React';

export const active = false;

export const nums = [1,2,3,4,5];
```

Usamos la palabra reservada export que indica que esta funcion será exportada y usada en otros archivos .js 

En nuestro `index.js` debemos 'importar' las funcionalidades de este archivo `modules.js`. Lo haremos de esta manera:

``` javascript
import { suma, multiply, titulo, active, nums } from './modules.js';
```

Usamos esta sintaxis, entre { } desestructuramos las funcionalidades que usaremos en nuestro `index.js`. Ahora podemos acceder a las funciones y variables importadas:

``` javascript
// index.js

console.log(suma(10,15));       // 25
``` 

### `export default`

Podemos agregar al final de nuestro archivo `modules.js` alguna funcionalidad que se exporte por defecto, y que podrá ser accedida en los archivos que importen las funcionalidades de `modules.js` bajo un identificador.

``` javascript 
// modules.js

// Al final del código

export default titulo
```

Ahora podemos acceder a la variable titulo desde nuestro `index.js` asignándole algun otro nombre:

``` javascript
import importedTitle from './modules.js';

// Ahora podemos acceder a la funcionalidad que se exporta por defecto
console.log(importedTitle);      // Js for React
```

Más información en: [Módulos en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#introducci%C3%B3n_%E2%80%94_un_ejemplo)

## Optional Chaining

Cuando trabajamos con Frontend vamos a querer leer datos de un Backend. Si queremos leer las propiedades de un objeto, y una propiedad no existe, Js nos tirara error. 

Con el optional chaining, indicamos a Javascript que verifique si alguna propiedad existe. Si existe, podremos acceder a ella. Si no, no hara nada, pero no nos arrojara algun error

Veamos como funciona: 

``` javascript
const db = {
    name: 'Luis',
    age: 19,
    address: {
        city: 'Caracas'
    }
}

console.log(db.location?.city);     // undefined
```
Como la propiedad location no existe en el objeto db, no pasara nada. En caso que la propiedad location si exista, entonces accedera a su propiedad city

Más información en: [Encadenamiento Opcional en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## `fetch()`

El uso de las funcionalidades de asincronía de Async / Await  lo aprenderemos con un ejemplo bastante comun que se usa en React: Pedir datos de un backend.

Usaremos una funcion de Javascript llamada fetch(), que nos permite realizar peticiones para obtener datos .json de un directorio en la web.

Para hacer nuestras peticiones usaremos la url https://jsonplaceholder.typicode.com/ que contiene datos que podemos solicitar.

La funcion fetch() devuelve una Promise que sera aceptada cuando reciba una respuesta, y sera rechazada si hay algun fallo en la red o si no se pudo completar la peticion.

``` javascript 
let data = fetch('https://jsonplaceholder.typicode.com/posts')
```

Su sintáxis es bastante sencilla: Una funcion que toma por parametro un string con la url que contiene los datos que necesitamos.

Si queremos mostrar en consola la variable `data` obtendremos una Promise que se encuentra pendiente por resolver:

``` javascript
console.log(data)       // Promise {<pending>}
```

Más información en: [Peticiones HTTP con Fetch en Javascript](https://lenguajejs.com/javascript/peticiones-http/fetch/#peticiones-http-con-fetch) [Uso de Fetch en Javascript](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

## `.then()`

La asincronía nos permite ejecutar logica de Javascript mientras se realizan otras tareas. Es decir, mientras se realizan funciones asincronas, el codigo seguira ejecutando las siguientes lineas de codigo.

Las promesas tienen unos metodos especiales que se activan si una Promise se cumple o no:
- usamos .then() si una Promise se ha cumplido
- usamos .catch() si una Promise no se cumplio

Entonces, podemos usar la asincronia para ejecutar una funcion cuando la Promise se cumpla:

``` javascript
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
```

Vemos que se muestra en consola un Response, pero queremos trabajar con estos datos.

Podemos pensar que en la consola se mostrara primero el cumplimiento de la Promesa, y luego la linea. Pero debido a que la funcion fetch() devuelve una Promesa que espera a ser cumplida, entonces mientras se espera a ver si se cumple o no la Promesa, el codigo sigue ejecutandose.

Más información en: [Promesas en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

## `.json()`

Haremos uso de un metodo `.json()` que transforma un Response en codigo .json con el cual podemos leer y trabajar. El metodo .json() tambien devuelve un Promise, por lo que tambien usaremos un .then() anidado.

Veamos un ejemplo de como mostrar en nuestra pagina los datos de la url que pedimos.

``` javascript
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
```

Este codigo nos imprimira en nuestra pagina una lista con la propiedad title de la informacion que solicitamos a la url

Más información en: [Métodos de Procesamiento en Javascript](https://lenguajejs.com/javascript/peticiones-http/fetch/#m%C3%A9todos-de-procesamiento)

## Async / Await

Usando funciones asincronas podemos optimizar mucho más este codigo. Con la palabra reservada async delante de la funcion podemos indicarle que es una funcion asincrona, es decir, una funcion que se ejecutara mientras otros procesos y codigos del archivo se ejecutan.

``` javascript
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
```

Más información en: [Async Await en Javascript](https://lenguajejs.com/javascript/asincronia/async-await/) [Función Async en Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
