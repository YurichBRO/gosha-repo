// Перелистывание характеристик паровозиком
const characteristics = document.querySelectorAll('#characteristics > div');

for (let i = 0; i < characteristics.length; i++) {
    const ch = characteristics[i];
    ch.style.left = `${50 + i * 100}%`;
}

let currentCh = 0;
setInterval(() => {
    if (currentCh === characteristics.length) {
        currentCh = 0;
    }
    for (let i = 0; i < characteristics.length; i++) {
        const ch = characteristics[i];
        ch.style.left = `${50 + (i - currentCh) * 100}%`;
    }
    currentCh++;
}, 2500);
// Конец перелистывание характеристик паровозик

// Плавный скролл до пункта меню
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Конец плавный скролл до пункта меню