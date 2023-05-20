/* fetch('persona.json')
    .then(function(respuesta){return respuesta.json()})
    .then(function(datos){console.log(datos)}) */
/* let datosJson;
fetch('persona.json')
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        datosJson=datos.nombre;
        let elementoTexto=document.getElementById("nombre");
        elementoTexto.textContent=datosJson
    }) 
    .catch(error=>alert(error)); */


//ejemplo para coger el json de una url
fetch('https://jsonplaceholder.typicode.com/users/2')
.then(respuesta=>respuesta.json())
.then(datos=>{
   
    let elementoTexto=document.getElementById("nombre");
    elementoTexto.textContent=datos.name;
    let elementoTexto1=document.getElementById("email");
    elementoTexto1.textContent=datos.email;
}) 
.catch(error=>alert(error)); 