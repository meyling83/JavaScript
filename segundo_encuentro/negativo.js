var numero=Number(prompt("Entre un numero"));
i=0;
while(numero>=0)
{
	i++;
	numero=Number(prompt("Entre un numero"));

}
document.write("Se introdujeron " + i + " numeros");