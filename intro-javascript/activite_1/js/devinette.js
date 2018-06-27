/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var saisie = Number(prompt("Devinez mon nombre entre 1 et 100 en moins de 6 tentatives !"));

var i = 1;

while (saisie !== solution) {
	if (i <= 6) {
		if (i === 6) {
			console.log("Dommage,... Vous n'avez  par réussi à trouver en 6 coups");	
		}
		else {
			if (saisie > solution) {
    			console.log(saisie + " est trop grand");
    			saisie = Number(prompt("Raté, essayez encore"));
			}
			else {
				console.log(saisie + " est trop petit");
    			saisie = Number(prompt("Raté, essayez encore"));
    		}
		}	
	}
    i++;
}

console.log("Bravo la solution était " + solution + ". Et tu as trouvé en " + i + " coups.");	