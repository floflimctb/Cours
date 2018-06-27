/*JAVASCRIPT

Types de valeurs : 
    -Nombres (entiers ou réels)
    -Chaînes :
        -Délimitée par des */ "" /* ou */ '' /* mais plutôt */ "" /*
        -Pour inclure des caractères spéciaux : */ \ /* (exemple : */ \n /*, retour à la ligne)
        -Concaténation : utiliser + */ "bon" + "jour" /* donne */ "bonjour" /*
    -Booléenne :
        -Vrai
        -Faux
    -Affichage d'une valeur :
        -*/ console.log("Bonjour !"); /*
        -*/ console.log(9 + 4); /*

Commentaires :
    -// pour une ligne
    -/**/ /*pour plusieurs lignes

Variables : 
    -Propriétés :
        -Nom : A, b, 0 (pas en première position), certains caractères (ex : §_)
        -Valeur : Donnée mémorisée
        -Type : rôle et opérations applicables (pas comme en C ou Java, typage statique, Javascript ne demande pas de définir le type de variable : typage dynamique)
    -Déclarer une variable :
        -*/ var a; /* 
    -Afficher une variable : 
        -*/ console.log(a); /*
        -*/ console.log("Valeur de f : " + f); /*
    -Affecter une valeur à une variable : 
        -*/ a = 3.14; /* = : opérateur d'affectation
        -*/ var a = 3.14; /* Déclaration et affectation en même temps
    -Incrémentation : 
        -*/ a += 3; /* Incrémente a de 3
        -*/ a++; /* Incrémente a de 1
    -*/ var g = "cinq" * 2; /* Valeur : NaN : Not a Number
    -Conversion explicite : 
        -*/ h = Number("5"); /* Convertit une chaîne en nombre
        -*/ h = String("cinq"); /* Convertit un nombre en chaîne
    -*/ var prenom = prompt("Entrez votre prénom :"); /* Ouvre une boîte de dialogue pour demander le prénom de l'utilisateur (toujours de type chaîne, donc a convertir si besoin */ var nb = Number(prompt("Entrez un nombre : ")); /*)
    -*/ alert("Bonjour, " + prenom); /* Ouvre la boîte de diaolgue affichant le message
        
Conditions : 
    -*/ === /* Egal à
    -*/ !== /* Différent de
    -*/ < /* Inféieur à
    -*/ <= /* Inférieur ou égal à
    -*/ > /* Supérieur à 
    -*/ >= /* Supérieur ou égal à
    -*/ && /* et
    -*/ || /* ou
    -*/ ! /* non : inverse la valeur d'une condition
    -if/else
        -*/ if (condition) {
            //Instrucions si condition vraie
        } /*
            -*/ if ((nombre >= 0) && (nombre <= 100)) {} /*
        -*/ else if (condition) {} /* Possibilité d'en mettre plusieurs
        -Accolades pas obligatoires si instruction unique
        -*/ else {
            //Instructions si condition fausse
        } /*
    -switch
        -*/ switch (expression) {
                case valeur1:
                    // instructions exécutées quand expression vaut valeur1
                    break;
                default:
                    // instructions exécutées quand aucune des valeurs ne correspond
                } /*
        
        
        
-*/  /*
        
        
        
Vocabulaire :
    -Indentation : tabulation (tab)
    -Concaténation : utiliser le + dans console.log
    -Incrémentation : rajout d'une valeur à une variable
    -Type dynamique : language ne demandant pas de définir le type de variable
    -Type statique : language demandant le type de variable
        
Vidéos à voir :
    -1, 2, 3, codez !
    -Jouez avec les variables 
    
*/
