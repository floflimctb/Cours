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

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dt> avec sa définition 

listeLiens.forEach(function (liens) {
    var dlElt = document.createElement("dl");
    var dtElt = document.createElement("dt");
    
    dtElt.style.backgroundColor = "white";//Utilisation du style CSS Backgroundcolor pour mettre le fond du texte en blanc
      
    var div = document.createElement("div"); // création d'une balise div pour placer le titre
    div.textContent = liens.titre + " ";// ici on prend la fonction liens et on la lie au terme titre de la variable
    div.style.display = "inline";// On met le texte en inline pour pouvoir afficher les styles CSS
    div.style.color = "#428bca"; // On applique la couleur au terme titre
    div.style.marginLeft = "10px"; // On applique une marge extérieur gauche à 10px
    div.style.fontWeight = "bold";// On utilise le style CSS en gras
    
    var urlElt = document.createElement("a"); // création d'une balise a pour créer le lien href
    urlElt.textContent = liens.url;
    urlElt.href = liens.url;
    urlElt.style.display = "inline";//Style inline qui permet d'aligne l'url à côté du terme titre
    urlElt.style.textDecoration = "none";//On utilise le style CSS pour enlever le trait de soulignement du lien url
    urlElt.style.color = "black";// Ici on a mis le texte du lien url en noir
        
    var p = document.createElement("p"); // création d'une balise p pour ajouter le texte 
    p.textContent = "Ajouté par " + liens.auteur;//Ajout du texte au terme auteur
    p.style.marginLeft = "10px"; // idem que pour le terme titre
    p.style.padding = "0px 0px 10px 0px"; // Marge extérieur qui s'applique au terme auteur
        
    
    // indique où l'on veut placer la modification du DOM
    dtElt.appendChild(div);
    dtElt.appendChild(urlElt);
    dtElt.appendChild(p);    
    dlElt.appendChild(dtElt); 

 // Ligne qui permet de faire l'affichage de toutes les modifications appliquées à la page
 document.getElementById("contenu").appendChild(dlElt);     
     
});
