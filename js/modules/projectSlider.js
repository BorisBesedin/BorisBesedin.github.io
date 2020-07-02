const projectSlider = () => {
    const slider = document.querySelector('.projects__list'),
          slides = slider.children,
          next = document.querySelector('.projects__next'),
          prev = document.querySelector('.projects__prev');

    function setActive() {
        slides.forEach(item => {
            item.classList.remove('projects__item--active', 'slideUp', 'slideDown');
        });
        slides[0].classList.add('projects__item--active', 'slideUp');
    }

    next.addEventListener('click', () => {
        slides[0].classList.add('slideDown');
        setTimeout(() => {
            slider.appendChild(slides[0]);
            setActive();
        }, 350);        
    });

    prev.addEventListener('click', () => {
        slider.insertBefore(slides[slides.length - 1], slides[0]);
        setActive();
    });
};

export default projectSlider;