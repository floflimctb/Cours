var texte = prompt("On joue au ni oui ni non ?");

while (texte !== "oui" && texte !== "non") {
    texte = prompt("Vous jouez bien, on continue ?");
} 

alert("Vous avez perdu !");