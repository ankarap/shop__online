const modal = document.querySelector(".account__modal");
const trigger = document.querySelector(".account__trigger");
const closeButton = document.querySelector(".account__close");
function toggleModal() {
	modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/*--------------------------------------------------*/
var swiper = new Swiper(".swiper", {
	scrollbar:{
		el:'.swiper-scrollbar',
		draggable:true,
	},
	autoplay:{
		delay:1200
	},
	
});
