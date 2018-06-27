var nombreChoisi = Number(prompt("Entrez un nombre entre 50 et 100 :"));
var i = 0;

while (nombreChoisi < 50 || nombreChoisi > 100) {
    nombreChoisi = Number(prompt("Entrez un nombre entre 50 et 100 :"));
}