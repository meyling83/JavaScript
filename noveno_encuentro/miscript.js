//ejercicio 1

document.getElementById("nombre").addEventListener("focus",cambiarColor);
document.getElementById("nombre").addEventListener("blur",cambiarColor);
document.getElementById("apellido").addEventListener("focus",cambiarColor);
document.getElementById("apellido").addEventListener("blur",cambiarColor);


function cambiarColor(e){
    switch(e.type){
        case "focus":
            if(e.target.id=="nombre")
                document.getElementById("nombre").style.color="red";
            if(e.target.id=="apellido")
                document.getElementById("apellido").style.color="red";
            break;
          
        case "blur":
            if(e.target.id=="nombre")
                document.getElementById("nombre").style.color="black";
            if(e.target.id=="apellido")
                document.getElementById("apellido").style.color="black";

            break;

        default:
            break;
    }
} 
//ejercicio 3 validar no entren valores numericos
document.getElementById("nombre").addEventListener("keydown",validar);
function validar(e){
    tecla=e.key;
    if(!isNaN(tecla)){
        e.preventDefault();
    }
}
