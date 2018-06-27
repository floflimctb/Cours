var mots = [];
var saisie = "";

while(saisie.toLowerCase() !== "stop") {
    saisie = prompt("Veuillez saisir un mot ou stop pour arreter et voir ce que vous avez saisi :");
    
    if(saisie.toLowerCase() !== "stop") {
        mots.push(saisie);
    }
}

console.log("Vous avez saisi les mots :");

mots.forEach(function(mot){
   console.log(mot); 
});