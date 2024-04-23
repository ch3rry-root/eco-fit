function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "barra-superior") {
        x.className += " responsive";
    } else {
        x.className = "barra-superior";
    }
}
