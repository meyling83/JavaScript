function obtenerPokemon(){
    var id=document.getElementById("textid").value;
    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    .then(response=>response.json())
    .then(datos=>{
        
        document.getElementById("nombre").textContent=datos.name
        document.getElementById("id").textContent= datos.id
        document.getElementById("imagen").src=datos.sprites.front_default
    })
    .catch(error=>console.log(error));
}