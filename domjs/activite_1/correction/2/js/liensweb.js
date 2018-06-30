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

// Boucle sur la liste de lien
for (var i = 0; i < listeLiens.length;i++){

    // CREATION DES PARAGRAPHES
    var paragraphe = document.createElement("p");
        
        // Définition du style des paragraphes
        paragraphe.style.backgroundColor = "white";     // Fond blanc


    //CREATION DES ELEMENTS COMPOSANT LE PARAGRAPHE    
    // LES TITRES CLIQUABLES
    var titreP = document.createElement("a");           
    titreP.textContent = listeLiens[i].titre;
    titreP.href = listeLiens[i].url;
    titreP.id = "titre";

        // Définition du style des titres
        titreP.style.color = "#428bca";                 // Police en bleu
        titreP.style.fontSize = "x-large";              // taille de police
        titreP.style.fontWeight = "bold";               // Passage en gras
        titreP.style.textDecoration = "none";           // Retrait du soulignement

    
    //LES URL
    var urlP = document.createElement("a");
    urlP.textContent = listeLiens[i].url;
    urlP.href = listeLiens[i].url;

        // définition du style des URL
        urlP.style.color = "black";                     // Police en noir


    // RATTACHEMENT DES COMPOSANTES AU PARAGRAPHE
    paragraphe.appendChild(titreP);
    paragraphe.innerHTML += " ";                    // Ajout d'un espace entre le titre et l'URL
    paragraphe.appendChild(urlP);


    // AJOUT DE L'AUTEUR AU PARAGRAPHE
    paragraphe.innerHTML += "<br/>Ajouté par " + listeLiens[i].auteur;


    //RATTACHEMENT DU PARAGRAPHE AU CONTENU
    document.getElementById("contenu").appendChild(paragraphe);

}
            
