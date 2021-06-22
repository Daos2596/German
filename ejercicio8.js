function Usuario(){
    this.doc = prompt("ingrese su numero de docuemtno");
    this.nombres = prompt("ingrese su nombre(s)");
    this.apellidos = prompt("ingrese su apellido(s)");
    this.edad = prompt("ingrese su edad");
    this.peso= prompt("ingrese su peso");
    this.estatura = prompt("ingrese su estatura");

}
let arreglo = [];
let cantUsuarios = prompt("Cuantos usuarios desea registrar");
for (let i = 0; i < cantUsuarios; i++) {
    alert("Ingrese los datos del usuario"+ (i+1));
    arreglo [i] = new Usuario ();
}

alert("Registro Exitoso!");

function consultarRegistro(arreglo,cantUsuarios){
    let consultar= prompt("Ingrese el numero de documento que desea consultar");
    for (let i = 0; i < cantUsuarios; i++) {
            for (const key in arreglo[i]) {
                if (consultar==arreglo[i][key]){
                console.log("su registro es",arreglo[i]);
                }
            }
        }
        
    }
