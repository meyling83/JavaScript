//variables
let selector=document.getElementById("miSelector");
let input=document.getElementById("miInput");
let boton=document.getElementById("miBoton");
let listar=document.getElementById("miListado");

let archivo='peliculas.json';

//escuchadores de eventos
selector.addEventListener("change",cambiarArchivo);
input.addEventListener("keydown",verificarInput);
boton.addEventListener("click",buscar);

function cambiarArchivo(){
    archivo=selector.value;
}

function verificarInput(e){
    let valor=e.target.value;
    
    if((e.keyCode<65 || e.keyCode>90) && e.keyCode!=32 && e.keyCode!=8 ){
        e.preventDefault();
    }
}

function buscar(){
    listar.innerHTML="";
    fetch(archivo)
    .then(response=>response.json())
    .then(datos=>{
        salida=datos.data;
        for (let item of salida){
            if(item.nombre.startsWith(input.value.toUpperCase()))
            { 
                //creo un parrafo con el nombre de la pelicula
                //añado la sinopsis, oculto
                let p= document.createElement("p");
                p.id=item.nombre;
                p.innerHTML=item.sinopsis;
                p.style.display="none";

                //añado el elemento lista y sus eventos
                let li=document.createElement("li");
                li.innerHTML=item.nombre;
                
                //eventos de cada elemento de la lista
                li.addEventListener("mouseover",function(){
                    let p=document.getElementById(item.nombre);
                    p.style.display="block"
                });
                li.addEventListener("mouseout",function(){
                    let p=document.getElementById(item.nombre);
                    p.style.display="none"
                });

                li.appendChild(p);
                listar.appendChild(li);
            }
        }
    })
    .catch(error=>console.log(error));

}
