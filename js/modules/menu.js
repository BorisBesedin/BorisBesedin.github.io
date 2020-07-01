const menu = () => {
    const toggle = document.querySelector('.menu__toggle'),
          menu = document.querySelector('.menu__list');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('menu__list--opened');
        toggle.classList.toggle('menu__toggle--active');
    });    
};

export default menu;