// Menu mobile
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Lien du questionnaire : une seule adresse à modifier dans config.js
const questionnaireLinks = document.querySelectorAll('[data-questionnaire]');
questionnaireLinks.forEach(link => {
  link.href = typeof QUESTIONNAIRE_URL !== 'undefined' ? QUESTIONNAIRE_URL : '#';
  link.target = '_blank';
  link.rel = 'noopener';
});
