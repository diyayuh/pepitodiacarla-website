// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});