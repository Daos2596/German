let persona = {edad:20, peso: 75, nombres: "pedro", apellidos : "Perez Perez"};
        for (const key in persona) {
          console.log(key, persona[key]);
            }
    persona.peso = 77;
    persona["edad"] = 21;
    console.log("Diccionario con modificaciones", persona);
    delete persona["apellidos"];
    console.log("Diccionario Eliminando apellidos", persona);
