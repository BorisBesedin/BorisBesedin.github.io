const slider = () => {
    const setSlider = function(slides, slider, prev, next) {
        const sliderBlock = document.querySelector(slider),
            slideList = document.querySelectorAll(slides);
        let slideIndex = 0;

        function showSlide(n) {
            slideList.forEach((item, i) => {
                item.style.display = 'none';
                item.classList.add('fadeIn');
            });
            slideList[n].style.display = 'flex'; 
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

        try {
            const prevBtn = document.querySelector(prev),
                nextBtn = document.querySelector(next);

            prevBtn.addEventListener('click', () => {
                nextSlide(-1);
            });
            nextBtn.addEventListener('click', () => {
                nextSlide(1);
            });
        } catch(e) {}
    };

    setSlider('.price__slide', '.price__slides', '.price__prev', '.price__next');
    setSlider('.info-popup__slide', '.info-popup__slides', '.info-popup__prev', '.info-popup__next');
};

export default slider;