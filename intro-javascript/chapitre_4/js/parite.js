var nombreChoisi = Number(prompt("Veuillez entrer un nombre :"));

for (var i = 1; i <= nombreChoisi; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }
    else {
        console.log(i + " est impair");
    }
}