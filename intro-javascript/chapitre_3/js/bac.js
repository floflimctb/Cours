var moyenne = Number(prompt("Entrez votre moyenne au Bac :"));

if (moyenne < 10) {
    console.log("Vous n'avez pas votre Bac, dommage, essaie encore.");
}
else if (moyenne < 12) { // moyenne >= 10 && > 12
    console.log("Vous avez votre Bac.");
}
else { // moyenne >= 12
    console.log("Vous avez votre Bac avec mention.");
}