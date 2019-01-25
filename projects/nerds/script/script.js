var writeUsModal = document.querySelector(".write-us-modal");
var writeUsBtn = document.querySelector(".write-us-btn");
var close = document.querySelector(".close-btn");

writeUsBtn.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUsModal.classList.add("modal-show");
});
close.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUsModal.classList.remove("modal-show");
});