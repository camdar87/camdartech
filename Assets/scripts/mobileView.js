function w3_open() {
    document.getElementById("main-nav-menus-mobile-js").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("main-nav-menus-mobile-js").style.display = "none";
  }

  var OtherImg = 1;
  showSlides2(OtherImg);
  
  function currentSlide(n) {
    showSlides2(OtherImg = n);
  }


  
