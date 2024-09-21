// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ya no importa cada noche que esperé", time: 11 },
  { text: "Cada calle o laberinto que crucé", time: 17 },
  { text: "Porque el cielo a conspirado a mi favor", time: 22 },
  { text: "Y a un segundo de rendirme te encontré", time: 28 },
  { text: "Piel con piel", time: 33 },
  { text: "El corazón se me desarma", time: 34 },
  { text: "Me haces bien", time: 39 },
  { text: "Enciendes luces en mi alma", time: 41 },
  { text: "Creo en tí y en este amor", time: 44 },
  { text: "Que me vuelve indestructible", time: 50 },
  { text: "Que detuvo mi caída libre", time: 52 },
  { text: "Creo en ti y mi dolor", time: 55 },
  { text: "Se quedó kilómetros atrás", time: 61 },
  { text: "Y mis fantasmas hoy por fin están en paz", time: 65 },
  { text: "El pasado es un mal sueño que acabó", time: 84 },
  { text: "Un incendio que en tus brazos se apagó", time: 90 },
  { text: "Cuando estaba a medio paso de caer", time: 95 },
  { text: "Mis silencios se encontraron con tu voz", time: 101 },
  { text: "Te seguí y rescribiste mi futuro", time: 107 },
  { text: "Es aquí mi único lugar seguro", time: 111 },
  { text: "Creo en tí y en este amor", time: 117 },
  { text: "Que me ha vuelto indestructible", time: 122 },
  { text: "Que detuvo mi caída libre", time: 125},
  { text: "Creo en ti y mi dolor", time: 128 },
  { text: "Se quedo kilómetros atrás", time: 134 },
  { text: "Y mis fantasmas hoy por fin están en paz", time: 138 },
];

function calcularDuracion(line) {
  var palabras = line.text.split(" ").length; // Cuenta el número de palabras
  var duracionPorPalabra = 0.8; // Define el tiempo que quieres por palabra (en segundos)
  return palabras * duracionPorPalabra; // Retorna la duración total para la línea
}

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find((line) => {
    var duracionLinea = calcularDuracion(line); // Calcula la duración de cada línea
    return time >= line.time && time < line.time + duracionLinea;
  });

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 0);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);