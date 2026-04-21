// 1. Efek Sticky Navigation: Navigasi berubah saat di-scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
});

// 2. Animasi Muncul saat Scroll (Reveal Animation)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Daftarkan elemen yang ingin diberi efek muncul
const hiddenElements = document.querySelectorAll('.about, .skill-card, .social-icon');
hiddenElements.forEach((el) => {
    el.classList.add('hidden'); // Beri kelas hidden di awal
    observer.observe(el);
});

// Menghilangkan Preloader setelah halaman selesai dimuat
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Memberikan sedikit jeda (misal 500ms) agar animasi terlihat sebentar
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 500);
});