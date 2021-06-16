document.querySelectorAll(".mobile-nav-itmes").forEach(element => {
    element.addEventListener("click", e => {
        document.querySelectorAll(".mobile-nav-itmes").forEach(el => {
            el.style.textDecoration = "none";
            // el.style.border = "none";
        });
        e.target.style.textDecoration = "underline";
        // e.target.style.border = "2px dashed #000000";
       document.querySelectorAll(".item_box").forEach(m => {
           m.style.display = "none";
       })
        document.querySelector("."+e.target.id).style.display = "block";
        
    })
})