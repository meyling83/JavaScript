var nombre=prompt("Entre el nombre");
var numero=Number(prompt("Entre numero de repeticiones"));
var text="";
for (let i=1;i<=numero;i++)
{
	//document.write(nombre + "<br>");
	text+="<br>Tu nombre es "+ nombre;
}
document.getElementById("demo").innerHtml=text;