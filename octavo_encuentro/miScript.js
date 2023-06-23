//Ejemplo 1
//1. identificar elementos de la pagina
let parrafo1=document.getElementById("parrafo1")
let boton=document.getElementById("miBoton");
let enlace=document.getElementById("miEnlace");
//2. adicionar el addEventListener(escuchador de eventos), este se queda escuchando, esperando a que el usuario haga alguna accion sobre el elemento
//sintaxis del addEventListener(evento,funcion,true o false, casi siempre false) 
//en este caso utilizo la funcion flecha en lugar de poner el nombre el nombre de la funcion que defino despues 
parrafo1.addEventListener("click",(e)=>alert(e.target.id));
//en este caso pongo el nombre de la funcion y luego defino la funcion
boton.addEventListener("click",mostrarMensaje);
//evitar que el enlace vaya a la pagina de google, cancela el enlace, previene el comportamiento
enlace.addEventListener("click",evitarEnlace);
function mostrarMensaje(e){
    //e.target.id devuelve el id del elemento sobre el que se hizo click
    alert(e.target.id);
}
//preventDefault  previene el comportamiento del elemento, el elemento no funciona, el enlace no va a la pagina, el boton no hace la accion
function evitarEnlace(e){
    e.preventDefault();
}
//Ejemplo 2. eventos de teclado. Solo permite teclear numeros
//keydown, keypress,keyup

document.getElementById("miTxt").addEventListener("keydown",validarNumero);
function validarNumero(e){
    let valor=e.target.value;
    //compruebo codigo ascci de la tecla presionada en el evento keydown. del 48 al 57 son los numeros
    if(e.keyCode<48 || e.keyCode>57){
        e.preventDefault();
    }
}
//ejemplo 3. eventos del mouse. mousedown,mouseover,mouseout
//muestra la lista cuando paso por arriba del boton con el mouse, la oculta cuando sale del boton
let miBoton2=document.getElementById("miBoton2");
let miLista=document.getElementById("miLista");
miBoton2.addEventListener("mouseover",visualizarLista);
//otra formo con funcion flecha y sin declarar antes la variable
document.getElementById("miBoton2").addEventListener("mouseout",()=>miLista.style.display="none");
function visualizarLista(){
    miLista.style.display="block";
}

//ejercicio 1 contador
let resultado=document.getElementById("resultado");
let btnAumentar=document.getElementById("btnAumentar");

let contador=0;
btnAumentar.addEventListener("click",aumentar);
document.getElementById("btnDisminuir").addEventListener("click",()=>{
    contador--;
    resultado.textContent=contador;
});
function aumentar(){
    contador++;
    resultado.textContent=contador;
}
//ejercicio 2 carga de  pagina completada
//let titulo=document.getElementById("saludo");
//en este caso el escuchador se lo pongo al objeto window
//window.addEventListener("load",()=>
    //titulo.textContent="Pagina cargada okkkkkkkkkk"
//);

//ejercicio 3 cambiar color de pagina
document.getElementById("btnVerde").addEventListener("click",mostrarColor);
document.getElementById("btnGris").addEventListener("click",mostrarColor);
function mostrarColor(e){
    if(e.target.id=="btnVerde"){
        document.body.style.backgroundColor = 'green'
    }
    if(e.target.id=="btnGris"){
        document.body.style.backgroundColor = 'silver'
    }

}

//ejercicio 4
const bloque=document.querySelector(".miDiv");
bloque.addEventListener("mouseover",cambiaColor);
bloque.addEventListener("mouseout",cambiaColor);
function cambiaColor(e){
    switch (e.type){
        case "mouseover":
            bloque.style.background="blue";
            break;
        case "mouseout":
            bloque.style.background="yellow";
            break;
        default:
            console.log("error");
        }
}

//Ejercicio 6
document.getElementById("texto").addEventListener("select",()=>alert("texto seleccionado"));
//Ejercicio 7 doble click en un elemento
document.getElementById("miParrafo").addEventListener("dblclick",()=>alert("doble click"));



