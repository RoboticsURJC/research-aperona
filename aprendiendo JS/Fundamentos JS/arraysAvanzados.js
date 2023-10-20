// metodo .some()

//Verifica si alguno de los elementos del array pasan la prueba implementada por la
// función dada
function tamañoValido(elemento, indice, arrreglo) {
    return elemento >= 10;
}
a = [12, 5, 8, 130, 44].some(tamañoValido);
b = [12, 54, 18, 130, 44].some(tamañoValido);

console.log(a, b)

// metodo .every()

//Verifica si todos los elementos del array pasan la prueba implementada por la función
// dada.

function tamañoValido(elemento, indice, arrreglo) {
    return elemento >= 10;
}
a = [12, 5, 8, 130, 44].every(tamañoValido);

b = [12, 54, 18, 130, 44].every(tamañoValido);

console.log(a, b)

//metodo .filter()

// Crea un nuevo array con aquellos elementos que cumplan la condición

function tamañoValido(elemento) {
    return elemento >= 10;
}
var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);

console.log(filtrados)

// metodo .map()

var arreglo = ["plátano", "fresa", "lima", "manzana"];
var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
console.log(resultado);


// arrays multidimensionales

var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];
var juntandoArreglos = [arreglo1, arreglo2];
console.log(juntandoArreglos[0][0]);
console.log(juntandoArreglos[1][3]);

console.log(juntandoArreglos)