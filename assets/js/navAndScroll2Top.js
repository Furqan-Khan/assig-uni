const navIcon = document.getElementsByClassName('menu-icon')[0];
const header = document.getElementsByTagName('header')[0];
var s2tBTN = document.getElementById("scroll2Top");
const body = document.body;
let lastScroll = 0;
navIcon.addEventListener("click", function() {
    header.classList.toggle('activeNav');
});

document.onscroll = function (){
    const currentScroll = window.pageYOffset;
	header.classList.remove('activeNav');
    if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        s2tBTN.style.opacity = 1;
    }else{
        s2tBTN.style.opacity = 0;
    }
}

