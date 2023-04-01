texto=prompt("Entre una cadena");

var mayuscula=false;
for(let i=0;i<texto.length;i++)
{
	if(texto[i]==texto[i].toUpperCase())
	{
		mayuscula=true;
		break;
	}
	
}
document.write(!mayuscula);