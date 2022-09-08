console.log('HELLO');

const test = () => {
	console.log('this is a test');
};

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".navbar-toggler");
const navToggler = document.querySelector(".navbar-toggle-icon");


navToggle.addEventListener("click", () => {
	const visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
		navToggler.className = 'navbar-toggle-icon open';
		
	} else {
		nav.setAttribute("data-visible", false);
		navToggler.className = 'navbar-toggle-icon';
	}

	console.log(visibility)

})