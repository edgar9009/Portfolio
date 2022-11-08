const play = document.querySelector(".play");
const video = document.querySelector(".about_video video");

play.addEventListener("click", () => {
	play.classList.add('play-hidden');
	video.play();
	video.setAttribute('controls', 'controls');
});

let header=document.querySelector("header");

window.addEventListener("scroll", () => {
	if(window.scrollY > 1) {
		header.classList.add("scroling");

	}
	else{
		header.classList.remove("scroling");
		

	}
	});


