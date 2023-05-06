//crear objetos usando notacion literal

//const estudiante={
	//nombre:"Ana",
	//apellido:"Perez",
	//edad:21
//}
//metodo -->nombreCompleto()
//estudiante.nombreCompleto=function(){
	//return estudiante.nombre + " " + estudiante.apellido;
//}

//estudiante.curso="informatica";
//borrar propiedad
//delete estudiante.curso;

//usando la palabra new
//const estudiante=new Object();
//estudiante.nombre="ana";
//estudiante.apellido="perez";
//estudiante.edad=30;
//estudiante.nombreCompleto=function(){
	//return estudiante.nombre + " " + estudiante.apellido;
//}

//crear un constructor
//function Estudiante(nombre,apellido,edad){
	//this.nombre=nombre;
	//this.apellido=apellido;
	//this.edad=edad;
	//this.nombreCompleto=function(){
		//return this.nombre + " " + this.apellido;
	//}
//}
//creo un estudiante
//let a=new Estudiante("ana","perez",30);
//let b=new Estudiante("juan","toledo",15);
//crear un objeto a travez de un prototipo, hereda las propiedades del prototipo, el prototipo es el padre
//el objeto nuevo hereda del objeto a. El objeto a hereda por defecto de object
//let nuevo=Object.create(a);

//recorrer las propiedades de un objeto
//for (propiedad in a){
	//console.log(a[propiedad]);
//}

//Ejercicio 1
const coche={marca:"Ford",
			modelo:"Fiesta",
			año:2015,
			arrancar(){
				console.log("En marcha"); 
			}
};
//Ejercicio 2
const polo=new Object();
polo.marca="Lacoste";
polo.color="Azul";
polo.talla="L";
polo.fabricar=function(){
	console.log("Polo fabricado");
};
polo.tejido="algodon";
delete polo.tejido;
//Ejercicio 3
function Empleado(nombre,apellido,edad,cargo){
	this.nombre=nombre;
	this.apellido=apellido;
	this.edad=edad;
	this.cargo=cargo;
	this.presentarse=function(){
		console.log(`Mi nombre es ${this.nombre} ${this.apellido}. Soy ${this.cargo} y tengo ${this.edad} años`);
		
	};
}
let maria=new Empleado("maria","perez",30,"informatica");
//ejercicio 4
for (let propiedad in maria){
	console.log(maria[propiedad]);
}

//Ejercicio 7
const persona={
	Laura:21,
	Ane:25,
	Luis:30,
	Jon:15,
	Alina:18
}

console.log(Object.keys(persona).length>0?true:false);

let suma=Object.values(persona).reduce(function(total,n){return total+n});
console.log(`La suma de las edades es ${suma}`);

//console.log(Object.entries(persona).filter(function(p){if(p[1]>18) return true}));
console.log(Object.entries(persona).filter(function(p){return p[1]>18}));
