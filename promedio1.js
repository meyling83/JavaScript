var numero1=Number(prompt("entre un numero"));
var numero2=0;
var numero3=0
if (numero1<1 || numero1>10)
{
	alert("El número tiene que estar entre 1 y 10")
}
else
{
	numero2=Number(prompt("Entre otro número"));
	if(numero2<1 || numero2>10)
	{
		alert("El número tiene que estar entre 1 y 10");
	}
	else
	{
		numero3=Number(prompt("Entre otro número"));
		if(numero3<1 || numero3>10)
		{
			alert("El número tiene que estar entre 1 y 10");
		}
		else
		{
			var promedio=(numero1+numero2+numero3)/3;
		    respuesta=promedio>5?true:false;
		    alert(respuesta);
		}
	}
}