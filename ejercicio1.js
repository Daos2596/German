var edad = parseInt (prompt("Ingrese su edad"));

function mostrarEdad(edad){
    switch(edad) {
        case 15: 
        console.log("tiene 15");
        break;
        case 20:
        console.log("tiene 20");
        break;
        case 30:
        console.log("tiene 30");
        break;
        default:
            console.log("Ingrese una edad valida");
         
      }
}