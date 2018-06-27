var Contact = {
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    listeContact: function() {
        var liste = "Nom: " + this.nom + " , Prénom: " + this.prenom;
        return liste;   
    },
    lister: function() {
        console.log("Voici la liste de tous les contacts");
        contacts.forEach(function(contact) {
            console.log(contact.listeContact()); 
        });
    },
    ajouter: function() {
        var nom = prompt("Saisir le nom du nouveau contact: ");
        var prenom = prompt("Saisir le prénom du nouveau contact: ");
        var nouveauContact = Object.create(Contact);
        nouveauContact.init(nom, prenom);
        contacts.push(nouveauContact);
        console.log("Nouveau contact ajouté");
    }
};

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

var contacts = [contact1, contact2];

var options = ["1 : Lister les contacts", "2 : Ajouter un nouveau contact", "0 : Quitter"];
var optionSaisie = "";

console.log("Bienvenue dans le gestionnaire des contacts");
while (optionSaisie !== "0") {
    options.forEach(function(option) {
        console.log(option);
    });
    optionSaisie = prompt("Choisissez une option: ");
    if (optionSaisie === "1") {
        Contact.lister();
    } else if (optionSaisie === "2") {
        Contact.ajouter();
    }
    console.log("\n");
}
if (optionSaisie === "0") {
    console.log("A bientôt ;)");
}