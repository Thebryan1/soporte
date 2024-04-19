function verificarHorario() {
    var horaActual = new Date().getHours();
    // Establecer el horario de atención (ejemplo: de 9:00 a 20:00)
    if (horaActual < 9 || horaActual >= 20) {
        // Deshabilitar los enlaces para llamar y enviar mensajes de WhatsApp
        document.getElementById("llamar3").removeAttribute("href");
        document.getElementById("whatsapp3").removeAttribute("href");
        document.getElementById("llamar2").removeAttribute("href");
        document.getElementById("whatsapp2").removeAttribute("href");
        // Mostrar un mensaje de horario fuera de servicio
        document.getElementById("horario3").textContent = "Horario fuera de servicio. Por favor, contáctenos durante nuestro horario de atención.";
        document.getElementById("horario2").textContent = "Horario fuera de servicio. Por favor, contáctenos durante nuestro horario de atención.";
    }
}

// Llamar a la función para verificar el horario al cargar la página
verificarHorario();