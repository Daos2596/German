let imprimir;

function mostrarMayor(x,y){
    if (x>y){
        imprimir = console.log("El primero es el numero mayor");
    } else if (x==y){
        imprimir = console.log("Los numeros son iguales");
    } else if (x<y){
        imprimir = console.log("El segundo numero es mayor");
    }
}