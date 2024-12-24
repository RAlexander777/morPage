function showMap() {
    document.getElementById('map-modal').style.display = 'flex';
}

document.getElementById('backButton5').addEventListener('click', function() {
        document.getElementById('map-modal').style.display = 'none';
});

const map = document.getElementById('map');
const points = document.querySelectorAll('.point');
const tooltip = document.getElementById('tooltip');

points.forEach(point => {
    point.addEventListener('click', function() {
        // Obtener la descripción de la imagen seleccionada
        const descriptionText = point.getAttribute('data-description');
        const descriptionContainer = document.getElementById('image-description');
        const descriptionParagraph = document.getElementById('description-text');

        // Actualizar el texto en el contenedor
        descriptionParagraph.textContent = descriptionText;

        // Obtener las coordenadas de la imagen seleccionada
        const rect = point.getBoundingClientRect();
        const parentRect = document.querySelector('.image-container').getBoundingClientRect();

        // Calcular la posición para centrar el texto debajo de la imagen
        const top = rect.bottom - parentRect.top; // Distancia desde la parte superior del contenedor
        const left = rect.left - parentRect.left + rect.width / 2; // Centro de la imagen

        // Aplicar las coordenadas al contenedor del texto
        descriptionContainer.style.top = `${top}px`;
        descriptionContainer.style.left = `${left}px`;

        // Mostrar el contenedor de la descripción
        descriptionContainer.style.display = 'block';
    });
});


// Nuevo botón para volver a la vista inicial
document.getElementById('resetButton').addEventListener('click', function() {
    // Mostrar todas las imágenes nuevamente
    points.forEach(point => {
        point.style.display = 'block';  // Hacer todas las imágenes visibles
    });

    // Restablecer la posición del contenedor de imágenes
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.transition = "transform 0.5s ease";
    imageContainer.style.transform = "translate(0, 0)";  // Restablecer la posición original

    // Ocultar el botón de reset nuevamente
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('image-description').style.display= 'none';
});
