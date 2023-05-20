class Animal{
    constructor(nombre,peso,edad){
        this._nombre=nombre;
        this._peso=peso;
        this._edad=edad;
    }
    informacion(){
       // return this._nombre + " - " + this._peso + "Kg - " + this._edad + " años";
       return `${this._nombre} - ${this._peso} Kg. - ${this._edad} años`;
    }
}
class Perro extends Animal{
    constructor(nombre,peso,edad,raza){
        super(nombre,peso,edad);
        this._raza=raza;
    }
    informacion(){
        //return this._nombre + " - " + this._peso + "Kg - " + this._edad + " años - " + this._raza;
        return `${this._nombre} - ${this._peso} Kg. - ${this._edad} años - ${this._raza}` ;
    }
}
class Gato extends Animal{
    constructor(nombre,peso,edad,sexo){
        super(nombre,peso,edad);
        this._sexo=sexo;
    }
    informacion(){
        //return this._nombre + " - " + this._peso + "Kg - " + this._edad + " años - " + this._sexo;
        return `${this._nombre} - ${this._peso} Kg. - ${this._edad} años - ${this._sexo}` ;
    }
}
class Conejo extends Animal{
    constructor(nombre,peso,edad,color){
        super(nombre,peso,edad);
        this._color=color;
    }
    informacion(){
        //return this._nombre + " - " + this._peso + "Kg - " + this._edad + " años - " + this._color;
        return `${this._nombre} - ${this._peso} Kg. - ${this._edad} años - ${this._color}` ;
    }
}
let perro1=new Perro("Lasy",10,2,"Pastor");
let gato1=new Gato("Pelusa",8,5,"Masculino");
let conejo1=new Conejo("nombre",5,3,"blanco");
var array=[perro1,gato1,conejo1];
var lista=document.getElementById("listaAnimales");
function mostrarAnimales(){
    
    for (const animal of array) {
        let item=document.createElement("li");
        item.innerText=animal.informacion();
        lista.appendChild(item);
        
    }
}
//borra la lista de animales 
function borrarAnimales(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
}