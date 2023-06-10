function obtenerTodos(){
    fetch('http://localhost:3000/usuarios')
    .then(response=>response.json())
    .then(datos=>{
        var salida="";
        var tblContenido=document.getElementById("tblContenido");
        for(elemento of datos){
            salida+=`
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.nombre}</td>
                        <td>${elemento.edad}</td>
                        <td>${elemento.localidad}</td>
                    </tr>
            `;
        }
        tblContenido.innerHTML=salida;
        
    })
    .catch(error=>console.log(error));
}
function obtenerUrl(){
    var id=document.getElementById("txtConsulta").value;
    if(id==""){
       return "";
    }
    else{
        return 'http://localhost:3000/usuarios/'+id;
    }
}
function consultarUno(){
    var url=obtenerUrl();
    if(url==""){
        alert("No ha introducido ningun id");
        return;
    }
    fetch(url)
    .then(response=>response.json())
    .then(datos=>{
        document.getElementById("consultaNombre").value=datos.nombre
        document.getElementById("consultaEdad").value=datos.edad
        document.getElementById("consultaLocalidad").value=datos.localidad
    })
    .catch(error=>console.log(error));
}
function agregarUno(){
    var nombre=document.getElementById("inputNombre").value;
    var edad=document.getElementById("inputEdad").value;
    var localidad=document.getElementById("inputLocalidad").value;
    fetch('http://localhost:3000/usuarios',{
        method:'POST',
        body:JSON.stringify({
            nombre:nombre,
            edad:edad,
            localidad:localidad,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response=>response.json())
    .then(datos=>{
        alert(`Se ha agregado un nuevo archivo: \nNombre: ${datos.nombre}\nEdad: ${datos.edad}\nLocalidad: ${datos.localidad}`);
        obtenerTodos();
    })
    .catch(error=>console.log(error));
}
function modificarUno(){
    var url=obtenerUrl();
    if(url==""){
        alert("No ha introducido ningun id");
        return;
    }
    var nombre=document.getElementById("consultaNombre").value;
    var edad=document.getElementById("consultaEdad").value;
    var localidad=document.getElementById("consultaLocalidad").value;
    fetch(url,{
        method:'PUT',
        body:JSON.stringify({
            nombre:nombre,
            edad:edad,
            localidad:localidad,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response=>response.json())
    .then(datos=>{
        alert(`Se ha modificado el archivo ${datos.id}. Nuevo contenido \n${JSON.stringify(datos)}`);
        obtenerTodos();
    })
    .catch(error=>console.log(error));
}
function eliminarUno(){
    var url=obtenerUrl();
    if(url==""){
        alert("No ha introducido ningun id");
        return;
    }
    fetch(url,{
        method:'DELETE',
       
    })
    .then(response=>response.json())
    .then(datos=>{
            //alert(`Se ha eliminado el id ${datos.id}`);
            alert(`Se ha eliminado el id ${datos.id}`);
            document.getElementById("consultaNombre").value="";
            document.getElementById("consultaEdad").value="";
            document.getElementById("consultaLocalidad").value="";
            obtenerTodos();
    })
    .catch(error=>console.log(error));
}
