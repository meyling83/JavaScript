let empleados=[];
function Empleado(nombre,apellido,cargo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.cargo=cargo;
}
function limpiarCampos(){
    document.getElementById("txtNombre").value="";
    document.getElementById("txtApellido").value="";
    document.getElementById("txtCargo").value="";
}
function agregarEmpleado(){
    let nombre=document.getElementById("txtNombre").value;
    let apellido=document.getElementById("txtApellido").value;
    let cargo=document.getElementById("txtCargo").value;
    let empleado=new Empleado(nombre,apellido,cargo);
    empleados.push(empleado);
    alert("Empleado añadido");
    limpiarCampos();
    
}
function mostrarEmpleado(){
    //console.table(empleados);
    for(empleado of empleados){
        document.getElementById("parrafo").innerHTML+=empleado.nombre + " " 
                                                    + empleado.apellido + " " 
                                                    + empleado.cargo + "<br>";
    }
}