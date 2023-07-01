texto1=document.getElementById("texto1");
texto2=document.getElementById("texto2");
texto1.addEventListener("change",()=>{
    texto2.value=texto1.value
});
texto2.addEventListener("change",()=>{
    texto1.value=texto2.value
});
document.getElementById("borrar").addEventListener("click",()=>{
    texto1.value="";
    texto2.value="";

});