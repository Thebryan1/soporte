document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".header");
    var images = ["sopt.jpg", "2.jpg", "3.jpg"]; // Lista de imágenes disponibles

    // Función para cambiar el fondo del encabezado al siguiente imagen del carrusel
    function nextBackground(header) {
        var currentIndex = Math.floor(Math.random() * images.length);
        header.style.backgroundImage = "url('" + images[currentIndex] + "')";
    }

    // Cambiar el fondo del encabezado de cada sección cada 5 segundos
    headers.forEach(function(header) {
        setInterval(function() {
            nextBackground(header);
        }, 5000); // Cambia la imagen cada 5 segundos
    });

    // Verificar si el horario está habilitado y deshabilitar los enlaces si es necesario
    function verificarHorario() {
        var horaActual = new Date().getHours();
        // Establecer el horario de atención (ejemplo: de 9:00 a 20:00)
        if (horaActual < 8 || horaActual >= 17) {
            // Deshabilitar los enlaces para llamar y enviar mensajes de WhatsApp
            document.getElementById("llamar1").removeAttribute("href");
            document.getElementById("llamar2").removeAttribute("href");
            document.getElementById("whatsapp1").removeAttribute("href");
            document.getElementById("whatsapp2").removeAttribute("href");
           
            // Mostrar un mensaje de horario fuera de servicio
            document.getElementById("horario1").textContent = "Horario fuera de servicio. Por favor, contáctenos durante nuestro horario de atención.";
            document.getElementById("horario2").textContent = "Horario fuera de servicio. Por favor, contáctenos durante nuestro horario de atención.";
            
        }
    }

    // Llamar a la función para verificar el horario al cargar la página
    verificarHorario();
});
