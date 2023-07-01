/*
	window.location
	Nos permite obtener la url de la barra de direcciones y cargar nuevos documentos.
	Recordar que podemos acceder a location directamente.
*/



// href - Retorna la URL de la página actual
console.log(window.location.href);

// hostname - Retorna el host de la página actual
// Abriendo el archivo local nos retorna undefined pero podemos probar desde la consola en otra pagina.
console.log(window.location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(window.location.pathname);

// procotol - Retorna el protocolo utilizado
console.log(window.location.protocol);

// assign - Nos permite cargar un nuevo documento
document.getElementById("btnCargar").addEventListener("click",()=>{
	location.assign("https://google.com");
});
	
document.getElementById("btnAdelante").addEventListener("click",()=>{
	history.forward();
});

/*
	window.history
	Contiene el historial de la pestaña de nuestro navegador.
	Nos permite regresar o ir adelante.
*/


