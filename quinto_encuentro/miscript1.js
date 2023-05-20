//ejercicio 3
/* let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;
function obtenerDatos(){
    fetch('pelicula.json')
        .then(respuesta=>respuesta.json())
        .then(datos=>{
            titulo=datos.titulo;
            director=datos.director;
            lanzamiento=datos.lanzamiento;
            duracion=datos.duracion;
            actores=datos.actores;
            premioOscar=datos.premioOscar
        })
        .catch(error=>alert(error))
        
} */

//Ejercicio 4
let nombre;
let calle;
let ciudad;
let cantEstudiantes;
let estudiantes;
function obtenerDatos(){
    fetch('colegio.json')
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        nombre=datos.nombre;
        calle=datos.direccion.calle;
        ciudad=datos.direccion.ciudad;
        cantEstudiantes=datos.cantEstudiantes;
        estudiantes=datos.estudiantes;
    })
    .catch(error=>alert(error))
}