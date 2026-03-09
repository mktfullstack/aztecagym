// Array con diferentes frases motivacionales para el banner
const frasesBanner = [
    "¿Listo para dar el primer paso hacia tu mejor versión?",
    "¿Preparado para transformar tu vida hoy?",
    "¿Quieres alcanzar tus metas de fitness?",
    "¿Listo para superar tus límites?",
    "¿Buscas resultados reales y duraderos?",
    "¿Quieres entrenar con los mejores?",
    "¿Preparado para el cambio que mereces?",
    "¿Listo para convertirte en tu mejor versión?",
    "¿Quieres ver resultados desde el primer mes?",
    "¿Preparado para alcanzar tu máximo potencial?"
];

// Seleccionar una frase aleatoria al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const fraseAleatoria = frasesBanner[Math.floor(Math.random() * frasesBanner.length)];
    const elemento = document.querySelector('.bg-color h3.fs-32');
    if (elemento) {
        elemento.textContent = fraseAleatoria;
    }
});
