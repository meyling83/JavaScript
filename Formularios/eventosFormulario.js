/*
	 Eventos para formularios
	Al trabajar con formularios podemos utilizar eventos para detectar 
	ciertas acciones y poder reaccionar ante ello.

	Por ejemplo podemos agregar event listeners para reaccionar:
	- Cuando el usuario intente enviar el formulario
	- Cuando el usuario cambie un valor en un input
	- Cuando el usuario elimine el foco de atención de un input,
	- Más
*/

let formulario=document.forms[0];
//Evento submit
//nos permite detectar cuando el usuario intenta enviar el formulario
formulario.addEventListener("submit",(e)=>{
	e.preventDefault();
	console.log("enviando datos");
});

//evento change cuando hay cambio en cualquier input, textarea, select y damos click fuera

formulario.pais.addEventListener("change",(e)=>{
	console.log("el pais ha cambiado");
	//obteer nuevo valor
	console.log("el nuevo valor es " + e.target.value);
});

//
formulario["cantidad-5"].addEventListener("change",()=>{
	console.log("la cantidad ha cambiado");
});
formulario["cantidad-10"].addEventListener("change",()=>{
	console.log("la cantidad ha cambiado");
});
formulario.fecha.addEventListener("change",()=>{
	console.log("la fecha ha cambiado");
});

//evento focus cuado un control recibe el foco
formulario.correo.addEventListener("focus",()=>{
	console.log("correo tiene foco de atencion");
});
//evento blur, cuando lo pierde
formulario.correo.addEventListener("blur",()=>{
	console.log("correo perdio foco de atencion");
});

//keydown cuando una tecla es presionada sobre un input
formulario.correo.addEventListener("keydown",(e)=>{
	console.log("la tecla pulsada es " + e.key);
	console.log("codigo ascii " + e.keyCode);
});

//keyup
formulario.correo.addEventListener("keyup",(e)=>{
	console.log("tecla levantada");
	
});
