function showQuestion() {
    document.getElementById('question-modal').style.display = 'flex';

    document.getElementById('backButton4').addEventListener('click', function() {
        document.getElementById('question-modal').style.display = 'none';
    })
}

let noClickCount= 0;

document.getElementById('yesBtn').addEventListener('click', function() {
    // Cambia el GIF
    document.getElementById('questionGif').src = './gifs/question4.gif';

    // Cambia el texto
    document.getElementById('questionTitle').textContent = '¿Y que esperas mi amor? Hazme tuyo';

    // Oculta los botones
    document.querySelector('.question-btn').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    noClickCount++;

    if (noClickCount === 1) {
        // Cambia la pregunta y el GIF
        document.getElementById('questionGif').src = './gifs/question2.gif';
        document.getElementById('questionTitle').textContent = '¿Por qué ño queles?';
    } else if (noClickCount === 2) {
        // Cambia la pregunta y el GIF de nuevo
        document.getElementById('questionGif').src = './gifs/question3.gif';
        document.getElementById('questionTitle').textContent = '¡Di que chi mi amor di que CHIIII!';
    } else if (noClickCount >= 3) {

        this.classList.add('move');
        // Evento mouseover para mover el botón "NO" de manera aleatoria
        document.getElementById('noBtn').addEventListener('mouseover', function() {
            const button = this;
            const maxWidth = window.innerWidth - button.offsetWidth;
            const maxHeight = window.innerHeight - button.offsetHeight;

            const randomX = Math.floor(Math.random() * maxWidth);
            const randomY = Math.floor(Math.random() * maxHeight);

            button.style.position = 'absolute';
            button.style.left = `${randomX}px`;
            button.style.top = `${randomY}px`;
        });
    }
});