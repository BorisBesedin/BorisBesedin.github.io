const mainSlider = () => {
    const setSlider = function(slides, slider, prev, next) {
        const sliderBlock = document.querySelector(slider),
              slideList = document.querySelectorAll(slides),
              prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next),
              menuBtns = document.querySelectorAll('.menu__link');
        let slideIndex = 0;

        function setProgress(n) {
            const progress = document.querySelectorAll('.progress__item');

            progress.forEach(item => item.classList.remove('progress__item--active'));

            for (let i = 0; i <= n; i++) {
                progress[i].classList.add('progress__item--active');
            }
        }
        
        function showSlide(n) {
            slideList.forEach((item, i) => {
                item.classList.remove('main-slider__slide--active');
            });
            slideList[n].classList.add('main-slider__slide--active', 'fade');
            setProgress(n);
        }

        function nextSlide(n) {
            slideIndex+=n;            
            if (slideIndex > slideList.length - 1) {
                slideIndex = 0;
            }
    
            if (slideIndex < 0) {
                slideIndex = slideList.length - 1;
            }
            showSlide(slideIndex);
        }

        showSlide(slideIndex);

        prevBtn.addEventListener('click', () => {
            nextSlide(-1);
            slideList[slideIndex].classList.remove('slideInRight');
            slideList[slideIndex].classList.add('slideInLeft');
        });
        nextBtn.addEventListener('click', () => {
            nextSlide(1);
            slideList[slideIndex].classList.remove('slideInLeft');
            slideList[slideIndex].classList.add('slideInRight');
        });

        menuBtns.forEach((button, i) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                slideIndex = i;
                showSlide(slideIndex);
                document.querySelector('.menu__list').classList.remove('menu__list--opened');
                document.querySelector('.menu__toggle').classList.remove('menu__toggle--active');
            });
        });
    };

    setSlider('.main-slider__slide',
              '.main-slider__slides', 
              '.main-slider__button--prev', 
              '.main-slider__button--next');
};

export default mainSlider;