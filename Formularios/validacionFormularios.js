const formulario=document.forms[0];

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    //en lugar de tener una variable para cada control, tengo este objeto en ele que tengo todos los valores de los controles
    const datos={
        correo:formulario.correo.value,
        pais:formulario.pais.value,
        donacion:formulario.donacion.value,
        fecha:formulario.fecha.value,
        terminos:formulario["terminos-y-condiciones"].checked
    }
    //comprobamos el correo, longitud mayor que 2
    if(datos.correo.length<=2){
        console.log("correo invalido");
        return;
    }
    //comprobar pais, que se haya seleccionado algun elemento
    if(datos.pais==""){
        console.log("Pais invalido");
        return;
    }
     //comprobar donacion, que se haya seleccionado algun elemento
     if(datos.donacion==""){
        console.log("selecciona cantidad a donar");
        return;
    }
     //comprobar fecha, que se haya seleccionado algun elemento
     if(datos.fecha==""){
        console.log("selecciona una fecha");
        return;
    }
     //comprobar terminos, que este chequeado 
     if(!datos.terminos){
        console.log("Acepta los terminos");
        return;
    }

    console.log("enviando datos");
    console.log(datos);
});