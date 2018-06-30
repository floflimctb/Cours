// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
/*var dlElts = document.createElement("dl");

for (var i = 0; i < mots.length; i++) {
    var mot = mots[i];
    var strongElt = document.createElement("strong");
    var dtElt = document.createElement("dt");
    var ddElt = document.createElement("dd");

    dtElt.textContent = mot.terme;
    strongElt.appendChild(dtElt);

    ddElt.textContent = mot.definition;

    dlElts.appendChild(strongElt);
    dlElts.appendChild(ddElt);
}

document.getElementById("contenu").appendChild(dlElts);*/

var dlElt = document.createElement("dl"); // Création de la liste

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dd> avec sa définition
mots.forEach(function (mot) {
    var dtElt = document.createElement("dt");
    var strongElt = document.createElement("strong");
    strongElt.textContent = mot.terme;
    var ddElt = document.createElement("dd");
    ddElt.textContent = mot.definition;

    dtElt.appendChild(strongElt);
    dlElt.appendChild(dtElt);
    dlElt.appendChild(ddElt);
});

document.getElementById("contenu").appendChild(dlElt); // Ajout de la liste à la page