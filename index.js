
//conexion a la BD
const express=require('express'); 
const app=express();
app.set('port',3000);
app.listen;

var mysql=require('mysql2');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'rootroot',
  database:'mibase'
})
connection.connect((error)=>{
  if(error){
    throw error
  }
  else{
    console.log('conexion exitosa');
  }
})