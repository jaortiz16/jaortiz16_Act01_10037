function enviar(event) {
    event.preventDefault();
    const isValid = validar();
    if (isValid) {
        const btnEnviar = document.getElementById("btnEnviar");
        btnEnviar.value = "Enviando datos.......";
        btnEnviar.disabled = true;
        btnEnviar.style.cursor = "not-allowed";
        this.form.submit();
    }
}

function validar() {
    const valorEmail = document.getElementById("email").value;
    const expresionEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    const isValidEmail = expresionEmail.test(valorEmail);

    const valorTelefono = document.getElementById("telefono").value;
    const isValidTelefono = valorTelefono.length == 10 && !isNaN(valorTelefono);

    if (isValidEmail && isValidTelefono) {
        return true;
    } else {
        alert("Ingrese información válida en los campos requeridos.");
        return false;
    }
}