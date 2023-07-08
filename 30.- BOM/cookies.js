/*
	📌 Cookies
	Las cookies son pequeños archivos de texto que se guardan en la computadora del usuario.
	Estos archivos o cookies se utilizan para guardar información y que no se pierda al refrescar la página.
	
	Usos:
	- Guardar informacion del usuario que no queremos guardar en la base de datos.
	- Guardar preferencias o configuración del usuario.

	Las cookies se escriben como las variables:
	identificador=valor


	Con Javascript podemos, crear, editar y borrar cookies.
*/

/*******************************************************/
/* CREAR UNA COOKIE
/*******************************************************/
/* const crearCookie=()=>{
	document.cookie='nombre=Ane';
}
document.getElementById("btnCrear").addEventListener("click",crearCookie);
 */

/*******************************************************/
/* INICIAR SESIÓN Y GUADAR VALOR USUARIO EN UNA COOKIE
/*******************************************************/
document.getElementById("btnIniciar").addEventListener("click",()=>{
	const usuario=prompt("usuario:");
	document.cookie=`usuario=${usuario}`;
	alert("sesion iniciada");
});

// /*
// 	Leer cookies
// */
/*   const cookies = document.cookie;
  console.log(cookies); */

/*******************************************************/
/* OBTENER EL USUARIO DE LA COOKIE
/*******************************************************/

// Definimos la variable donde guardaremos el usuario

let usuario;
// Transformamos las cookies en un array.
//document.cookie devuelve un string con el formato cookie1=valor; cookie2=valor; cookie3=valor
//para recorrerlas hago un split por el ; y obtengo un arreglo en cada elemento del arreglo tengo una cookie con su valor  en el formato cookie=valor
//pero a partir de la segunda cookie delante del nombre de la cookie tengo un espacio
const cookies=document.cookie.split(';');

//Recorremos las cookies con el foreach en el arreglo de cookies obtenido con el split

cookies.forEach((cookie)=>{
	//por cada elemento obtenemos su propiedad
	//hago un split por el = para separar el nombre de la cookie de su valor
	//en la posicion 0 del arreglo tengo el nombre de la cookie, ojo: con un espacio delante, `por eso hago el trim, para quityar el espacio
	const propiedad=cookie.split('=')[0].trim();
	
	if(propiedad=='usuario'){
		//tomamos el valor de la cookie y lo guardo, en la posicion 1 del arreglo tengo el valor de la cookie
		//solo tomo el valor de la cookie que me interesa, por eso pregunto en el if si la cookie es usuario 
		usuario=cookie.split('=')[1];
	}
})

// Comprobamos si hay un usuario;
//si la variable usuario tiene un valor es porque habia una cookie usuario, y le damos la bienvenida, 
//sino le indicamos que tiene que iniciar sesion
if(usuario){
	console.log('hola '+usuario);
}
else{
	console.log('por favor inicie sesion');
}

/*
	📌 Modificar cookies
	Para modificar una cookie basta con sobreescribir la anterior.
	Por ejemplo si iniciamos sesión con otro nombre.
*/
document.getElementById("btnModificar").addEventListener("click",()=>{
	const usuario=prompt("usuario:");
	document.cookie=`usuario=${usuario}`;
	alert("sesion iniciada");
});

/*
	📌 Borrar cookies
	Para borrar una cookie tenemos que poner la fecha de expiración en el pasado.
	El navegador detectara que la cookie ya expiro y al reiniciar el navegador se borrara.
*/
const cerrarSesion=()=>{
	document.cookie='usuario=;max-age=0'
	console.log("hasta luego");
};
document.getElementById("btnCerrarSesion").addEventListener("click",cerrarSesion);