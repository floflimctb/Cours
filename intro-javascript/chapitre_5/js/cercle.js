/*function perimetre(rayon) {
    var perimetre = Math.PI * 2 * rayon;
    return perimetre;
}

function aire(rayon) {
    var aire = Math.PI * rayon * rayon;
    return aire;
}

var r = Number(prompt("Veuillez choisir le rayon :"));
console.log("Pour un cercle de rayon de " + r + ", le périmètre est de " + perimetre(r) + " et l'aire est de " + aire(r) + ".");*/

function perimetre(rayon) {
    return 2 * rayon * Math.PI;
}

function aire(rayon) {
    return Math.pow(rayon, 2) * Math.PI;
}

var r = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre(r));
console.log("Son aire vaut " + aire(r));