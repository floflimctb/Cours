var Film = {
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    
    decrire: function () {
        var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le Loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamour");

var films = [film1, film2, film3];

films.forEach(function(film){
    console.log(film.decrire());
});