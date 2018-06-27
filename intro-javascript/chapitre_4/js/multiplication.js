var nombreChoisi = Number(prompt("Quelle table de multiplication voulez-vous?"));
var resultat = 0;
console.log("Voici la table de mutliplication de " + nombreChoisi);

for (var i = 1; i <= 10; i++) {
    resultat = nombreChoisi * i;
    console.log(nombreChoisi + " x " + i + " = " + resultat);
}