/*
	📌 	Cuando agregamos un evento a un elemento ese evento se propaga a los elementos hijo.
*/
/*
	📌 Bubbling (false, por defecto)
	En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.
	
	📌 Capturing (true)
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/

// document.getElementById('form').addEventListener('click', (e) => {
// 	console.log('Hiciste click en el form');
// },
// false // Solo es necesario ponerlo en el elemento padre.
// );
// document.getElementById('div1').addEventListener('click', (e) => {
// 	console.log('Hiciste click en el div');
	
// });

/*
	📌 Capturing
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/
document.getElementById('form').addEventListener('click', (e) => {
	console.log('Hiciste click en el form');
},
true // Solo es necesario ponerlo en el elemento padre.
);
document.getElementById('div1').addEventListener('click', (e) => {
	console.log('Hiciste click en el div');
	
});
