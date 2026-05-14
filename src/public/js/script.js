// Carrossel das imagens do produto
(function () {
    const gallery = document.querySelector('.galeria-miniaturas');
    if (!gallery) return;

    const mainImg = document.getElementById('imagem-produto-principal');
    const thumbs = Array.from(gallery.querySelectorAll('.miniatura-item'));
    let current = 0;
    let timer;

    function activate(index) {
        thumbs[current].classList.remove('ativa');
        current = (index + thumbs.length) % thumbs.length;
        thumbs[current].classList.add('ativa');

        const src = thumbs[current].dataset.src;
        const alt = thumbs[current].dataset.alt;
        mainImg.classList.add('fade-img');
        setTimeout(() => {
            mainImg.src = src;
            mainImg.alt = alt;
            mainImg.classList.remove('fade-img');
        }, 150);
    }

    function startCycle() {
        timer = setInterval(() => activate(current + 1), 3000);
    }

    function resetCycle() {
        clearInterval(timer);
        startCycle();
    }

    thumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => {
            if (i === current) return;
            activate(i);
            resetCycle();
        });
    });

    startCycle();
})();
