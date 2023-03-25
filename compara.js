var numero1=Number(prompt("Entre un número"));
var numero2=Number(prompt("Entre otro número"));
if(numero1==numero2)
{
	alert(numero1 + "=" + numero2);
	document.write(numero1 + "=" + numero2);
}
else if(numero1>numero2)
{
	alert(numero1 + ">" + numero2);
	document.write(numero1 + ">" + numero2);
}
else
{
	alert(numero1 + "<" + numero2);
	document.write(numero1 + "<" + numero2);
}
