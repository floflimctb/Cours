// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

for (var i = 0; i < journaux.length; i++) {
	var journal = journaux[i];
	var lienElt = document.createElement("a");

	lienElt.href = journal;
	lienElt.textContent = journal;

	document.getElementById("contenu").appendChild(lienElt);
	document.getElementById("contenu").appendChild(document.createElement("br"));
}