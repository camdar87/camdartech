
document.querySelectorAll(".mobile-nav-itmes").forEach(element => {
    element.addEventListener("click", e => {
        document.querySelectorAll(".mobile-nav-itmes").forEach(el => {
            el.style.textDecoration = "none";
        });
        e.target.style.textDecoration = "underline";
    })
})