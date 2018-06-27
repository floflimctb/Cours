var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};

var chiens = [];

var chien1 = Object.create(Chien);
var chien2 = Object.create(Chien);
var chien3 = Object.create(Chien);

chien1.init("Crokdur", "mâtin de Naples", 75);
chien2.init("Pupuce", "bichon", 22);
chien3.init("Médor", "labrador", 58);

chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);

console.log("Le chenil a " + chiens.length + " chien(s)");

chiens.forEach(function(chien){
   console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + ". Il aboie : " + chien.aboyer()); 
});