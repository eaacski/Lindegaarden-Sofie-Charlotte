
document.getElementById("tilOverskrift").addEventListener("click", function(){
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

/*Følgende script er lånt fra W3 Schools*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}









