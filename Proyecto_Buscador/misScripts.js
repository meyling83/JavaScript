let opcion=document.getElementById("miSelector").value;
document.getElementById("miSelector").addEventListener("change",()=>
    opcion=document.getElementById("miSelector").value
);
document.getElementById("miInput").addEventListener("keydown",validar);
let miInput=document.getElementById("miInput").value;
let miListado=document.getElementById("miListado");
document.getElementById("miBoton").addEventListener("click",buscar);
function buscar(){
    var url="http://localhost:3000/"+opcion;
    fetch(url)
    .then(response=>response.json())
    .then(datos=>{
        for (elemento of datos){
            if(elemento.nombre.startsWith(miInput))
            {
                let parrafo= document.createElement("p");
                parrafo.textContent=elemento.sinopsis;
                let li=document.createElement("li");
                li.textContent=elemento.nombre;
                li.appendChild(parrafo);
                miListado.appendChild(li);
                li.addEventListener("mouseover",()=>parrafo.style.display="block");
                li.addEventListener("mouseout",()=>parrafo.style.display="none");
            }
        }
    })
    .catch(error=>console.log(error));

}
function validar(e){
    let valor=e.target.value;
    
    if(e.keyCode<65 || e.keyCode>90 ){
        e.preventDefault();
    }
}
