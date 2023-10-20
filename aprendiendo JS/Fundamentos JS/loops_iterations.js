//-- Bucles for

let i = 0

for (i = 0; i < 5; i++){
    console.log(i)
}



//-- Bucle do while y while

do {
    console.log(i)
    i++
} while (i < 10);


while (i < 15){
    console.log(i)
    i++
}

//-- Labels

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Bucles externos: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Bucles internos: " + z);
    z += 1;
    if (z === 4 && x === 4) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}


//-- For .. in y for .. of


let objects = ["ball", "book", "comb"]

for (let i in objects){
    console.log(objects[i])
}

for (let i of objects){
    console.log(i)
}