var numeroAdivinar= Math.ceil(Math.random()*10)+1;

var numero=Number(prompt("Entre un numero"));
var veces=1;

while (numero!=numeroAdivinar)
{
	if(numero<numeroAdivinar)
	{
		numero=Number(prompt("Entre un numero mayor"));
	}
	else
	{
		numero=Number(prompt("Entre un numero menor"));
	}
	veces++;
}
document.write("Has adivinado en " + veces + " veces");