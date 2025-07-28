//Nav Bar
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
//Animacion de las opciones del menu
    document.addEventListener("DOMContentLoaded", function () {
        const navOptions = document.querySelectorAll(".nav-option");

        navOptions.forEach(option => {
            option.addEventListener("click", function () {
                // Eliminar la clase de todos los elementos primero
                navOptions.forEach(opt => opt.classList.remove("clicked"));

                // Agregar la clase solo al que se hizo clic
                this.classList.add("clicked");

                // Quitar la clase después de la animación para permitir repetirla
                setTimeout(() => {
                    this.classList.remove("clicked");
                }, 500); // 500ms debe ser un poco más que la duración de la animación
            });
        });
    });

//Carrusel Banner
let currentIndex = 0;
const totalSlides = 3;
const carousel = document.getElementById("carousel");

function showSlide(index) {
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Cambio automático cada 15 segundos
setInterval(nextSlide, 15000);

//Carrusel cards de cristal rutinas
function scrollCarousel(direction) {
  const carousel = document.getElementById('glassCarousel');
  const scrollAmount = 300; // cantidad de desplazamiento

  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

//Seccion servicios
const cards = document.querySelectorAll('.card');

  function revealCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealCardsOnScroll);
  window.addEventListener('load', revealCardsOnScroll);

//CALENDARIO
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    dateClick: function (info) {
      const fecha = info.dateStr;
      alert("Fecha seleccionada: " + fecha);

      // Enviar la fecha al backend
      fetch('guardar-fecha.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fecha: fecha })
      })
        .then(response => response.text())
        .then(data => {
          console.log("Respuesta del servidor:", data);
        })
        .catch(error => {
          console.error("Error al guardar la fecha:", error);
        });
    }
  });
  calendar.render();
});
//Animacion boton de ubicacion
document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector('.location');
  const button = link.querySelector('.ubicacion');

  // Escuchar el clic en el contenedor del botón
  button.addEventListener('click', function (e) {
    e.preventDefault(); // evitar que se abra de inmediato

    button.classList.add('clicked');

    setTimeout(() => {
      button.classList.remove('clicked');
      window.open(link.href, '_blank'); // abrir manualmente
    }, 600); // debe coincidir con la duración de la animación
  });
});
//Animacion scroll seccion comida
document.addEventListener("scroll", function () {
    const images = document.querySelectorAll(".food-box img, .food-box-2 img");
    const scrollTop = window.scrollY;

    images.forEach((img) => {
        const speed = 0.2; // Puedes ajustar la velocidad aquí
        const offset = img.getBoundingClientRect().top + scrollTop;
        const translateY = (scrollTop - offset) * speed;

        img.style.transform = `translateY(${translateY}px) scale(1.05)`;
    });
});
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
    //Calculadora
    function calcularCalorias() {
      const edad = parseInt(document.getElementById('edad').value);
      const sexo = document.getElementById('sexo').value;
      const peso = parseFloat(document.getElementById('peso').value);
      const estatura = parseFloat(document.getElementById('estatura').value);
      const actividad = parseFloat(document.getElementById('actividad').value);

      if (isNaN(edad) || isNaN(peso) || isNaN(estatura)) {
        alert("Por favor completa todos los campos.");
        return;
      }

      let tmb;
      if (sexo === 'masculino') {
        tmb = 10 * peso + 6.25 * estatura - 5 * edad + 5;
      } else {
        tmb = 10 * peso + 6.25 * estatura - 5 * edad - 161;
      }

      const caloriasMantener = Math.round(tmb * actividad);
      const caloriasBajar = caloriasMantener - 500;
      const caloriasSubir = caloriasMantener + 500;

      document.getElementById('resultado').style.display = "block";
      document.getElementById('resultado').innerHTML = `
        <h3>Tu requerimiento diario:</h3>
        <p><strong>Mantener peso:</strong> ${caloriasMantener} kcal</p>
        <p><strong>Bajar grasa:</strong> ${caloriasBajar} kcal</p>
        <p><strong>Ganar masa muscular:</strong> ${caloriasSubir} kcal</p>
      `;
    }