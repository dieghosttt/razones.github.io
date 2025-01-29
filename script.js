const reasons = [
    "Por tu sonrisa.",
    "Por tu bondad.",
    "Por hacerme feliz.",
    "Por tu humor.",
    "Por tu inteligencia.",
    "Por tu apoyo.",
    "Por tu belleza.",
    "Por hacerme reír.",
    "Por tu paciencia.",
    "Por tu amor.",
    "Por tu valentía.",
    "Por tu honestidad.",
    "Por tu compañía.",
    "Por tu forma de ser.",
    "Por cuidarme.",
    "Por escucharme.",
    "Por entenderme.",
    "Por hacerme sentir amado.",
    "Por motivarme.",
    "Por inspirarme.",
    "Por hacerme sentir seguro.",
    "Por hacerme sentir feliz.",
    "Por completarme.",
    "Por ser mi hogar.",
    "Por hacerme sentir especial.",
    "Por hacerme sentir único.",
    "Por hacerme sentir querido.",
    "Por hacerme sentir importante.",
    "Por valorarme.",
    "Por escucharme siempre.",
    "Por comprenderme.",
    "Por apoyarme.",
    "Por motivarme siempre.",
    "Por inspirarme siempre.",
    "Por ser mi felicidad.",
    "Por ser mi amor.",
    "Por ser mi todo.",
    "Por ser mi inspiración.",
    "Por ser lo que siempre soñe.",
    "Por ser mi vida."
];

let currentReasonIndex = 0;
const reasonText = document.getElementById('reason-text');
const showReasonBtn = document.getElementById('show-reason-btn');
const resetBtn = document.getElementById('reset-btn');
const backgroundMusic = document.getElementById('background-music');

showReasonBtn.addEventListener('click', () => {
    if (currentReasonIndex < reasons.length) {
        reasonText.style.opacity = 0; // Desvanecer el texto
        setTimeout(() => {
            reasonText.textContent = reasons[currentReasonIndex];
            reasonText.style.opacity = 1; // Mostrar el nuevo texto
            currentReasonIndex++;
        }, 300); // Duración de la transición
    } else {
        reasonText.textContent = "Esas solo son algunas de tantas razones por las que te amo, mi princesa 💗";
        showReasonBtn.textContent = "¡Te amo mucho!";
        showReasonBtn.disabled = true;
        resetBtn.classList.remove('hidden'); // Mostrar el botón de reinicio
    }

    createHearts(5); // Crear 5 corazones
});

resetBtn.addEventListener('click', () => {
    currentReasonIndex = 0;
    reasonText.textContent = "Hecho con mucho amor por Diego <3";
    showReasonBtn.textContent = "Ver razón";
    showReasonBtn.disabled = false;
    resetBtn.classList.add('hidden'); // Ocultar el botón de reinicio
});

function createHearts(count) {
    // Limpiar corazones antiguos
    document.querySelectorAll('.heart').forEach(heart => heart.remove());

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💗';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Reproducir música de fondo al hacer clic en cualquier parte de la página
document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
});