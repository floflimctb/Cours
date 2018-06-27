// TODO : écrire la fonction calculer()
function calculer(a, operateur, b) {
    switch (operateur) {
        case "+":
            var result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            result = a / b;
            break;
        case "*":
            result = a * b;
            break;
        default:
            console.log("Opérateur non supporté.");
    }
    return result;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity