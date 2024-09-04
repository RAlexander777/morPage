// Lista de emojis para mostrar cuando el código es incorrecto
const errors = ["😭", "😥", "🥺", "💩", "😔"];

// Función para hacer "salpicar" emojis desde la parte inferior de la página
function splashError() {
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = ''; // Limpiar emojis viejos

    const errorType = errors[Math.floor(Math.random() * errors.length)]; // Escoge un emoji aleatorio

    // Crear y animar emojis
    for (let i = 0; i < 12; i++) { // Ajusta la cantidad según prefieras
        const emojiElement = document.createElement('div');
        emojiElement.textContent = errorType;
        emojiElement.className = 'errorEmoji';
        // Posición aleatoria dentro del contenedor
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight - Math.random() * (window.innerHeight / 2);
        emojiElement.style.left = `${x}px`;
        emojiElement.style.top = `${y}px`;
        emojiContainer.appendChild(emojiElement);

        // Eliminar el emoji después de la animación
        setTimeout(() => {
            emojiContainer.removeChild(emojiElement);
        }, 2000); // Tiempo debe coincidir con la duración de la animación
    }
}
