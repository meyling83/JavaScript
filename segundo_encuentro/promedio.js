var numero=Number(prompt("Entre el numero"));
var suma=0;
var cantidad=0;
var maximo=0;
while(numero>=0)
{
	suma+=numero;
	cantidad++;
	if(numero>maximo)
	{
		maximo=numero;
	}
	numero=Number(prompt("Entre el numero"));
}
var media=suma/cantidad;
document.write("La media es " + media + "<br>" + "El maximo es " + maximo.toFixed(2)); 
