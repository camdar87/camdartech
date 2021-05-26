/*document.querySelector("#M-item-1").addEventListener("click",e => {
    console.log("test")
    let underline = document.getElementById("M-item-2");
    let Start = document.getElementById("M-item-1");
    let underline3 = document.getElementById("M-item-3");
    let underling4 = document.getElementById("M-item-4")
    let underling5 = document.getElementById("M-item-5")
    underline.style.textDecoration = "none"; 
    Start .style.textDecoration = "underline";
    underline3.textDecoration = "none"
    underling4.style.textDecoration = "none";
    underling5.style.textDecoration = "none"
})
document.querySelector("#M-item-2").addEventListener("click",e => {
    console.log("test")
    let underline = document.getElementById("M-item-2");
    let Start = document.getElementById("M-item-1");
    let underline3 = document.getElementById("M-item-3");
    let underling4 = document.getElementById("M-item-4")
    let underling5 = document.getElementById("M-item-5")
    Start.style.textDecoration = "none"; 
    Start.style.border = "none"
    underline.style.textDecoration = "underline";
    underline.style.border = ""
    underline3.style.textDecoration = "none";
    underling4.style.textDecoration = "none";
    underling5.style.textDecoration = "none"
})
document.querySelector("#M-item-3").addEventListener("click",e => {
    console.log("test")
    let underline = document.getElementById("M-item-2");
    let Start = document.getElementById("M-item-1");
    let underline3 = document.getElementById("M-item-3");
    let underling4 = document.getElementById("M-item-4")
    let underling5 = document.getElementById("M-item-5")
    Start.style.textDecoration = "none"; 
    underline.style.textDecoration = "none";
    underline3.style.textDecoration = "underline";
    underling4.style.textDecoration = "none";
    underling5.style.textDecoration = "none"

})
document.querySelector("#M-item-4").addEventListener("click",e => {
    console.log("test")
    let underline = document.getElementById("M-item-2");
    let Start = document.getElementById("M-item-1");
    let underline3 = document.getElementById("M-item-3");
    let underling4 = document.getElementById("M-item-4")
    let underling5 = document.getElementById("M-item-5")
    underline.style.textDecoration = "none";
    Start.style.textDecoration = "none"; 
    underline3.style.textDecoration = "none";
    underling4.style.textDecoration = "underline";
    underling5.style.textDecoration = "none"
})
document.querySelector("#M-item-5").addEventListener("click",e => {
    console.log("test")
    let underline = document.getElementById("M-item-2");
    let Start = document.getElementById("M-item-1");
    let underline3 = document.getElementById("M-item-3");
    let underling4 = document.getElementById("M-item-4")
    let underling5 = document.getElementById("M-item-5")
    underline.style.textDecoration = "none";
    Start.style.textDecoration = "none"; 
    underline3.style.textDecoration = "none";
    underling4.style.textDecoration = "none";
    underling5.style.textDecoration = "underline"
})*/


document.querySelectorAll(".mobile-nav-itmes").forEach(element => {
    element.addEventListener("click", e => {

        console.log("test",e.target)
        let underline = document.getElementById("M-item-2");
        let Start = document.getElementById("M-item-1");
        let underline3 = document.getElementById("M-item-3");
        let underling4 = document.getElementById("M-item-4")
        let underling5 = document.getElementById("M-item-5")
        if ( e.target = "M-item-1"){
            underline.style.textDecoration = "underline";
            Start.style.textDecoration = "none";
            Start.style.border = "none"
            console.log("hello world")
        }

        
    })
})