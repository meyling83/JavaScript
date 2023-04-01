//var cadena="Feliz"
//var cadena1="cumpleaños"
//document.write(cadena.concat(cadena1));

//var cadena2="abcdefghijklmabcdefghijklm";
//document.write(cadena2.substring(20));
//document.write(cadena2.substring(3,6));

//document.write(cadena2.indexOf("c"));
//document.write(cadena2.lastIndexOf("a"));
//document.write("$ se encuentra en la posicion " + cadena2.indexOf("$"));
//document.write("La ultima c se encuentra en la posicion " + cadena2.lastIndexOf("c"));
//document.write("la ultima a se encuentra en la posicion " + cadena2.lastIndexOf("a"));
//document.write("el ultimo $ se encuentra en la posicion " + cadena2.lastIndexOf("$"));
//document.write("def se encuentra en la posicion " + cadena2.indexOf("def"));

//document.write("el ultimo def se encuentra en la posicion " + cadena2.lastIndexOf("def"));
//document.write("el ultimo hola se encuentra en la posicion " + cadena2.lastIndexOf("hola"));

var cadena5="hola a todos";
//document.write("La longitud es " + cadena5.length);
//var array=cadena5.split(" ");
//var array1=cadena5.split("");
//document.write(array1);
var cantidad=0;
for (let i=0;i<cadena5.length;i++)
{
	let c=cadena5[i];
	if(c=="a" || c=="e" || c=="i" || c=="o" || c=="u")
	{
		cantidad++;
	}

}
document.write(cantidad);