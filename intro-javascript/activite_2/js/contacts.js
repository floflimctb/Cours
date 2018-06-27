var contactObj = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    
    decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

var carole = Object.create(contactObj);
carole.init("Lévisse", "Carole");
var melodie = Object.create(contactObj);
melodie.init("Nelsonne", "Mélodie");

var contacts = [carole, melodie];

function lister (cont) {
    console.log("\nVoici la liste de tous vos contacts :");
    cont.forEach(function (contact) {
        console.log(contact.decrire());
    })
}

function ajouter () {
    var nouveauContact = Object.create(contactObj);
    nouveauContact.nom = prompt("Veuillez rentrer le nom :");
    nouveauContact.prenom = prompt("Veuillez rentrer le prénom :");
    contacts.push(nouveauContact);
    console.log("\nVous avez ajouté " + nouveauContact.prenom + " " + nouveauContact.nom);
}

function enonceChoix () {
    var enonce = "\n1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter";
    return enonce;
}

console.log("Bienvenue dans le gestionnaire des contacts !");
console.log(enonceChoix());

var choix = Number(prompt("Choisissez une option :"));

while (choix !== 0) {
    if (choix === 1) {
        lister(contacts);
        console.log(enonceChoix());
        choix = Number(prompt("Choisissez une option :"));
    }
    else if (choix === 2) {
        ajouter();
        console.log(enonceChoix());
        choix = Number(prompt("Choisissez une option :"));
    }
    else {
        console.log("\nLe choix saisi n'est pas valable, veuillez recommencer");
        console.log(enonceChoix());
        choix = Number(prompt("Choisissez une option :"));
    }
}

console.log("\nMerci et à la prochaine fois !");