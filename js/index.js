const fechaActual = new Date().toLocaleDateString('es-ES');
document.getElementById("fecha_actual").textContent = fechaActual;
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");

var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var c1 = document.getElementById("contenido1");
var c2 = document.getElementById("contenido2");
var c3 = document.getElementById("contenido3");
var c4 = document.getElementById("contenido4");

var c = document.getElementById("content");
var rm = document.getElementById("rightMenu");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
btn.onclick = function () {
    modal.style.display = "block";
}

btn2.onclick = function () {
    c1.style.display = "block";
    rm.style.display = "block";
    c.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";


}
btn3.onclick = function () {
    c3.style.display = "block";
    c4.style.display = "block";
    c.style.display = "none";
    c1.style.display = "none";
    c2.style.display = "none";

}

span.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("btnd").addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("btng1").addEventListener("click", function (event) {
    event.preventDefault();
});

document.getElementById("submitButton2").addEventListener("click", function (event) {

    event.preventDefault();


    const requiredFields = document.querySelectorAll(
        'input[required], select[required], textarea[required]');


    let allFieldsFilled = true;
    for (let i = 0; i < requiredFields.length; i++) {
        if (!requiredFields[i].value) {
            allFieldsFilled = false;
            break;
        }
    }
    if (allFieldsFilled) {
        document.getElementById("registrarse").style.display = "none";
    } else {
        modal.style.display = "block";
        alert("Llene todos los campos");
    }
});
document.addEventListener("click", function (event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

const entregapCheckbox = document.getElementById('entregap');
const entregatCheckbox = document.getElementById('entregat');
const btnd = document.getElementById('btnd');
btnd.disabled = true;
entregapCheckbox.addEventListener('change', () => {
    if (entregapCheckbox.checked) {
        btnd.disabled = false;
        btnd.style.cursor = 'pointer';
    } else {
        btnd.style.cursor = 'not-allowed';
        btnd.disabled = true;
    }
});
entregatCheckbox.addEventListener('change', () => {
    if (entregatCheckbox.checked) {
        c2.style.display = "block";
        rm.style.display = "none";
    } else {
        c2.style.display = "none";
        rm.style.display = "block";
    }
})

function enviar(e) {
    e.preventDefault();
}

function limpiar(e) {
    e.preventDefault();
    document.FormProducto.reset();
}