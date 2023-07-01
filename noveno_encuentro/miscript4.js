//ejercicio 4
window.addEventListener("mousedown",muestraBoton) 
function muestraBoton(e){
    var boton=e;
    switch(e.button){
        case 0:
            boton="izquierdo";
            break;
        case 1:
            boton="central";
            break;
        case 2:
            boton="derecho";
            break;
        default:
            boton="no reconocido";
            break;
    }
    alert("boton usado " + boton);
}