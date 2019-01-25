var writeUs = document.querySelector(".modal-write-us");
var writeUsBnt = document.querySelector(".to-write-us-btn");
var close = writeUs.querySelector(".modal-close");
var username = writeUs.querySelector("[name=name]");

var mapModal = document.querySelector(".modal-map");
var mapBtn = document.querySelector(".map-btn");
var closeMap = mapModal.querySelector(".modal-close");

var cartNumber = document.querySelector(".cart-number");
var favoritesNumber = document.querySelector(".favorites-number");

var cartCounter = 0;
var favoritesCounter = 0;

var cartBtn = document.querySelector(".cart-btn");
var favoritesBtn = document.querySelector(".favorites-btn");
var skip = document.querySelector(".go-on-btn");

var buyItemBtns = document.querySelectorAll(".buy-item-btn");
var cartItemBtns = document.querySelectorAll(".cart-item-btn");

var modalCart = document.querySelector(".modal-cart");
var cartClose = modalCart.querySelector(".modal-close");

var slideIndex = 1;
var promoSlideIndex = 1;

writeUsBnt.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUs.classList.add("modal-show");
	username.focus();
});
close.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUs.classList.remove("modal-show");
});

mapBtn.addEventListener("click", function(evt){
	evt.preventDefault();
	mapModal.classList.add("modal-show");
});
closeMap.addEventListener("click", function(evt){
	evt.preventDefault();
	mapModal.classList.remove("modal-show");
});

for (var i = 0; i < buyItemBtns.length; i++) {	
	var buyItemBtn = buyItemBtns[i];	
	buyItemBtn.addEventListener("click", function(evt){
		evt.preventDefault();
		modalCart.classList.add("modal-show");
		cartCounter ++;
		cartBtn.classList.add("added");
		cartNumber.innerHTML = cartCounter;
	});	
}
for (var i = 0; i < cartItemBtns.length; i++) {	
	var cartItemBtn = cartItemBtns[i];	
	cartItemBtn.addEventListener("click", function(evt){
		evt.preventDefault();		
		favoritesCounter ++;
		favoritesBtn.classList.add("added");
		favoritesNumber.innerHTML = favoritesCounter;
	});	
}
cartClose.addEventListener("click", function(evt){
	evt.preventDefault();
	modalCart.classList.remove("modal-show");
});
skip.addEventListener("click", function(evt){
	evt.preventDefault();
	modalCart.classList.remove("modal-show");
});

function currentSlide(n) {
  	showSlide(slideIndex = n);
}
function showSlide(n){
	var i;
	var slides = document.querySelectorAll(".service-slide");
	var tabs = document.querySelectorAll(".services-slider-btn");
	for (i = 0; i < slides.length; i++) {
      	slides[i].style.display = "none";  
  	}
  	for (i = 0; i < tabs.length; i++) {
     	tabs[i].className = tabs[i].className.replace(" active", "");
  	}
  	slides[slideIndex-1].style.display = "block";  
  	tabs[slideIndex-1].className += " active";
}
showSlide(slideIndex);

function promoCurrentSlide(n) {
  	promoShowSlide(promoSlideIndex = n);
}
function plusSlides(n) {
  	promoShowSlide(promoSlideIndex += n);
}
function promoShowSlide(n){
	var i;
	var promoSlides = document.querySelectorAll(".slide");
	var dots = document.querySelectorAll(".dot");
	if (n > promoSlides.length) {
		promoSlideIndex = 1
	}    
  	if (n < 1) {
  		promoSlideIndex = promoSlides.length
  	}
	for (i = 0; i < promoSlides.length; i++) {
      	promoSlides[i].style.display = "none";  
  	}
  	for (i = 0; i < dots.length; i++) {
     	dots[i].className = dots[i].className.replace(" active", "");
  	}
  	promoSlides[promoSlideIndex-1].style.display = "block";  
  	dots[promoSlideIndex-1].className += " active";
}
promoShowSlide(promoSlideIndex);




