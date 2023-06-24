document.getElementById("texto1").addEventListener("blur",()=>{
    document.getElementById("texto2").value=document.getElementById("texto1").value
});
document.getElementById("borrar").addEventListener("click",()=>{
    document.getElementById("texto1").value="";
    document.getElementById("texto2").value="";

});