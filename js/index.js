const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const showMenu = document.querySelector('.header__menu');
    
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    showMenu.classList.toggle('active');
});
    