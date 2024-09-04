function showLetter() {
    document.getElementById('letter-modal').style.display = 'grid';

    document.getElementById('backButton3').addEventListener('click', function() {
        document.getElementById('letter-modal').style.display = 'none'; // Ocultar el overlay
    })
}

const envelope= document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    
});