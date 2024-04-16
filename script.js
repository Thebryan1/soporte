document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".header");
    var images = ["sopt.jpg", "2.jpg", "3.jpg"]; // Lista de imágenes disponibles
    var currentIndex = 0;

    // Función para cambiar el fondo del encabezado al siguiente imagen del carrusel
    function nextBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        header.style.transition = "background-image 1s ease-in-out"; // Añade una transición suave al cambio de imagen
        header.style.backgroundImage = "url('" + images[currentIndex] + "')";
    }

    // Selecciona una imagen aleatoria y la establece como fondo del encabezado al cargar la página
    currentIndex = Math.floor(Math.random() * images.length);
    header.style.backgroundImage = "url('" + images[currentIndex] + "')";

    // Llama a la función nextBackground cada 5 segundos para avanzar al siguiente fondo del carrusel
    setInterval(nextBackground, 5000); // Cambia la imagen cada 5 segundos
});

