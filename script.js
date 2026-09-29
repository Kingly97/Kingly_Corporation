/* =========================================
KINGLY_CORPORATION — SCRIPT PRINCIPAL
========================================= */

/* ===== Menu mobile ===== */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {

menuToggle.addEventListener('click', () => {

    const isOpen = navLinks.classList.toggle('active');

    menuToggle.classList.toggle('active');

    menuToggle.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
    );

});

}

/* ===== Fermer le menu après avoir cliqué ===== */

document.querySelectorAll('.nav-links a').forEach(link => {

link.addEventListener('click', () => {

    navLinks.classList.remove('active');

    menuToggle.classList.remove('active');

    menuToggle.setAttribute(
        'aria-expanded',
        'false'
    );

});

});

/* ===== Navigation plus opaque au scroll ===== */

const navbar = document.getElementById('navbar');

if (navbar) {

window.addEventListener('scroll', () => {

    navbar.style.background =
        window.scrollY > 40
            ? 'rgba(7, 8, 13, 0.95)'
            : 'rgba(7, 8, 13, 0.75)';

});

}

/* ===== Numéro WhatsApp ===== */

const numeroWhatsApp = "242066159567";

/* ===== Bouton "Démarrer un projet" ===== */

document.querySelectorAll('.btn-projet').forEach(button => {

button.addEventListener('click', () => {

    const message =
        "Bonjour Kingly_Corporation 👑\n\n" +
        "Je souhaite démarrer un projet de site internet avec vous.";

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

});

});

/* =========================================
FORMULAIRE DE DEVIS
========================================= */

const devisForm = document.getElementById('devis-form');

if (devisForm) {

devisForm.addEventListener('submit', (event) => {

    event.preventDefault();


    /* ===== Récupération des informations ===== */

    const nom =
        document.getElementById('devis-nom').value.trim();

    const date =
        document.getElementById('devis-date').value;

    const description =
        document.getElementById('devis-desc').value.trim();


    /* ===== Vérification ===== */

    if (!nom || !date || !description) {

        alert(
            "Veuillez remplir tous les champs avant d'envoyer votre demande."
        );

        return;

    }


    /* ===== Formatage de la date ===== */

    const dateObj =
        new Date(date + "T00:00:00");

    const dateFormatee =
        dateObj.toLocaleDateString(
            'fr-FR',
            {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }
        );


    /* ===== Message WhatsApp ===== */

    const message =
        `Bonjour Kingly_Corporation 👑\n\n` +

        `Je souhaite demander un devis pour la création d'un site internet.\n\n` +

        `👤 Nom : ${nom}\n` +

        `📅 Date souhaitée : ${dateFormatee}\n\n` +

        `📝 Description du projet :\n` +

        `${description}\n\n` +

        `Merci.`;



    /* ===== Ouverture de WhatsApp ===== */

    const whatsappURL =
        `https://wa.me/${numeroWhatsApp}` +
        `?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        '_blank'
    );

});

}
