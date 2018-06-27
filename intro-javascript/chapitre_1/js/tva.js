var prixHT = Number(prompt("Entrez le prix hors taxes :"));
var prixTTC = prixHT * 0.196 + prixHT;
console.log(prixTTC + "$");