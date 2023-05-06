function saludar(){
    //obtener contenido del txt
    let textoNombre=document.getElementById("txtNombre").value;
    document.getElementById("txtSaludo").textContent="Hola " + textoNombre;
    //hace lo mismo que el getElementById
    //document.querySelector("#txtSaludo").textContent="Hola " + textoNombre;
}