// Precio
function setPrice() {
    var metros = 380;
    var precio = document.getElementById("priceInput").value;
    var m2 = precio / metros;

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
    if (heartActive === false) {
        heartActive = true;
        heart[0].style.color = "#ff6257";
        localStorage.setItem("heartColor", "#ff6257");
    } else {
        heartActive = false;
        heart[0].style.color = "#000";
        localStorage.setItem("heartColor", "#000");
    }
};

heart[0].style.color = localStorage.getItem("heartColor");
    
// Email
function validateEmail() {
    var email = document.getElementById("emailInput").value;
    var resultado = document.getElementById("resultado-email");
    var emailInput = document.getElementById("emailInput");
    var form = document.getElementById("form-contacto");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        resultado.innerHTML = "¡Gracias! Te responderemos en breve";
        resultado.style.color = "green";
        emailInput.style.borderColor = "#ccc";
        form.reset();
    } else {
        resultado.innerHTML = "Por favor, ingrese un email válido";
        resultado.style.color = "red";
        emailInput.style.borderColor = "red";
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