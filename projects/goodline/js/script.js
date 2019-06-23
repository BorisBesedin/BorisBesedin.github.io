var devicePopup = document.querySelector(".device-popup");
var deviceBtn = document.querySelector(".features__button--device");
var deviceClose = document.querySelector(".device-popup .popup__close-btn");

var phonePopup = document.querySelector(".phone-popup");
var phoneBtn = document.querySelector(".features__button--phone");
var phoneClose = document.querySelector(".phone-popup .popup__close-btn");

var phone = document.querySelector(".form__phone");
var feedback = document.querySelector(".feedback");
var submit = document.querySelector(".feedback__submit");

phone.addEventListener("click", function() {
    phone.classList.add("form__phone--notfilled");
    phone.classList.remove("form__phone--filled");
});

feedback.addEventListener("submit", function() {
    feedback.classList.add("feedback--sent");
    submit.setAttribute("disabled","");
    submit.classList.add("feedback__submit--disabled");
});

//попапы

deviceBtn.addEventListener("click", function() {
    devicePopup.classList.add("popup--opened");
});

phoneBtn.addEventListener("click", function() {
    phonePopup.classList.add("popup--opened");
});

deviceClose.addEventListener("click", function() {
    devicePopup.classList.remove("popup--opened");
});

phoneClose.addEventListener("click", function() {
    phonePopup.classList.remove("popup--opened");
});

//слайдер

var slideIndex = 1;
function currentSlide(n) {
  	showSlide(slideIndex = n);
}
function plusSlides(n) {
  	showSlide(slideIndex += n);
}
function showSlide(n){
	var i;
	var slides = document.querySelectorAll(".slider__item");
	if (n > slides.length) {
		slideIndex = 1
	}    
  	if (n < 1) {
  		slideIndex = slides.length
  	}
	for (i = 0; i < slides.length; i++) {
		slides[i].className = "slider__item";
      	slides[i].className += " active";
  	}
  	slides[slideIndex-1].className = "slider__item";
  	slides[slideIndex-1].className += " slider__item--notactive";  
}
showSlide(slideIndex);