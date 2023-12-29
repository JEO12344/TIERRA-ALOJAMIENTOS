document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos con la clase "carrusel-departamentos"
    const carruseles = document.querySelectorAll('.carrusel-departamentos');

    // Itera sobre cada carrusel
    carruseles.forEach(function (carrusel) {
        let currentIndex = 0;
        const slides = carrusel.querySelectorAll('img');
        const totalSlides = slides.length;

        // Oculta todas las imágenes excepto la primera
        for (let i = 1; i < totalSlides; i++) {
            slides[i].classList.add('oculta');
        }

        // Agrega eventos de clic para las flechas de cada carrusel
        carrusel.closest('.departamento').querySelector('.next-btn').addEventListener('click', function () {
            showNextSlide(carrusel);
        });

        carrusel.closest('.departamento').querySelector('.prev-btn').addEventListener('click', function () {
            showPrevSlide(carrusel);
        });

        // Funciones para mostrar la siguiente y la anterior imagen en un carrusel específico
        function showNextSlide(carrusel) {
            slides[currentIndex].classList.add('oculta');
            currentIndex = (currentIndex + 1) % totalSlides;
            slides[currentIndex].classList.remove('oculta');
        }

        function showPrevSlide(carrusel) {
            slides[currentIndex].classList.add('oculta');
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            slides[currentIndex].classList.remove('oculta');
        }
    });
});


var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
    interval: 10000,  // Establece el intervalo de cambio de imágenes en milisegundos (en este caso, cada 3 segundos)
    pause: 'hover',  // Pausa el carrusel al pasar el ratón sobre él
    wrap: true  // Hace que el carrusel se vuelva a iniciar desde la primera imagen después de llegar a la última
});

document.addEventListener("DOMContentLoaded", function () {
    const carruseles = document.querySelectorAll('.carrusel-departamentos');

    carruseles.forEach(function (carrusel) {
        let currentIndex = 0;
        const slides = carrusel.querySelectorAll('img');
        const totalSlides = slides.length;

        // Inicia el desvanecimiento para la primera imagen
        slides[currentIndex].classList.add('visible');

        // Agrega un temporizador para cambiar automáticamente las imágenes
        setInterval(function () {
            showNextSlide(carrusel);
        }, 3000); // Cambia de imagen cada 3 segundos

        function showNextSlide(carrusel) {
            slides[currentIndex].classList.remove('visible');
            currentIndex = (currentIndex + 1) % totalSlides;
            slides[currentIndex].classList.add('visible');
        }
    });
});