const slider = () => {
    const setSlider = function(slides, slider, prev, next, dotsSelector) {
        const sliderBlock = document.querySelector(slider),
              slideList = document.querySelectorAll(slides),
              outline = document.querySelector('.slider__moving-outline circle'),
              dots = document.querySelectorAll(dotsSelector),
              prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next),
              timeOut = 10000,
              touchBorder = 160;

        let slideIndex = 0;        

        function showSlide(n) {
            slideList.forEach((item, i) => {
                item.classList.remove('slider__slide--show');
                item.classList.add('fadeIn');
            });
            dots.forEach(dot => dot.classList.remove('slider__dot--active'))

            dots[n].classList.add('slider__dot--active');
            slideList[n].classList.add('slider__slide--show');
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

        prevBtn.addEventListener('click', () => {
            nextSlide(-1);
        });
        nextBtn.addEventListener('click', () => {
            nextSlide(1);
        }); 
        
        function setAutoChange() {
            outline.classList.add('dash')
            const interval = setInterval(() => { 
                nextSlide(1);
            }, timeOut)

            nextBtn.addEventListener('mouseover', () => {
                outline.classList.remove('dash')
                clearInterval(interval)
            })
        }  
        nextBtn.addEventListener('mouseout', () => {
            setAutoChange()
        })
        
        showSlide(slideIndex);
        setAutoChange()  
        
        sliderBlock.addEventListener('touchstart', function(evt) {
            let startCoords = evt.targetTouches[0].clientX;
          
            function onTouchMove(moveEvt) {
                let slide = sliderBlock.querySelector('.slider__slide--show'),
                    shift = startCoords - moveEvt.targetTouches[0].clientX;
    
                slide.classList.add('slider__slide--touch');
                startCoords = moveEvt.targetTouches[0].clientX;
                slide.style.left = (slide.offsetLeft - shift) + 'px';
                
    
                if (slide.offsetLeft < -touchBorder) {
                    nextSlide(1);            
                    onTouchEnd();
                }
    
                if (slide.offsetLeft > touchBorder) {
                    nextSlide(-1);            
                    onTouchEnd();
                }
            }
    
            function onTouchEnd(upEvt) {  
   
                document.removeEventListener('touchmove', onTouchMove);
                document.removeEventListener('touchend', onTouchEnd);
    
                
                slideList.forEach(item => {
                    item.style.left = 0 + 'px';
                    item.classList.remove('main-slider__slide--touch');                    
                });
            }
    
            document.addEventListener('touchmove', onTouchMove);
            document.addEventListener('touchend', onTouchEnd);
        });
    };


    setSlider('.slider__slide', '.slider__slides', '.slider__prev', '.slider__next', '.slider__dot')
};

export default slider;