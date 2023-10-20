// comentarios

/*
 comentario largo
 aaaa
 aaaa
 */

//-- Declaración de variables

// Variable global o no

var hello = "Hello "

// Variable local

let world = "world"

// Constante

const exclamation = "!"

console.log(hello + world + exclamation)


let a

console.log("Las variables sin definir se catalogan como: " + a)


//-- Declaración de funciones

foo()
function foo(){
    console.log("foo")
}

var baz = function (){
    console.log("baz")
}

baz.apply()


//-- Estructuras de datos

let coffees = ["French Roast", "Colombian", "Kona"]

console.log(coffees)

let animals = ["lion", , "tiger"]

console.log(animals)


let info = {"id": 12345, "name": "pepe"} // Objeto literal

console.log(info)


function cars(carName){
    if (carName == "Citroen"){
        return carName
    }else{
        return "another"
    }
}

var sales = 430

var car = {myCar: "Saturn", getCar: cars("Citroen"), special: sales}

console.log(car.myCar)
console.log(car.getCar)
console.log(car.special)
console.log(car)


// Objetos anidados

var garage = {manyCars: {a: "Honda", b: "citroen"}, 7 : "mazda"}

console.log(garage.manyCars.a)
console.log(garage[7]) // para index de numeros
console.log(garage)

// Objetos mejorados

/*
var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Abreviatura de "handler: handler"
  handler,
  // Métodos
  toString() {
    // Llamadas a super
    return "d " + super.toString();
  },
  // Nombres de propiedad calculados (dinámicos)
  ["prop_" + (() => 42)()]: 42,
};*/


//-- Cadenas de caracteres

var p = `En JavaScript, las cadenas de plantilla pueden ocupar
 varias líneas, pero las cadenas entrecomillas dobles o
 simples no pueden.`

var name = "Antonio",
    time = "hoy"

console.log(`Hola ${name}, ¿cómo estás ${time}?`)

