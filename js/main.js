// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Reveal animation on scroll
const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// WhatsApp Form Submit
const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "27789905606"; // no +, no spaces

    const text = `New Plumbing Request:
Name: ${name}
Phone: ${phone}
Problem: ${message}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(url, "_blank");
});
