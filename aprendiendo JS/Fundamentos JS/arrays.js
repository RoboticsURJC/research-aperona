var arreglo = [];
console.log(arreglo)

let arreglo2 = [1, "platano", "true"]

console.log(arreglo2)
console.log("arreglo2[1]: " + arreglo2[1]) // empiezan en 0

arreglo2[1] = "pera" // cambiar valores
console.log("arreglo2[1]: " + arreglo2[1])

delete arreglo2[1] // borrar elementos
console.log(arreglo2)


// propiedad length

var numeros = [1, 2, 3, 4, 5];
for (var i = 0; i < numeros.length; i++) {
    numeros[i] *= 10;
}

console.log(numeros)

// sort

var frutas = ['plátano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
frutas.sort(); // ordena en modo alfabetico o numerico (ascendente)

var numeros = [0, 45, 2, -5, 123, -47];
numeros.sort()

console.log(frutas)
console.log(numeros)


var numero = 1337.89;
var fecha = new Date();
var miArray = [numero, fecha, 'más datos'];
var arrayConvertida = miArray.toLocaleString();
console.log("Array to localestring: " + arrayConvertida);

// propiedad concat

var arreglo = ['a', 2, true];
var arreglo3 = [1, 2, 4];
var nuevaArray = arreglo.concat(arreglo3);
console.log(nuevaArray);


// propiedad push

var arreglo = [1, "plátano", "manzana"];
console.log("Antes:", arreglo.length);
arreglo.push("nuevo");
console.log("Después:", arreglo.length);
console.log("arreglo[3]:", arreglo[3]);
console.log(arreglo)


// propiedad shift

arreglo.shift() // eliminar primer elemento del array

console.log(arreglo)


// propiedad splice

var frutas = ['plátano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
console.log("frutas[1]:", frutas[1]) // Naranja
frutas.splice(1, 3); // borra del 1 al 3
console.log(frutas) // Mango
console.info("frutas.length:", frutas.length); // 2
