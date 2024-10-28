// Selecciona el título principal
const mainTitle = document.getElementById("main-title");

// Función para alternar el color del título
function toggleTitleColor() {
    if (mainTitle.style.color === "lime") {
        mainTitle.style.color = "#32CD32"; // Verde radiactivo
    } else {
        mainTitle.style.color = "lime"; // Verde más brillante
    }
}

// Configura un intervalo para cambiar el color del título cada 500ms
setInterval(toggleTitleColor, 500);
