// var formulario = document.getElementById("miFormulario");
// formulario.addEventListener("submit", validar);
//No me funciona si lo pongo así

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);  
}

function validar(e) {
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true
    } else {
        e.preventDefault();
        return false;
    }
}



function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) { //validacion de HTML5
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un nombre")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaEdad() {
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir una edad")
        }
        if (elemento.validity.rangeOverflow) {
            error2(elemento, "El valor debe ser menor de 100")
        }
        if (elemento.validity.rangeUnderflow) {
            error2(elemento, "El valor debe ser mayor o igual que 18");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error2(elemento, "Debe introducir un teléfono")
        }
        if (elemento.validity.patternMismatch) {
            error2(elemento, "El telefono debe tener 9 numeros");
        } //error(elemento);
        return false;
    }
    return true;
}



function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage; //Cada elemento tiene mensajes predefinidos
    elemento.className = "error";
    elemento.focus();
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className = "error";
    elemento.focus();
}

function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}