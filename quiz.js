namebox = document.getElementById("namebox");
thename = document.getElementById("thename");
theform = document.getElementById("theform");
results = document.getElementById("results");
theintro = document.getElementById("theintro");
results = document.getElementById("results");

thebutton = document.getElementById("thebutton");
room1 = document.getElementById("room1");
room2 = document.getElementById("room2");
room3 = document.getElementById("room3");
thecolor1 = document.getElementById("thecolor1");
thecolor2 = document.getElementById("thecolor2");
thecolor3 = document.getElementById("thecolor3");
thecolor4 = document.getElementById("thecolor4");
thebedding1 = document.getElementById("thebedding1");
thebedding2 = document.getElementById("thebedding2");
thebedding3 = document.getElementById("thebedding3");
thebedding4 = document.getElementById("thebedding4");
thedesk1 = document.getElementById("thedesk1");
thedesk2 = document.getElementById("thedesk2");
thedesk3 = document.getElementById("thedesk3");
thedesk4 = document.getElementById("thedesk4");
thewall1 = document.getElementById("thewall1");
thewall2 = document.getElementById("thewall2");
thewall3 = document.getElementById("thewall3");
thewall4 = document.getElementById("thewall4");
thevibe1 = document.getElementById("thevibe1");
thevibe2 = document.getElementById("thevibe2");
thevibe3 = document.getElementById("thevibe3");
thevibe4 = document.getElementById("thevibe4");
therug1 = document.getElementById("therug1");
therug2 = document.getElementById("therug2");
therug3 = document.getElementById("therug3");
therug4 = document.getElementById("therug4");
thetime1 = document.getElementById("thetime1");
thetime2 = document.getElementById("thetime2");
thetime3 = document.getElementById("thetime3");
thetime4 = document.getElementById("thetime4");
thebudget1 = document.getElementById("thebudget1");
thebudget2 = document.getElementById("thebudget2");
thebudget3 = document.getElementById("thebudget3");
thebudget4 = document.getElementById("thebudget4");
thespirit1 = document.getElementById("thespirit1");
thespirit2 = document.getElementById("thespirit2");
thespirit3 = document.getElementById("thespirit3");
thespirit4 = document.getElementById("thespirit4");
if1 = document.getElementById("if1");
if2 = document.getElementById("if2");
if3 = document.getElementById("if3");
if4 = document.getElementById("if4");
if5 = document.getElementById("if5");
if6 = document.getElementById("if6");
if7 = document.getElementById("if7");
if8 = document.getElementById("if8");
if9 = document.getElementById("if9");
if10 = document.getElementById("if10");
if11 = document.getElementById("if11");


thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {
    theform.style.display = "none";
    results.style.display = "block";

    thename.innerHTML = "Hello, " + namebox.value;
    theintro.style.display = "block";
    
    if(document.getElementById("roommate1").checked) {
        room1.style.display = "block";
    }
    else if (document.getElementById("roommate2").checked) {
        room2.style.display = "block";
    }
    else {
        room3.style.display = "block";
    }

    if(document.getElementById("color1").checked) {
        thecolor1.style.display = "block";
    }
    else if (document.getElementById("color2").checked) {
        thecolor2.style.display = "block";
    }
    else if (document.getElementById("color3").checked) {
        thecolor3.style.display = "block";
    }
    else {
        thecolor4.style.display = "block";
    }

    if(document.getElementById("bedding1").checked) {
        thebedding1.style.display = "block";
    }
    else if (document.getElementById("bedding2").checked) {
        thebedding2.style.display = "block";
    }
    else if (document.getElementById("bedding3").checked) {
        thebedding3.style.display = "block";
    }
    else {
        thebedding4.style.display = "block";
    }

    if(document.getElementById("desk1").checked) {
        thedesk1.style.display = "block";
    }
    else if (document.getElementById("desk2").checked) {
        thedesk2.style.display = "block";
    }
    else if (document.getElementById("desk3").checked) {
        thedesk3.style.display = "block";
    }
    else {
        thedesk4.style.display = "block";
    }
    
    if(document.getElementById("wall1").checked) {
        thewall1.style.display = "block";
    }
    else if (document.getElementById("wall2").checked) {
        thewall2.style.display = "block";
    }
    else if (document.getElementById("wall3").checked) {
        thewall3.style.display = "block";
    }
    else {
        thewall4.style.display = "block";
    }
    
    if(document.getElementById("vibe1").checked) {
        thevibe1.style.display = "block";
    }
    else if (document.getElementById("vibe2").checked) {
        thevibe2.style.display = "block";
    }
    else if (document.getElementById("vibe3").checked) {
        thevibe3.style.display = "block";
    }
    else {
        thevibe4.style.display = "block";
    }

    if(document.getElementById("rug1").checked) {
        therug1.style.display = "block";
    }
    else if (document.getElementById("rug2").checked) {
        therug2.style.display = "block";
    }
    else if (document.getElementById("rug3").checked) {
        therug3.style.display = "block";
    }
    else {
        therug4.style.display = "block";
    }

    if(document.getElementById("vibe1").checked) {
        thevibe1.style.display = "block";
    }
    else if (document.getElementById("vibe2").checked) {
        thevibe2.style.display = "block";
    }
    else if (document.getElementById("vibe3").checked) {
        thevibe3.style.display = "block";
    }
    else {
        thevibe4.style.display = "block";
    }

    if(document.getElementById("budget1").checked) {
        thebudget1.style.display = "block";
    }
    else if (document.getElementById("budget2").checked) {
        thebudget2.style.display = "block";
    }
    else if (document.getElementById("budget3").checked) {
        thebudget3.style.display = "block";
    }
    else {
        thebudget4.style.display = "block";
    }

    if(document.getElementById("spirit1").checked) {
        thespirit1.style.display = "block";
    }
    else if (document.getElementById("spirit2").checked) {
        thespirit2.style.display = "block";
    }
    else if (document.getElementById("spirit3").checked) {
        thespirit3.style.display = "block";
    }
    else {
        thespirit4.style.display = "block";
    }

    othernotes.style.display = "block";
    
    if(document.getElementById("color4").checked && (document.getElementById("spirit3").checked || document.getElementById("spirit4").checked)) {
        if1.style.display = "block";
    }
    if(document.getElementById("vibe2").checked && (document.getElementById("desk1").checked || document.getElementById("desk3").checked)) {
        if2.style.display = "block";
    }
    if(document.getElementById("desk4").checked && document.getElementById("wall1").checked) {
        if3.style.display = "block";
    }
    if((document.getElementById("bedding2").checked || document.getElementById("vibe1").checked) && (document.getElementById("wall3").checked || document.getElementById("wall4").checked)) {
        if4.style.display = "block";
    }
    if(document.getElementById("desk1").checked && document.getElementById("vibe1").checked) {
        if5.style.display = "block";
    }
    if(document.getElementById("wall2").checked && (document.getElementById("time3").checked || document.getElementById("time4").checked)) {
        if6.style.display = "block";
    }
    if(document.getElementById("vibe4").checked && (document.getElementById("time2").checked || document.getElementById("time3").checked)) {
        if7.style.display = "block";
    }
    if((document.getElementById("room2").checked || document.getElementById("room3").checked) && (document.getElementById("time2").checked || document.getElementById("time3").checked)) {
        if8.style.display = "block";
    }
    if(document.getElementById("color2").checked && (document.getElementById("vibe4").checked || document.getElementById("desk2").checked)) {
        if9.style.display = "block";
    }
    if((document.getElementById("room2").checked || document.getElementById("room3").checked) && (document.getElementById("time2").checked || document.getElementById("time3").checked)) {
        if10.style.display = "block";
    }
    if((document.getElementById("room2").checked || document.getElementById("room3").checked) && (document.getElementById("time2").checked || document.getElementById("time3").checked)) {
        if11.style.display = "block";
    }
}
//&& document.getElementById("color1").checked)