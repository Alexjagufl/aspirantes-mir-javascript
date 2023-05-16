var persona = {
    nombre: "Alejandro Gutierrez",
    ciudad: "Ciudad de Mexico",
    edad: 31,
    profesion: "Programador"
}

console.log(persona);

function presentacion(arg){
    return arg.nombre + ", " + arg.edad + ", " + arg.ciudad
}

var mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["Programar videojuegos", "Jugar con Lalito", "Estudiar"]

var hobbies = persona.hobbies;
for(var i = 0; i < hobbies.length; i++){
    console.log(hobbies[i])
}