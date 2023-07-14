let txtnumero1=document.getElementById("campo1");
let txtnumero2=document.getElementById("campo2");
let txtresultado=document.getElementById("resultado");
//eventos
document.getElementById("btnsuma").addEventListener("click",(e)=>{
        txtresultado.value="";
        if(validar(e,""))
        {
            let resultado=sumar(txtnumero1.value,txtnumero2.value);
            mostrarResultado(resultado);
        }
});
document.getElementById("btnresta").addEventListener("click",(e)=>{
    txtresultado.value="";
    if(validar(e,""))
    {
        let resultado=restar(txtnumero1.value,txtnumero2.value);
        mostrarResultado(resultado);
    }
});
document.getElementById("btnmultiplicacion").addEventListener("click",(e)=>{
    txtresultado.value="";
    if(validar(e,""))
    {
        let resultado=multiplicar(txtnumero1.value,txtnumero2.value);
        mostrarResultado(resultado);
    }
});
document.getElementById("btndivision").addEventListener("click",(e)=>{
    txtresultado.value="";
    if(validar(e,""))
    {
        let resultado=dividir(txtnumero1.value,txtnumero2.value);
        mostrarResultado(resultado);
    }
});
document.getElementById("btnraiz").addEventListener("click",(e)=>{
    txtresultado.value="";
    if(validar(e,"raiz"))
    {
        
        let resultado=raiz(txtnumero1.value);
        mostrarResultado(resultado);
    }
});
document.getElementById("btnpotencia").addEventListener("click",(e)=>{
    txtresultado.value="";
    if(validar(e,""))
    {
        let resultado=potencia(txtnumero1.value,txtnumero2.value);
        mostrarResultado(resultado);
    }        
});
document.getElementById("btnredondeo").addEventListener("click",(e)=>{
    
    if(validar(e,"resultado"))
    {
        let resultado=redondear(txtresultado.value);
        mostrarResultado(resultado);
    }
});
document.getElementById("btnsuelo").addEventListener("click",(e)=>{
    if(validar(e,"resultado"))
    {
        let resultado=floor(txtresultado.value);
        mostrarResultado(resultado);
    }
});
document.getElementById("btntecho").addEventListener("click",(e)=>{
    if(validar(e,"resultado"))
    {
        let resultado=ceil(txtresultado.value);
        mostrarResultado(resultado);
    }
});
//funcion suma
function sumar(numero1,numero2){
    return parseFloat(numero1)+parseFloat(numero2);
    
}
//funcion resta
function restar(numero1,numero2){
    return parseFloat(numero1)-parseFloat(numero2);
}
//funcion multiplicar
function multiplicar(numero1,numero2){
    return parseFloat(numero1)*parseFloat(numero2);
}
//funcion dividir
function dividir(numero1,numero2){
    if(numero2=="0"){
        alert("Error de división por 0");
        return "";
    }
    else{
        return parseFloat(numero1)/parseFloat(numero2);
    }
}
//funcion raiz cuadrada
function raiz(numero){
    if (numero<0){
        alert("El número tiene que ser mayor o igual a 0");
        return "";
    }        
    else
        return Math.sqrt(numero);
    
}
//funcion potencia
function potencia(numero1,numero2){
    return Math.pow(numero1,numero2);
}
//funcion redondear
function redondear(numero){
    return Number(Math.round(numero+'e'+2)+'e-'+2);
}
//funcion floor
function floor(numero){
    return Math.floor(numero);
}
//funcion ceil
function ceil(numero){
    return Math.ceil(numero);
}
//funcion mostrar resultado
function mostrarResultado(resultado){
    txtresultado.value=resultado;
}
/////////////////////////////////////////////////////////
//SELECCION DEL FORMULARIO

//Conociendo el id
//var formulario = document.getElementById("miFormulario");

//formulario.addEventListener("submit", validar)

function validaCampo1() {
    var elemento = txtnumero1;
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo no puede ser vacío");
        error(elemento);
        return false;
    }
    if (isNaN(elemento.value)) {
        alert("El campo tiene que ser numérico");
        error(elemento);
        return false;
    }
    return true;
}
function validaCampo2() {
    var elemento = txtnumero2;
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo no puede ser vacío");
        error(elemento);
        return false;
    }
    if (isNaN(elemento.value)) {
        alert("El campo tiene que ser numérico");
        error(elemento);
        return false;
    }
    return true;
}
function validaresultado() {
    var elemento = txtresultado;
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("No hay resultado para la operación");
        error(elemento);
        return false;
    }
    return true;
}

function validar(e,tipo) {
    
    if (tipo=="" && validaCampo1() && validaCampo2()) 
    {
        txtresultado.value="";
        return true;
    } 
    else if(tipo=="raiz" && validaCampo1())
    {
        txtresultado.value="";
        return true;
    }
    else if(tipo=="resultado" && validaresultado())
    {
        return true;
    }
    else {
        txtresultado.value="";
        e.preventDefault();
        return false;
    }
}
function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}
function limpiarError(elemento) {
    elemento.className = "";
}
