let cuentaAtras=document.getElementById("cuentaAtras");
var contador=30;
var  myTimeout =0;
var myInterval =0;
function comenzarCuentaAtras(){
    myInterval=setInterval(segundo,1000);
    
}

function segundo(){
   contador--;
   let texto=document.getElementById("cuentaAtras");
   texto.textContent=contador;
   if(contador<0)
        myTimeout =setTimeout(tiempoFinalizado,1000);
}
function tiempoFinalizado(){
    clearInterval(myInterval);
    let texto=document.getElementById("cuentaAtras");
    texto.textContent=0;
    let sonido=document.getElementById("audioFinal");
    sonido.play();
    alert("Game Over: Se acabó el tiempo. Vuelve a intentarlo");
}
function finalizado(){
    clearTimeout(myTimeout);
    clearInterval(myInterval);
    let fecha=new Date().toDateString();
    let respuesta1=document.getElementById("respuesta1").value;
    let respuesta2=document.getElementById("respuesta2").value;
    let respuesta3=document.getElementById("respuesta3").value;
    let respuesta4=document.getElementById("respuesta4").value;
    let respuesta5=document.getElementById("respuesta5").value;
    alert (fecha + respuesta1 + respuesta2 +respuesta3 +respuesta4+respuesta5);
}
function volverAJugar(){
    location.reload();
}