function MobileDrop() {
    let dropdown = document.getElementById("myDIV");
    let boxeffect = document.getElementById("p");
    dropdown.style.display == "none"
    if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    boxeffect.style.backgroundColor= "black";
    } else {
    dropdown.style.display = "block";
    }
  }



