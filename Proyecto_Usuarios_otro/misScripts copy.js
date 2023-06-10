function obtenerTodos(){
    
    fetch('http://localhost:3000/usuarios')
    .then(response=>response.json())
    .then(datos=>{
        var tblContenido=document.getElementById("tblContenido");
        var salida="";
        for(elemento of datos){
            salida+=`
                <tr>
                    <td>${elemento.id}</td>
                    <td>${elemento.nombre}</td>
                    <td>${elemento.edad}</td>
                    <td>${elemento.localidad}</td>
                    
                </t>
            `
        }
        tblContenido.innerHTML=salida;
    })
    .catch(error=>console.log(error))
}
function consultarUno(){
    var id=document.getElementById("txtConsulta").value;
    if(id==""){
        alert("No ha ingresado ningun id");
        return;
    }
    var url="http://localhost:3000/usuarios/"+id;
    fetch(url)
    .then(response=>response.json())
    .then(datos =>{
        document.getElementById("consultaNombre").value=datos.nombre
        document.getElementById("consultaEdad").value=datos.edad
        document.getElementById("consultaLocalidad").value=datos.localidad
        
    })
    .catch(error=>console.log(error))
    
}
function modificarUno(){
    var id=document.getElementById("txtConsulta").value;
    if(id==""){
        alert("No ha ingresado ningun id");
        return;
    }
    var url="http://localhost:3000/usuarios/"+id;
    fetch(url,{
        method:'PUT',
        body:JSON.stringify({
            nombre:document.getElementById("consultaNombre").value,
            edad:document.getElementById("consultaEdad").value,
            localidad:document.getElementById("consultaLocalidad").value,
            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(response=>response.json())
    .then(datos=>{
        alert(`Se ha modificado el archivo ${id}. Nuevo contenido:\n${JSON.stringify(datos)}`);
        obtenerTodos();
    })
    .catch(error=>console.log(error));
}
function eliminarUno(){
    var id=document.getElementById("txtConsulta").value;
    if(id==""){
        alert("No ha ingresado ningun id");
        return;
    }
    var url="http://localhost:3000/usuarios/"+id;
    fetch(url,{
        method:'DELETE',
        
    })
    .then(response=>response=>json())
    .then(datos=>{
        alert(`Se ha eliminado el archivo ${id}`);
        document.getElementById("consultaNombre").value="";
        document.getElementById("consultaEdad").value="";
        document.getElementById("consultaLocalidad").value="";
        obtenerTodos();
    })
    .catch(error=>console.log(error));
}
function agregarUno(){
    var nombre=document.getElementById("inputNombre").value;
    var edad=document.getElementById("inputEdad").value;
    var localidad=document.getElementById("inputLocalidad").value;
    

    fetch("http://localhost:3000/usuarios",{
        method:'POST',
        body:JSON.stringify({
            nombre:nombre,
            edad:edad,
            localidad:localidad,
           
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(response=>response.json())
    .then(datos=>{
        alert(`Se ha agregado un nuevo archivo: :\nNombre: ${datos.nombre} \nEdad: ${datos.edad} \nLocalidad: ${datos.localidad}`);
        //actualizo la lista despues de insertar
        obtenerTodos();

    })
    .catch(error=>console.log(error));
}