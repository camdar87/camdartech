console.log("imgs are fetched from here: https://camdarwebdata.herokuapp.com/") // console host img site 
//used for drop down



// document.querySelectorAll(".nav-main-itmes").forEach(element => {
//   element.addEventListener("mouseover", e => {
//       document.querySelectorAll(".nav-main-itmes").forEach(el => {
//           el.style.textDecoration = "block";
//           // el.style.border = "none";
//       });
//      // e.target.style.textDecoration = "underline";
//       // e.target.style.border = "2px dashed #000000";
//      document.querySelectorAll(".item-drop-down").forEach(m => {
//        m.style.display = "block";
//        console.log(e.target.id)
//      })
//      // document.querySelector("."+e.target.id).style.display = "block";
      
//   })
// })
//mobile img and names

//drop down items
document.querySelectorAll(".Side-menu").forEach(element => {
  element.addEventListener("mouseover", e => {
      document.querySelectorAll(".Side-menu").forEach(el => {
         el.style.border = "block";
      });
     // e.target.style.textDecoration = "underline";
      // e.target.style.border = "2px dashed #000000";
     document.querySelectorAll(".pick-item-nav").forEach(m => {
       m.style.display = "none";
       console.log(e.target.id)
     })
      document.querySelector("."+e.target.id).style.display = "block";
      
  })
})






