document.getElementById("nombre").addEventListener("focus",cambiarColor);
document.getElementById("nombre").addEventListener("blur",cambiarColor);
document.getElementById("apellido").addEventListener("focus",cambiarColor);
document.getElementById("apellido").addEventListener("blur",cambiarColor);

function cambiarColor(e){
    switch(e.type){
        case "focus":
            if(e.target.id=="nombre")
                document.getElementById("nombre").style.backgroundColor="red";
            if(e.target.id=="apellido")
                document.getElementById("apellido").style.backgroundColor="red";
            break;
          
        case "blur":
            if(e.target.id=="nombre")
                document.getElementById("nombre").style.backgroundColor="black";
            if(e.target.id=="apellido")
                document.getElementById("apellido").style.backgroundColor="black";

            break;

        default:
            break;
    }
}