/*
Propagación de eventos
	Nota importante:
	Cuando agregamos un evento a un elemento, todos los elementos que esten dentro del que recibio el evento
	tambien recibiran el mismo evento.

	Es decir que si le aplicamos un evento a un contenedor padre, todos los hijos tendran tambien el evento.
*/
let contenedor=document.getElementById("form");
contenedor.addEventListener("click",(e)=>{console.log("click en form")});
let div1=document.getElementById("div1");
div1.addEventListener("click",(e)=>{
	//para la propagacion del evento. Si no pongo esto cuando hago click en el div se ejecuta el evento del div, que es el hijo y del form, que es el padre. Al poner esto solo se ejecuta el evento del div, el hijo
	e.stopPropagation();
	console.log("click en div1")
	
});

