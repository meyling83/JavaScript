function obtenerTodos(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(datos=>{
        var tblContenido=document.getElementById("tblContenido");
        var salida="";
        for(elemento of datos){
            salida+=`
                <tr>
                    <td>${elemento.id}</td>
                    <td>${elemento.name}</td>
                    <td>${elemento.email}</td>
                    <td>${elemento.address.city}</td>
                    <td>${elemento.phone}</td>
                    <td>${elemento.company.name}</td>
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
    var url="https://jsonplaceholder.typicode.com/users/"+id;
    fetch(url)
    .then(response=>response.json())
    .then(datos =>{
        document.getElementById("consultaNombre").value=datos.name
        document.getElementById("consultaEmail").value=datos.email
        document.getElementById("consultaCiudad").value=datos.address.city
        document.getElementById("consultaTelefono").value=datos.phone
        document.getElementById("consultaEmpresa").value=datos.company.name
    })
    .catch(error=>console.log(error))
    
}
function modificarUno(){
    var id=document.getElementById("txtConsulta").value;
    if(id==""){
        alert("No ha ingresado ningun id");
        return;
    }
    var url="https://jsonplaceholder.typicode.com/users/"+id;
    fetch(url,{
        method:'PUT',
        body:JSON.stringify({
            name:document.getElementById("consultaNombre").value,
            email:document.getElementById("consultaEmail").value,
            address:{
                city:document.getElementById("consultaCiudad").value,
            },
            phone:document.getElementById("consultaTelefono").value,
            company:{
                name:document.getElementById("consultaEmpresa").value,
            }
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(response=>response.json())
    .then(datos=>{
        alert(`Se ha modificado el archivo ${id}. Nuevo Contenido:\n${JSON.stringify(datos)}`);
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
    var url="https://jsonplaceholder.typicode.com/users/"+id;
    fetch(url,{
        method:'DELETE',
        
    })
    .then(response=>response=>json())
    .then(datos=>{
        alert(`Se ha eliminado el archivo ${id}`);
        document.getElementById("consultaNombre").value="";
        document.getElementById("consultaEmail").value="";
        document.getElementById("consultaCiudad").value="";
        document.getElementById("consultaTelefono").value="";
        document.getElementById("consultaEmpresa").value="";
        obtenerTodos();
    })
    .catch(error=>console.log(error));
}
function agregarUno(){
    var nombre=document.getElementById("inputNombre").value;
    var email=document.getElementById("inputEmail").value;
    var ciudad=document.getElementById("inputCiudad").value;
    var telefono=document.getElementById("inputTelefono").value;
    var empresa=document.getElementById("inputEmpresa").value;

    fetch("https://jsonplaceholder.typicode.com/users",{
        method:'POST',
        body:JSON.stringify({
            name:nombre,
            email:email,
            address:{
                city:ciudad,
            },
            phone:telefono,
            company:{
                name:empresa,
            }
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(response=>response.json())
    .then(datos=>{
        alert(`Se ha aregado un nuevo archivo:\nNombre: ${datos.name}\nEmail:${datos.email}\nCiudad: ${datos.address.city}\nTelefono: ${datos.phone}\nEmpresa: ${datos.company.name}`);
        obtenerTodos();
    })
    .catch(error=>console.log(error));
}