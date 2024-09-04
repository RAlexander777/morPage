// Lista de emojis de corazones de diferentes colores
const heartEmojis = [
    "❤️", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎"
];

// Función para hacer "flotar" corazones en la página
function splashHearts() {
    const heartContainer = document.getElementById('emojiContainer');
    heartContainer.innerHTML = ''; // Limpiar corazones viejos

    const numberOfHearts = Math.floor(Math.random() * 6) + 12; // Genera entre 12 y 17 corazones

    for (let i = 0; i < numberOfHearts; i++) {
        const heartElement = document.createElement('div');
        // Selecciona un emoji de corazón aleatorio
        const randomHeart = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heartElement.textContent = randomHeart; // Corazón grande
        heartElement.className = 'heart';

        // Inicializa la posición y la velocidad
        const x = Math.random() * (window.innerWidth - 50); // Ajuste para el tamaño del corazón
        const y = Math.random() * (window.innerHeight - 50); // Ajuste para el tamaño del corazón
        let velocityX = (Math.random() - 0.5) * 4; // Velocidad horizontal aleatoria
        let velocityY = (Math.random() - 0.5) * 4; // Velocidad vertical aleatoria

        heartElement.style.left = `${x}px`;
        heartElement.style.top = `${y}px`;
        heartContainer.appendChild(heartElement);

        // Mueve el corazón y maneja las colisiones
        function moveHeart() {
            const rect = heartElement.getBoundingClientRect();
            let left = parseFloat(heartElement.style.left);
            let top = parseFloat(heartElement.style.top);

            // Actualiza la posición del corazón
            left += velocityX;
            top += velocityY;

            // Colisiones con los bordes de la ventana
            if (left < 0) {
                left = 0;
                velocityX *= -1; // Rebota horizontalmente
            } else if (left + rect.width > window.innerWidth) {
                left = window.innerWidth - rect.width;
                velocityX *= -1; // Rebota horizontalmente
            }

            if (top < 0) {
                top = 0;
                velocityY *= -1; // Rebota verticalmente
            } else if (top + rect.height > window.innerHeight) {
                top = window.innerHeight - rect.height;
                velocityY *= -1; // Rebota verticalmente
            }

            heartElement.style.left = `${left}px`;
            heartElement.style.top = `${top}px`;

            requestAnimationFrame(moveHeart); // Continuar moviendo el corazón
        }

        moveHeart();

        // Eliminar el corazón al hacer clic
        heartElement.addEventListener('click', function() {
            heartElement.style.transition = 'opacity 0.5s'; // Añadir transición para desvanecer
            heartElement.style.opacity = '0'; // Desvanecer el corazón
            setTimeout(() => {
                heartElement.remove(); // Eliminar el corazón después de la transición
            }, 500); // Tiempo debe coincidir con la duración de la transición
        });
    }
}
