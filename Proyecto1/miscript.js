let cuentaAtras=document.getElementById("cuentaAtras");
var contador=30;
function comenzarCuentaAtras(){
    
    setInterval(segundo,1000);
    //si no he dado clic en finalizado********como lo hago
    
}

function segundo(){
    contador--;
   let texto=document.getElementById("cuentaAtras");
   texto.textContent=contador;
   if(contador==0)
        setTimeout(tiempoFinalizado,30000);
}
function tiempoFinalizado(){
    clearInterval();
    //cuentaAtras=0;
    let texto=document.getElementById("contador");
    texto.textContent=cuentaAtras;
    let sonido=document.getElementById("audioFinal");
    sonido.play();
    alert("Game Over: Se acabó el tiempo. Vuelve a intentarlo");
}
function finalizado(){
    clearTimeout();
    clearInterval();
    let fecha=new Date().toDateString();
    let respuesta1=getElementById(respuesta1).value;
    let respuesta2=getElementById(respuesta2).value;
    let respuesta3=getElementById(respuesta3).value;
    let respuesta4=getElementById(respuesta4).value;
    let respuesta5=getElementById(respuesta5).value;
    alert (fecha + respuesta1 + respuesta2 +respuesta3 +respuesta4+respuesta5);
}
function volverAJugar(){
    location.reload();
}