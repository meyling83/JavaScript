//Ejercicio 1
//obtiene datos de una api. metodo get. 
//No es necesario especificar el get, por defecto es este, para otros metodos, hay que especificarlos
//const lista=document.getElementById("lista");
//el fetch hace la peticion a la url y devuelve una promesa
//el then espera la respuesta de esa promesay obtiene un json
//datos devuelve un array de objetos 
/* fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(datos=>{
    //recorro el arreglo de datosy creo los elementos de la lista para mostrar una lista con los nombres de los usuarios
   for (let usuario of datos){
        let elemento=document.createElement("li");
        elemento.textContent=usuario.name;
        lista.appendChild(elemento);
   }

}) */
//capturar algun error
//.catch(error=>console.log(error))

///////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 2

/* const lista=document.getElementById("lista");
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(datos=>{
    for(let post of datos)
    {
        let elemento=document.createElement("li");
        elemento.textContent=post.title;
        lista.appendChild(elemento);
    }
})
.catch(error=>console.log(error)) */
///////////////////////////////////////////////////////////////////////
//Ejercicio 3
//obtener datos de la api usando funcion asincrona
//const lista=document.getElementById("lista");
// async funcion asincrona
/* async function obtenerDatos(url){
    try{
        //utilizo el await para esperar la respuesta de la funcion asincrona
        const respuesta=await fetch(url);
        const datos=await respuesta.json();
        for (let usuario of datos){
            let elemento=document.createElement("li");
            elemento.textContent=usuario.name;
            lista.appendChild(elemento);
       }
    }
    catch(error){
        console.log(error);
    }

} */
//llamar a la funcion obtenerDatos
//obtenerDatos("https://jsonplaceholder.typicode.com/users");
/////////////////////////////////////////////////////////////////////////
//Ejercicio 4 usando axios con then
/* const lista=document.getElementById("lista");
function obtenerDatos(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(respuesta=>{ 
        let datos=respuesta.data;
        for (let usuario of datos){
            let elemento=document.createElement("li");
            elemento.textContent=usuario.name;
            lista.appendChild(elemento);
       }
        
    })
    .catch(error=>console.log(error));
      
} */

///////////////////////////////////////////////////////////////////////
//ejercicio 5
/* const lista=document.getElementById("lista");5
function obtenerDatos(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(respuesta=>{
        let datos=respuesta.data;
        for (let post of datos){
            let elemento=document.createElement("li");
            elemento.textContent=post.title;
            lista.appendChild(elemento);
        }
    })
} */
//ejercicio 1 otra lista

/* function obtenerDatos(){
    fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico')
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        let cuerpoTabla=document.getElementById("tblContenido");
        let resultados=datos.results;
        let salida="";
        //otra forma de construir la tabla, con innerhtml
        for (elemento of resultados){
            salida+=`
            <tr>
                <td>${elemento.calle}</td>
                <td>${elemento.regular}</td>
                <td>${elemento.razonsocial}</td>
            </tr>
            `
        }
        cuerpoTabla.innerHTML=salida;
    })
    .catch(error=>console.log(error));

} */

//ejercicio 2 otra lista
/* function obtenerDatos(){
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        let resultados=datos.results;
        let salida="";
        let lista=document.getElementById("lista");
        for(let elemento of resultados){
            salida+=`
                <li>${elemento.name}</li>
            `
        }
        lista.innerHTML=salida;
    })
    .catch(error=>console.log(error));
} */
/* async function obtenerDatos(){
    try{
        const respuesta=await fetch();
    }
    catch
    {

    }
} */
//ejercicio uso de css
/* async function obtenerDatos(){
    try{
        let respuesta=await fetch('https://jsonplaceholder.typicode.com/users');
        let datos=await respuesta.json();
        let salida="";
        let tblContenido=document.getElementById("tblContenido");
        for (elemento of datos)
        {
             salida+=`
                <tr>
                    <td>${elemento.name}</td>
                    <td>${elemento.name}</td>
                    <td>${elemento.name}</td>
                    <td>${elemento.name}</td>
                    <td>${elemento.name}</td>
                </tr>

            `

        }
        tblContenido.innerHTML=salida;

    }
    catch(error){
        console.log(error);
    }

} */
//ejercicio insertar datos en una api

/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Nuevo titulo',
    body: 'Publico nuevo post',
    userId: 25,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */

//ejercicio modificar datos de una api
/* fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PUT',
  body: JSON.stringify({
    id: 5,
    title: 'titulo modificado',
    userId: 1,
    completed:false
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */ 
//ejercicio eliminar de una api
/* fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then(respuesta=>respuesta.json())
.then(data=>console.log(data)); */
//uso de patch
/* fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'usando patch metodo',
    completed:true
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */