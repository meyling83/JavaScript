const formulario=document.forms['formulario-donacion'];
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const correo=formulario.correo.value;
    const dni=formulario.dni.value;
    const matricula=formulario.matricula.value;
    const expresionRegularCorreo=/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    const expresionRegularDNI=/^\d{8}[a-zA-Z]$/;
    const expresionRegularMatricula=/[0-9]{4}\s?[A-Z]{3}/;
    if(!expresionRegularCorreo.test(correo)){
        console.log("el correo es invalido");
        return;
    }
    if(!expresionRegularDNI.test(dni)){
        console.log("el dni es invalido");
        return;
    }
    if(!expresionRegularMatricula.test(matricula)){
        console.log("la matricula es invalida");
        return;
    }
    console.log("enviando datos...");
    console.log(correo);
});
