console.log("imgs are fetched from here: https://camdarwebdata.herokuapp.com/") // console host img site 
// used for the video player slideshow
//this is using 2 scrips i found on w3schools
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow buttons 
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto auto
//i just had to edit it a bit so the both work otherwise you get an erorr
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// used for auto slideshow user can sill use buttons but if video is ended it will skip to next slide
let slideIndexauto = 0;
showSlidesauto();

function showSlidesauto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlidesauto, 5000); // Change image every 2 seconds
}
//for tv images works the same as above but no next button

var OtherImg = 1;
showSlides2(OtherImg);  

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides-2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {OtherImg = 1}    
  if (n < 1) {OtherImg = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[OtherImg-1].style.display = "block";  
};
//home itmes does the same as above

let slideIndex3 = 1;
showSlides3(slideIndex3);

function currentSlide2(n) {
  showSlides3(slideIndex3 = n);
}
function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides-3");
  let dots3 = document.getElementsByClassName("dot-3");
  if (n > slides3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
  for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
}






