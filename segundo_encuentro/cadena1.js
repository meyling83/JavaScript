//var cadena="Feliz"
//var cadena1="cumpleaños"
//concatenar
//document.write(cadena.concat(cadena1));
//docuemnt.write(cadena + cadena1);

//subcadenas
//var cadena2="abcdefghijklmabcdefghijklm";
//document.write(cadena2.substring(20));
//document.write(cadena2.substring(3,6));

//indices

//document.write(cadena2.indexOf("c"));
//document.write(cadena2.lastIndexOf("a"));
//document.write("$ se encuentra en la posicion " + cadena2.indexOf("$"));
//document.write("La ultima c se encuentra en la posicion " + cadena2.lastIndexOf("c"));
//document.write("la ultima a se encuentra en la posicion " + cadena2.lastIndexOf("a"));
//document.write("el ultimo $ se encuentra en la posicion " + cadena2.lastIndexOf("$"));
//document.write("def se encuentra en la posicion " + cadena2.indexOf("def"));

//document.write("el ultimo def se encuentra en la posicion " + cadena2.lastIndexOf("def"));
//document.write("el ultimo hola se encuentra en la posicion " + cadena2.lastIndexOf("hola"));

//split
var cadena5=prompt("Introduzca una cadena");
//document.write("La longitud es " + cadena5.length);
//var array=cadena5.split(" ");
//var array1=cadena5.split("");
//document.write(array1);

//recorriendo la cadena
//var cantidad=0;
//for (let i=0;i<cadena5.length;i++)
//{
	//let c=cadena5[i].toLowerCase();
	//if(c=="a" || c=="e" || c=="i" || c=="o" || c=="u")
	//{
		//cantidad++;
	//}

//}
//document.write(cantidad);

//otra via uso del switch

var cantidadA=0;
var cantidadE=0;
var cantidadI=0;
var cantidadO=0;
var cantidadU=0;
for(let i=0;i<cadena5.length;i++)
{
	//otra forma de acceder al caracter en la posicion i
	//let c=cadena5.charAt(i).toLowerCase();
	let c=cadena5[i].toLowerCase();
	switch (c)
	{
	case "a":
		cantidadA++;
		break;
		
	case "e":
		cantidadE++;
		break;
		
	case "i":
		cantidadI++;
		break;

	case "o":
		cantidadO++;
		break;
		
	case "u":
		cantidadU++;
			break;


	}

}
document.write(cantidadA,cantidadE,cantidadI,cantidadO,cantidadU);
