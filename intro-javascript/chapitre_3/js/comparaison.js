var nb1 = Number(prompt("Entrez un premier nombre :"));
var nb2 = Number(prompt("Entrez un deuxième nombre :"));

if (nb1 > nb2) {
    console.log("Le premier nombre est plus grand que le deuxième.");
}
else if (nb1 === nb2) {
    console.log("Le premier et le deuxième nombre sont égaux.");
}
else {
    console.log("Le deuxième nombre est plus grand que le premier.");
}