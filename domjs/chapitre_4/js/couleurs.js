var couleurTexteChoisie = prompt("Veuillez choisir une couleur de texte (en anglais ou rgb) :");
var couleurFondChoisie = prompt("Veuillez choisir une couleur de fond de texte (en anglais ou rgb) :");

var divs = document.getElementsByTagName("div");

for (var i = 0; i < divs.length; i++) {
    divs[i].style.color = couleurTexteChoisie;
    divs[i].style.backgroundColor = couleurFondChoisie;
}