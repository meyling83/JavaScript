let txtnumero1=document.getElementById("campo1");
let txtnumero2=document.getElementById("campo2");
let txtresultado=document.getElementById("resultado");
//eventos
document.getElementById("btnsuma").addEventListener("click",()=>{
        let resultado=sumar(txtnumero1.value,txtnumero2.value);
        mostrarResultado(resultado);
});
document.getElementById("btnresta").addEventListener("click",()=>{
    let resultado=restar(txtnumero1.value,txtnumero2.value);
    mostrarResultado(resultado);
});
document.getElementById("btnmultiplicacion").addEventListener("click",()=>{
    let resultado=multiplicar(txtnumero1.value,txtnumero2.value);
    mostrarResultado(resultado);
});
document.getElementById("btndivision").addEventListener("click",()=>{
    let resultado=dividir(txtnumero1.value,txtnumero2.value);
    mostrarResultado(resultado);
});
document.getElementById("btnraiz").addEventListener("click",()=>{
    let resultado=raiz(txtnumero1.value);
    mostrarResultado(resultado);
});
document.getElementById("btnpotencia").addEventListener("click",()=>{
    let resultado=potencia(txtnumero1.value,txtnumero2.value);
    mostrarResultado(resultado);
});
document.getElementById("btnredondeo").addEventListener("click",()=>{
    let resultado=redondear(txtresultado.value);
    mostrarResultado(resultado);
});
document.getElementById("btnsuelo").addEventListener("click",()=>{
    let resultado=floor(txtresultado.value);
    mostrarResultado(resultado);
});
document.getElementById("btntecho").addEventListener("click",()=>{
    let resultado=ceil(txtresultado.value);
    mostrarResultado(resultado);
});
//funcion suma
function sumar(numero1,numero2){
    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero1=="" || numero2=="")
    {
        alert("Los números no pueden estar vacíos");
        return "";
    }
    else{
         return parseFloat(numero1)+parseFloat(numero2);
    }
}
//funcion resta
function restar(numero1,numero2){
    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero1=="" || numero2=="")
    {
        alert("Los números no pueden estar vacíos");
        return "";
    }
    else{
         return parseFloat(numero1)-parseFloat(numero2);
    }
}
//funcion multiplicar
function multiplicar(numero1,numero2){
    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero1=="" || numero2=="")
    {
        alert("Los números no pueden estar vacíos");
        return "";
    }
    else{
         return parseFloat(numero1)*parseFloat(numero2);
    }
}
//funcion dividir
function dividir(numero1,numero2){
    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero1=="" || numero2=="")
    {
        alert("Los números no pueden estar vacíos");
        return "";
    }
    else if(numero2=="0"){
        alert("Error de división por 0");
        return "";
    }
    else{
         return parseFloat(numero1)/parseFloat(numero2);
    }
}
//funcion raiz cuadrada
function raiz(numero){
    if(isNaN(numero))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero=="")
    {
        alert("Los números no pueden estar vacíos");
        return "";
    }
    else if (numero<0){
        alert("El número tiene que ser mayor o igual a 0");
        return "";
    }        
    else
        return Math.sqrt(numero);
    
}
//funcion potencia
function potencia(numero1,numero2){
    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero1=="" || numero2=="")
    {
        alert("Los números no pueden estar vacíos");
        return "";
    }
    else{
         return Math.pow(numero1,numero2);
    }
}
//funcion redondear
function redondear(numero){
    if(isNaN(numero))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero=="")
    {
        alert("No hay resultado para redondar");
        return "";
    }
    else
        return Number(Math.round(numero+'e'+2)+'e-'+2);
}
//funcion floor
function floor(numero){
    if(isNaN(numero))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero=="")
    {
        alert("No hay resultado para la operación");
        return "";
    }
    else
        return Math.floor(numero);
}
//funcion ceil
function ceil(numero){
    if(isNaN(numero))
    {
        alert("Introduzca sólo números");
        return "";
    }
    else if(numero=="")
    {
        alert("No hay resultado para la operación");
        return "";
    }
    else
        return Math.ceil(numero);
}
//funcion mostrar resultado
function mostrarResultado(resultado){
    txtresultado.value=resultado;
}
