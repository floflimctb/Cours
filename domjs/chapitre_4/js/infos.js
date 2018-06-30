/*var contenuElt = document.getElementById("contenu");
var style = contenuElt.style;
var texteHeight = "Hauteur : " + style.height + "px";
var texteWidth = "Longueur : " + style.width + "px";
var pElts = document.createElement("p");
var liElt = document.createElement("li");
var ul1Elt = document.createElement("ul");
var ul2Elt = document.createElement("ul");

pElts.appendChild(document.createTextNode("Informations sur l'élément"));
ul1Elt.textContent = texteHeight;
ul2Elt.textContent = texteWidth;
liElt.appendChild(ul1Elt);
liElt.appendChild(ul2Elt);
pElts.appendChild(liElt);


document.body.appendChild(pElts);*/

var styleElement = getComputedStyle(document.getElementById("contenu"));
var listeElt = document.createElement("ul");
var longueurElt = document.createElement("li");
longueurElt.textContent = "Longueur : " + styleElement.width;
var hauteurElt = document.createElement("li");
hauteurElt.textContent = "Hauteur : " + styleElement.height;
listeElt.appendChild(hauteurElt);
listeElt.appendChild(longueurElt);
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément"));
document.getElementById("infos").appendChild(listeElt);