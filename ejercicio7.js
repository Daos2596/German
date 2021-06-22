arreglo = [1,2,3,4,500,420,-100]
arreglo.splice(4,1);
console.log("El arreglo sin el elemento 4", arreglo);

arreglo.pop();
console.log("El arreglo despues del pop", arreglo);

arreglo.push(520);
console.log("El arreglo despues del push", arreglo);

let copiaArreglo = arreglo.slice();
console.log(copiaArreglo);