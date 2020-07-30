// Precio
function setPrice() {
    const nodoPrecio = document.getElementById("priceInput");
    const metros = 380;
    const precio = nodoPrecio.value;
    const m2 = precio / metros;

    var avisoM2 = document.getElementsByClassName("precio-metro-numero");
    avisoM2[0].innerHTML = m2.toFixed();

    localStorage.setItem("storedPrecio", precio);
    };
    document.getElementById("priceInput").value = localStorage.getItem("storedPrecio");

// Slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    };

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
            slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
        slides[slideIndex-1].style.display = "block";  
};

// Like
var heart = document.getElementsByClassName("like");
var heartActive = false;

function activeHeart() {
    if (heartActive) {
        heartActive = false;
        heart[0].style.color = "#000";
        localStorage.setItem("heartColor", "#000");
    } else {
        heartActive = true;
        heart[0].style.color = "#ff6257";
        localStorage.setItem("heartColor", "#ff6257");
    }
};

heart[0].style.color = localStorage.getItem("heartColor");
    
// Email
function validateEmail() {
    const nodoEmailInput = document.getElementById("emailInput");
    var email = nodoEmailInput.value;
    var resultado = document.getElementById("resultado-email");
    var form = document.getElementById("form-contacto");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        resultado.innerHTML = "¡Gracias! Te responderemos en breve";
        resultado.style.color = "green";
        nodoEmailInput.style.borderColor = "#ccc";
        form.reset();
    } else {
        resultado.innerHTML = "Por favor, ingrese un email válido";
        resultado.style.color = "red";
        nodoEmailInput.style.borderColor = "red";
    }
};

// Boton contacto
var contactoAbierto = false;
function abrirContacto() {
    var cajaContacto = document.getElementsByClassName("form-contacto");
    if (contactoAbierto === false) {
        contactoAbierto = true;
        cajaContacto[0].classList.add("contacto-abierto");
    } else {
        contactoAbierto = false;
        cajaContacto[0].classList.remove("contacto-abierto");
    }
};