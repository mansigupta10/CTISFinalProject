
essentialsbutton = document.getElementById("essentials");
dropdown = document.getElementById("dropDownMenu");

essentialsbutton.addEventListener("click", onButtonClick);

function onButtonClick() {
    dropdown.style.display = "flex";
}

/*contact page*/
name=document.getElementById("name");
email=document.getElementById("email");
comments=document.getElementById("comments");

function formfunction() {
    document.write("<h1>");
    document.write("Thank you!");
    document.write("</h1>");
    document.write("<h2>");
    document.write("Your response has been recorded");
    document.write("</h2>");
}