/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
var Contact =
{
    init: function (nom, prenom)
    {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function ()
    {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom + ".\n";
        return description;
    }
};

console.log("Bienvenue dans le gestionnaire de contacts");

var contacts = [];
            
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nèlsonne", "Mélodie");

contacts.push(contact1);
contacts.push(contact2);

var boucle = true;
while (boucle === true)
{
    console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
    
    var choix = Number(prompt("Choisisez une option :"));
    
    if (choix === 1)
    {
        console.log("Voici la liste de vos contacts :");
        
        contacts.forEach(function (contact)
        {
            console.log(contact.decrire());
        });
    }
    else if (choix === 2)
    {
        var boucle2 = true;
        while (boucle2 === true)
        {
            {
                var nomContact = prompt("Entrez le nom du nouveau contact :");
                var prenomContact = prompt("Entrez le prénom du nouveau contact :");

                if (nomContact === "" || prenomContact === "")
                {
                    console.log("Désolé, mais vous avez oublié le nom ou/et le prénom...");
                }
                else
                {
                    boucle2 = false;
                }
            }
        }
        
        var nouvContact = Object.create(Contact);
        nouvContact.init(nomContact, prenomContact);
        
        contacts.push(nouvContact);
        
        console.log("Le nouveau contact a été ajouté.");    
    }
    else if (choix === 0)
    {
        console.log("\n\nAu revoir !...");
        boucle = false;
    }
    else
    {
        console.log("Désolé, mais vous avez du faire une erreur...");
    }
}