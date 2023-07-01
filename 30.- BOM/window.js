/*
	📌El Browser Object Model nos permite poder acceder a propiedades y metodos del navegador web.
	Ejemplos de cosas que nos permite hacer:
	- Acceder a la ventana para conocer su tamaño
	- Trabajar con la barra de direcciones
	- Mostrar alertas
	- etc
*/

/*
	📌 Window Object
	Representa la ventana del navegador.
	Las variables y funciones globales son parte del objeto de window
*/

// Accediendo al metodo alerta de Window
 //window.alert("Hola");


// Podemos conocer todas las propiedades y metodos
//console.log(window);

// Esto no incluye las barras de herramientas, marcadores, barras de scroll
// console.log(`La ventana de tu navegador mide ${window.innerWidth}px de ancho.`);
// console.log(`La ventana de tu navegador mide ${window.innerHeight}px de alto.`);

/*
	Trabajar con ventanas
	Con el BOM podemos:
	- Abrir y cerrar ventanas.
	- Mover ventanas.
	- Cambiar el tamaño de ventanas.
*/

/* 
	window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/
//abrir una nueva ventana del navegador
let ventana;
document.getElementById("btnAbrir").addEventListener("click",()=>{
	ventana=window.open("https://google.com","",width=50,heigth=50);
});

//cerrar ventana anterior
document.getElementById("btnCerrar").addEventListener("click",()=>{
	ventana.close();
});



/*
	Screen Object
	Representa la pantalla del usuario.
*/

// Alto y ancho de pantalla
console.log("ancho de pantalla " , window.screen.availWidth);
console.log("alto de pantalla " , window.screen.availHeight);
console.log("ancho de pantalla " , window.screen.width);
console.log("alto de pantalla " , window.screen.height);

// Alto y ancho de pantalla sin contar la barra de windows

