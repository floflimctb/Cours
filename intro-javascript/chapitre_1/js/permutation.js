var nombre1 = 5;
var nombre2 = 3;

// Tapez votre code ici (sans rien modifier d'autre !)
var permutation1vers2 = nombre2;
var permutation2vers1 = nombre1;
nombre1 = permutation1vers2;
nombre2 = permutation2vers1;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

/*CORRECTION : 

*/nombre1 = nombre1 + nombre2;
nombre2 = nombre1 - nombre2;
nombre1 = nombre1 - nombre2;/*

ou

*/var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;/*