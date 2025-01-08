"// Smooth scrolling for navigation links"
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

function toggleMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('show-menu');
  }

  // Reveal experience cards on scroll
function revealExperienceCards() {
    const cards = document.querySelectorAll('.experience-card');
    const triggerBottom = window.innerHeight / 1.2;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealExperienceCards);