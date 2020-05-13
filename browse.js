browseimage = document.getElementById("browseimage1");
description = document.getElementsById("hoverinfo");


browseimage.addEventListener("mouseover", onMouseOver);

function onMouseOver() {
    description.style.display = "block";
}