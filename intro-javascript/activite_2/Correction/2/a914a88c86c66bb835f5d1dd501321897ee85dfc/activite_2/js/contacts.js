/* 
Activité : gestion des contacts
*/

// Prototype pour créer un contact
var Contact = {
	init: function (prenom, nom) {
		this.prenom = prenom;
		this.nom = nom;
	}
};

// Création du tablea des contacts
var contacts = [];

// Initialisation des 2 contacts par défaut dans le tableau des contacts
var contact = Object.create(Contact);
contact.init("Carole", "Lévisse");
contacts.push(contact);
contact = Object.create(Contact);
contact.init("Mélodie", "Nelsonne");
contacts.push(contact);

// Fonction qui ajoute un contact au tableau des contacts
function ajouterContact() {
	var contact = Object.create(Contact);
	var prenom = prompt("Prénom ?");
	var nom = prompt("Nom ?");
	contact.init(prenom, nom);
	contacts.push(contact);
	console.log("Le nouveau contact à bien été ajouté.");
}

// Fonction qui affiche le menu des options pour l'utilisateur
function afficherMenu() {
	console.log("1 - Afficher la liste des contacts.");
	console.log("2 - Ajouter un contact.");
	console.log("0 - Quitter.");
}

console.log("Bienvenue dans le gestionnaire des contacts");

// Boucle infinie, elle casse quand l'utilisateur saisie 0
while (true) {
	afficherMenu();
	var choixUtilisateur = prompt("Choisissez une option :");

	if (choixUtilisateur === "0") {
		console.log("Au revoir !");
		break; // Sort de la boucle
	} else if (choixUtilisateur === "1") {
		// Affiche chaque objet de la table des contacts
		contacts.forEach(function (contact) {
			console.log("Prénom : " + contact.prenom + ", Nom : " + contact.nom);
		});
	} else if (choixUtilisateur === "2") {
		ajouterContact();
	}
}
