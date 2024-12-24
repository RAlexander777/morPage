// Frases aleatorias
const phrases = [
    "Tus ojos son mi espejo favorito",
    "Tu sonrisa ilumina mi mundo",
    "Eres el sol que ilumina mi día",
    "No hay estrella más brillante que tú",
    "Mi lugar favorito es contigo",
    "Contigo, todo es perfecto",
    "Contigo, cada día es un regalo",
    "Eres la melodía que alegra mi vida",
    "Tu risa es la banda sonora de mi felicidad",
    "Cada momento contigo es un sueño hecho realidad",
    "Mi hogar está donde estás tú",
    "Tu amor es la luz que guía mi camino",
    "Eres mi razón de ser y sonreír",
    "Contigo, el mundo es un lugar mejor",
    "Eres mi refugio en medio de la tormenta"
];

// Emojis románticos
const emojis = [
    "❤️", "💖", "💘", "💝", "😍", "🥰", "😘", "💞", "💓", "💗",
    "💕", "💌", "💟", "💎", "🌹", "🌺", "💐", "🌷", "🌸", "🏵️",
    "🎁", "🥳", "🎉", "✨", "🌟", "🌈"
];

// Función para cambiar la frase aleatoriamente
function changePhrase() {
    const phraseElement = document.getElementById('phrase');
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.textContent = phrases[randomIndex];
}

// Función para actualizar el saludo según la hora del día
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const greetingElement = document.getElementById('greeting'); 

    if (hours >= 5 && hours < 12) {
        greetingElement.textContent = "Buenos días mi amor";
    } else if (hours >= 12 && hours < 18) {
        greetingElement.textContent = "Buenas tardes mi amor";
    } else {
        greetingElement.textContent = "Buenas noches mi amor";
    }
}

// Función para cambiar el emoji aleatoriamente
function changeEmoji() {
    const emojiElement = document.getElementById('emoji');
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emojiElement.textContent = emojis[randomIndex];
}

// Función para hacer "salpicar" emojis desde la parte inferior de la página
function splashEmojis() {
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = ''; // Limpiar emojis viejos

    const emojiType = emojis[Math.floor(Math.random() * emojis.length)]; // Escoge un emoji aleatorio

    // Crear y animar emojis
    for (let i = 0; i < 100; i++) { // Ajusta la cantidad según prefieras
        const emojiElement = document.createElement('div');
        emojiElement.textContent = emojiType;
        emojiElement.className = 'emoji';
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

// Función para mostrar el modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    document.querySelector('.h-text').style.display = 'none'; // Oculta el contenido inicial
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.querySelector('.h-text').style.display = 'block'; // Muestra el contenido inicial
}

// Evento al hacer clic en el botón de códigos
document.getElementById('codeBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showModal();
});

// Evento al hacer clic en el botón de cerrar del modal
document.getElementById('closeBtn').addEventListener('click', function() {
    closeModal();
});

// Evento al hacer clic fuera del contenido del modal para cerrarlo
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Evento para el formulario de envío
document.getElementById('modalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputText = document.getElementById('modalInput').value;
    // Aquí puedes agregar lo que quieres hacer con el texto ingresado
    console.log('Texto enviado:', inputText);
    closeModal();
});

// Inicializar el saludo y agregar el evento al botón
updateGreeting();
document.getElementById('refreshBtn').addEventListener('click', function(e) {
    e.preventDefault(); 
    changePhrase();
    splashEmojis(); // Añade emojis "salpicando"
});

// Modifica el evento del formulario para chequear el código y mostrar corazones o emoji de error
document.getElementById('modalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputText = document.getElementById('modalInput').value;
    if (inputText === 'MOR') {
        splashHearts(); // Añade corazones "flotando"
    } 
    
    else if (inputText === 'NEON') {
        startNeonAnimation();
    }

    else if (inputText === 'FOTOS') {
        showGallery();
    }

    else if (inputText === '0409') {
        showLetter();
    }
    
    else if (inputText === 'TRAKA') {
        showQuestion();
    }

    else if(inputText === 'VUELVEPRONTO') {
        showMap();
    }

    else if(inputText === '21FY') {
        window.location.href = './flow/main.html';
    }

    else {
        splashError(); // Muestra el emoji de error
    }
    closeModal();
});





