/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

var pElts = [];
var aElts = [];
var spanElts = [];

for (var i = 0; i < listeLiens.length; i++) {
    pElts.push(document.createElement("p"));
    aElts.push(document.createElement("a"));
    spanElts.push(document.createElement("span"));
    
    pElts[i].classList.add("lien");
    
    aElts[i].href = listeLiens[i].url;
    aElts[i].style.color = "#428bca";
    aElts[i].style.textDecoration = "none";
    aElts[i].style.fontWeight = "bold";
    aElts[i].appendChild(document.createTextNode(listeLiens[i].titre));
    
    spanElts[i].appendChild(document.createTextNode(" " + listeLiens[i].url));
    
    pElts[i].appendChild(aElts[i]);
    pElts[i].appendChild(spanElts[i]);
    pElts[i].appendChild(document.createElement("br"));
    pElts[i].appendChild(document.createTextNode("Ajouté par " + listeLiens[i].auteur));
    
    document.getElementById("contenu").appendChild(pElts[i]);
}