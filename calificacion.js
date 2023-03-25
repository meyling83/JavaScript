var calificacion=Number(prompt("Entre una calificación"));
if(calificacion>=0 && calificacion<5)
{
	alert("Insuficiente");
}
else if(calificacion==5)
{
	alert("Suficiente");
}
else if(calificacion>5 && calificacion<=8)
{
	alert("Bien");
}
else if(calificacion>8 && calificacion<=10)
{
	alert("Excelente");
}
else
{
	alert("Calificación no válida");
}