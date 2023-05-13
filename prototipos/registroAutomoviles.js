function Automovil(marca,modelo,color,año,titular){
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.año=año;
    this.titular=titular;

}
let automovil1=new Automovil("Ford","Mustang","Rojo",2020,"Maria");
let automovil2=new Automovil("Cadillac","Escalade","Azul",2023,"Pedro");
let automovil3=new Automovil("Ferrari","Purosangue","Negro",2021,"Juan");
let automoviles=[automovil1,automovil2,automovil3];
Automovil.prototype.venderAutomovil=function(dueño){
    this.titular=dueño;
}
Automovil.prototype.verAutomovil=function(){
   // return this.marca + " " + this.modelo + " - " + this.año + " - " + this.titular;
   return `${this.marca} ${this.modelo} - ${this.año} - ${this.titular}`
}
Automovil.prototype.encender=function(){
    alert("El automovil esta en marcha");
}
function mostrarAutomoviles(){
    let lista=document.getElementById("listaAutomoviles");
    for (let automovil of automoviles)
    {
        let elemento=document.createElement("li");
        elemento.textContent=automovil.verAutomovil();
        lista.appendChild(elemento);
    }
}
