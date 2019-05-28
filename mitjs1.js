document.getElementById("tilOverskrift").addEventListener("click", function () {
	document.getElementById("overskrift").scrollIntoView(true);
});

/* Nedenstående script er lånt fra mobilefirst */
function menuToggle() {
	var x = document.getElementById("menu-toggle");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
