/*
	Ventanas de Alerta
	El navegador web puede mostrar 3 ventanas de alerta mediante javascript
*/

/*
	Alerta
	Para informarle al usuario de algo.
*/


/*
	Ventana de confirmación
	Una ventana donde el usuario puede aceptar o cancelar.
	Devuelve verdadero o falso dependiendo de la respuesta del usuario.
*/

const ingresar=()=>{
	const accesopermitido=confirm("Eres mayor de edad");
	if(accesopermitido){
		alert("Bienvenido");
	}
	else{
		alert("No puedes acceder");
	}
};
document.getElementById("btnAceptar").addEventListener("click",ingresar);




/*
	Ventana con input
	Una ventana donde el usuario puede introducir un valor
	Retorna una cadena de texto con la respuesta del usuario.
*/
const saludo=()=>{
	const nombre=prompt("Escribe tu nombre");
	alert(`Bienvenido ${nombre}`);
}
document.getElementById("btnSaludo").addEventListener("click",saludo);

