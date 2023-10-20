function square(number){
    return number * number
}

console.log(square(2))

//-- Las funciones cambian propiedades y valores de los objetos que se les pasa

function changeCar(theCar){
    theCar.brand = 'citroen'
}

let myCar = {
    brand : "peugeot"
}

console.log("Antes: " + myCar.brand)

changeCar(myCar)

console.log("Despues: " + myCar.brand)

const cuadrado = function (number){
    return number * number
}

var x = cuadrado(3)
console.log(x)


// se puede pasar una función como argumento

function map(f, a){
    let result = []
    let i
    for (i = 0; i != a.length; i++){
        result[i] = f(a[i])
    }
    return result
}

const f = function (x){
    return x*x*x
}

let numbers = [0, 1, 2, 5, 10]
let cube = map(f, numbers)
console.log("map: " + cube)


// una función puede llamarse a si misma

function factorial(n){
    if ((n == 0) || (n == 1)){
        return 1
    }
    else{
        return n * factorial(n - 1)
    }
}

console.log(factorial(4))

/*
JavaScript permite el anidamiento de funciones y otorga a la función interna acceso completo
a todas las variables y funciones definidas dentro de la función externa
 */

var pet = function (name) {
  var getName = function () {
    return name;

  }
  return getName;
}
myPet = pet("Vivie")

console.log(myPet())

//-- Usar el objeto arguments

function myConcat(separator) {
  var result = ""
  var i

  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator
  }
  return result
}

var r = myConcat(": ", "hola", "que", "tal")
console.log(r)


//-- Parametros rest

function multiply(multiplier, ...args){
    return args.map((x) => multiplier * x)
}

var arr = multiply(2, 1, 2, 3)
console.log(arr)

//-- Funciones flecha

var a = ["Hidrógeno", "Helio", "Litio", "Berilio"]

var a2 = a.map(function (s) {
  return s.length
})

console.log(a2)

var a3 = a.map((s) => s.length)

console.log(a3)