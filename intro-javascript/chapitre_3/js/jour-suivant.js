var jourChoisi = prompt("Entrez un jour de la semaine :");
switch (jourChoisi) {
    case "lundi":
        console.log("Demain, nous serons mardi.");
        break;
    case "mardi":
        console.log("Demain, nous serons mercredi.");
        break;
    case "mercredi":
        console.log("Demain, nous serons jeudi.");
        break;
    case "jeudi":
        console.log("Demain, nous serons vendredi.");
        break;
    case "vendredi":
        console.log("Demain, nous serons samedi.");
        break;
    case "samedi":
        console.log("Demain, nous serons dimanche.");
        break;
    default:
        console.log("Demain, nous serons lundi.");
}