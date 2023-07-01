const formulario=document.forms['formulario-donacion'];
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const texto=formulario.texto.value;
    //expresion validar fecha
   // const expresionRegular=/\d{2}\/\d{2}\/\d{4}/;
   //expresion regular solo numeros
   //const expresionRegular=/^\d+$/;
   //exp reg solo letras, incluidas tildes
    const expresionRegular=/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

    if(!expresionRegular.test(texto)){
        console.log("el texto es invalido");
        return;
    }
  
    console.log("enviando datos...");
    console.log(correo);
});
