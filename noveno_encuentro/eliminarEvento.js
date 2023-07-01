boton=document.getElementById("boton1");
saludo=(e)=>alert("Hola");
estilo=(e)=>boton.classList.toggle("red");

boton.addEventListener("click",saludo);
boton.addEventListener("click",estilo);//añado el estilo
//eliminar el evento
boton.removeEventListener("click",saludo);

