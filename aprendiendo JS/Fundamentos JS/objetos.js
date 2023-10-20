// creando objetos con propiedades

var miObjeto = {
    cadena : "Esto es una cadena",
    numero : 2,
    booleano : false,
    saludar : function (){
        console.log("Hola")
    },
    metodo : function (){
        console.log(miObjeto.numero)
    },
    borrame : "quiero ser borrado"
}

miObjeto.saludar()
miObjeto.metodo()

miObjeto.numero = 11 //cambiar propiedades
miObjeto.metodo()


delete miObjeto.borrame // borrar propiedades
console.log(miObjeto.borrame)


// defineProperties()

//Define nuevas propiedades o modifica las existentes directamente en el objeto, retor-
// nando el objeto modificado.

var miObjeto = {propiedad : "Propiedad original . . ."}
Object.defineProperties(miObjeto, {
    "propiedad1": {
        value : true,
        writable : true
    },
    "propiedad2":{
        value: "cadena de texto",
        writable: false
    }
})

console.info(miObjeto)

console.info(miObjeto.propiedad2)


// getOwnPropertyDescriptor()

//Devuelve los detalles de las propiedades y métodos del objeto. En caso de no existir
// retornará undefined.

var miObjeto = {
    metodo: function() {
        console.log(miObjeto.propiedad1)
    },
    propiedad1: "Datos"
};
console.info(Object.getOwnPropertyDescriptor(miObjeto, 'propiedad1'));
// {value: "Datos", writable: true, enumerable: true, configurable: true}
console.info(Object.getOwnPropertyDescriptor(miObjeto, 'inventado'));
// undefined

// for .. in

var objeto1 = {
    propiedad1: "hola",
    propiedad2: 2,
    propiedad3: false,
    propiedad4: [true,2,5, "..."],
    propiedad5: {
        dato: "más datos..."
    },
    metodo: function(){
        console.log("hola");
    }
}
function mostrar_propiedades(objeto, nombreObjeto) {
    var resultado = "";
    for (var i in objeto) {
        resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
    }
    return resultado;
}

console.log(mostrar_propiedades(objeto1, "objeto1"));

