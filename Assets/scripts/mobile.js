document.querySelectorAll(".mobile-nav-itmes").forEach(element => {
    element.addEventListener("click", e => {
        document.querySelectorAll(".mobile-nav-itmes").forEach(el => {
            el.style.textDecoration = "none";
            // el.style.border = "none";
        });
        e.target.style.textDecoration = "underline";
        // e.target.style.border = "2px dashed #000000";
        console.log (e.target.id)
    })
})