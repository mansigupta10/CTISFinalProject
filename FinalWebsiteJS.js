
essentialsbutton = document.getElementById("essentials");
dropdown = document.getElementById("dropDownMenu");

essentialsbutton.addEventListener("click", onButtonClick);

function onButtonClick() {
    dropdown.style.display = "flex";
}

