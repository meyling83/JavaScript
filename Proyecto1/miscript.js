let cuentaAtras=document.getElementById("cuentaAtras");
function comenzarCuentaAtras(){
    setInterval(hora,1000);
}

function hora(){
    //obtengo la fecha actual, y de la fecha actual obtengo las horas, minutos y segundos
    let t=new Date();
    //el padStart es para que si tiene un solo lugar salga un 0 delante y lo de con 2 digitos, tengo que convertirlo antes a string
    let h=String(t.getHours()).padStart(2,"0");
    let m=String(t.getMinutes()).padStart(2,"0");
    let s=String(t.getSeconds()).padStart(2,"0");
    //concatenamos lo anterior
    let textoHora=h+ ":" + m + ":" + s;
    texto.textContent=textoHora;
}