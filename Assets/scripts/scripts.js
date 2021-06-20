console.log("imgs are fetched from here: https://camdarwebdata.herokuapp.com/") // console host img site 
//used for drop down
document.querySelectorAll(".nav-main-itmes").forEach(element => {
  element.addEventListener("mouseover", e => {
      document.querySelectorAll(".nav-main-itmes").forEach(el => {
        e.target.style.display = "none";


      });

     document.querySelectorAll(".item_box").forEach(m => {
         m.style.display = "none";
     })
     // document.querySelector("."+e.target.id).style.display = "block";

      
  })
})
//mobile img and names






