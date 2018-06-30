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

// -------------------------------------------------
// AJOUT DES LIENS A LA PAGE WEB
// -------------------------------------------------

//Creation de la liste non-ordonnée
var descrList = document.createElement("dl");
//Retrait des puces au style de la liste
descrList.style.listStyleType = "none";
descrList.style.marginLeft = "Opx";

//Pour chaque lien, on ajoute les informations à la liste 
listeLiens.forEach(function(lien){
    
    //Creation des éléments
    var liElt = document.createElement("dt");
    var aElt = document.createElement("a");
    var pElt = document.createElement("p");
    var urlTextElt = document.createElement("span");

    //Attribution du contenu textuel aux élements
    aElt.textContent = lien.titre;
    aElt.href = lien.url;
    pElt.textContent = lien.auteur ; 
    urlTextElt.textContent = lien.url ; 

    //Attribution au bloc graphique sa classe de style
    liElt.classList.add("lien");
    // On modifie le style du lien
    aElt.style.color = "#428bca"; //Passage en bleu
    aElt.style.fontSize = "130%"; //Agrandissement des caractères
    aElt.style.fontWeight = "bold"; //Mise en gras
    aElt.style.textDecoration = "none"; //Retrait du soulignement
    // On modifie le style l'url "informatif"
    urlTextElt.style.color = "black";
    urlTextElt.style.marginLeft = "10px";

    //Assemblage des élements
    aElt.appendChild(urlTextElt);
    liElt.appendChild(aElt);
    liElt.appendChild(pElt);
    descrList.appendChild(liElt);

});



//On ajoute la liste à la page (à l'élément div)

document.getElementById("contenu").appendChild(descrList);