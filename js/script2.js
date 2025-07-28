//Nav Bar
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Mostrar el boton para volver hacia arriba
//Boton de volver hacia arriba
const scrollBtn = document.getElementById("scrollTopBtn");

    // Mostrar el botón cuando se hace scroll hacia abajo
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    };

    // Función para volver al inicio suavemente
    scrollBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };