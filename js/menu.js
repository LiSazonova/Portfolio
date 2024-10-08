const burgerIcon = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mob-menu');
const burgerToggleIcon = document.querySelector('.menu-toggle-icon');
const closeIcon = document.querySelector('.menu-toggle');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
};

burgerIcon.addEventListener('click', toggleMobileMenu);
closeIcon.addEventListener('click', toggleMobileMenu);