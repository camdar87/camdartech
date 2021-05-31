document.querySelectorAll(".side-menu-button-js").forEach(element => {
    element.addEventListener("click", b => {
        document.querySelectorAll(".side-menu-button-js").forEach(ell => {
            ell.style.display = "block";
            ell.style.border = "none";
            console.log ("test");
        });
        b.target.style.textDecoration = "underline";
        b.target.style.border = "2px dashed #000000";
        console.log (e.target.id)
    })
})