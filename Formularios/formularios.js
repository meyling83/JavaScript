/*
	📌 Formularios

	Tenemos dos formas de acceder a los formularios.
	- Mediante el objeto forms
	- Mediante métodos del DOM -->getElementById
*/

/*
	📌 Mediante el objeto forms
*/
/*
	El objeto forms contiene los formularios del documento.
	Podemos acceder a cada uno mediante su id
	Tambien podemos acceder a los inputs mediante su id o name
	console.log(document.forms['formulario-donacion']['correo']);

 *****************************************************
 * ACCESO AL FORMULARIO
 ****************************************************/

 //accedo al formulario a traves del arreglo de formularios, puede ser por el id, o indexando 0,1...
 const form1=document.forms["formulario-donacion"];
 const form2=document.forms[0];

 //acceso elementos del formulario
 document.getElementById("btnEnviar").addEventListener("click",(e)=>{
		//prevenimos el comportamiento del boton, para que no envie los datos y limpie los elementos hasta que valide
		e.preventDefault();

		//input(correo)
		console.log(document.forms["formulario-donacion"]["correo"].value);

		//select
		console.log(document.forms["formulario-donacion"]["pais"].value);

		//radio button, para coger el valor del que seleccionaron pongo el nombre del grupo, no del id
		console.log(document.forms["formulario-donacion"]["donacion"].value);

		//fecha
		//utilizo la variable form1, en lugar document.forms["formulario-donacion"]
		console.log(form1["fecha"].value);
		//ota forma, obtengo lo mismo
		console.log(form1.fecha.value);

		//checkbox
		console.log(form1["terminos-y-condiciones"].checked);
 });