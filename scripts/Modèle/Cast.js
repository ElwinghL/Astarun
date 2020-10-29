import Joueur from "./Humains/Héritage/Joueur.js";

class Cast {
    /**
     * Groupe de joueur prêt à partir à l'aventure
     * @param {String} nom Nom du cast
     * @param {Number} id id du cast
     * @param {Joueur[]} joueurs Liste des joueurs du cast
     */
    constructor(nom, id, joueurs = []) {
        this.nom = nom;
        this.id = id;
        this.joueurs = joueurs
    }
    //Getters
    getNom() {
        return this.nom;
    }

    getId() {
        return this.id;
    }

    getJoueurs() {
        return this.joueurs;
    }

    getJoueurParID(id) {
        return this.joueurs.find(h => h.getId() === id);
    }
    //Methods
    ajouterJoueur(joueur) {
        this.joueurs.push(joueur);
    }
}

export default Cast;