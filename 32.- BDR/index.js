//variable que almacena el complemento express
const express=require('express');
const app =express();
app.set('port', 3000);
app.listen;

var mysql=require('mysql2');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'rootroot',
  database:'mibase'
})
connection.connect( (error)=>{
  if (error){
    throw error
  }else{
    console.log('conexion exitosa');
  }
})
//agregar datos
//Agregar datos
/* connection.query('INSERT INTO clientes(nombre, genero, telefono, localidad) VALUES ("Jon", 1, 888888888, "Donostia" )', function(error, resultados){
  if (error) throw error;
  console.log(resultados);
 
}); */
//seleccionar
connection.query('SELECT * FROM clientes', function(error, filas){
  if (error) throw error;
  console.log(filas);
 
}); 
//actualizar datos
/* connection.query('UPDATE clientes SET telefono=99999999 WHERE idclientes=2 ', 
function(error, filas){
    if (error) throw error;
    console.log(filas);
 
}); */
//eliminar
/* connection.query('DELETE FROM clientes WHERE idclientes=2 ', 
function(error, filas){
    if (error) throw error;
    console.log(filas);
 
}) */;
//cerrar conexion
connection.end();