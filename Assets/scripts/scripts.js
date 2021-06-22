console.log("imgs are fetched from here: https://camdarwebdata.herokuapp.com/") // console host img site 
//used for drop down



document.querySelectorAll(".nav-main-itmes").forEach(element => {
  element.addEventListener("mouseover", e => {
      document.querySelectorAll(".nav-main-itmes").forEach(el => {
          el.style.textDecoration = "block";
         // el.style.border = "none";
         console.log(e.target.id);
      });
     // e.target.style.textDecoration = "underline";
      // e.target.style.border = "2px dashed #000000";
      //document.querySelector("."+e.target.id).style.display = "block";
      
  })
})
//mobile img and names







