// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Nav plus opaque au scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 40
        ? 'rgba(7, 8, 13, 0.95)'
        : 'rgba(7, 8, 13, 0.75)';
});

// Boutons "Démarrer un projet" -> WhatsApp avec message pré-rempli
const numeroWhatsApp = "242066159567";
document.querySelectorAll('.btn-projet').forEach(btn => {
    btn.addEventListener('click', () => {
        const message = encodeURIComponent("Bonjour, je souhaite démarrer un projet de site internet avec Kingly_Corporation.");
        window.open(`https://wa.me/${numeroWhatsApp}?text=${message}`, '_blank');
    });
});