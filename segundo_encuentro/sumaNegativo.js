var numero=Number(prompt("Entre un  numero"));
var suma=0;
while(numero>0)
{
	suma+=numero;
	numero=Number(prompt("Entre un  numero"));
}
document.write("La suma es " + suma);
