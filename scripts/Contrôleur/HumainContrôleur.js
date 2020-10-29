import Joueur from "../Modèle/Humains/Héritage/Joueur.js";
import MaitreDuJeu from "../Modèle/Humains/Héritage/MaitreDuJeu.js";
import Cast from "../Modèle/Cast.js";

class HumainContrôleur extends Contrôleur {
    constructor() {
        super();
        this.mjs = [];
        this.joueurs = [];
        return this;
    }
    //Getters

    /**
     * Retourne un MJ par son ID ou null
     * @param  {String} id
     */
    getMjParID(id) {
        return this.mjs.find(h => h.getId() === id);
    }
    /**
     * Retourne un Joueur par son ID ou null
     * @param  {String} id
     */
    getJoueurParID(id) {
        return this.mjs.find(h => h.getId() === id);
    }
    /**
     * Retourne le joueur correspondant à chaque ID
     * @param  {Number} ...ids
     */
    getListeJoueursParID(...ids) {
        let ret = [];
        ids.forEach(id => {
            const h = this.getJoueurParID(id);
            if (h !== null)
                ret.push(h);
        }, this);
        return ret;
    }
    //Méthodes
    /**
     * Ajoute un joueur à la liste si l'ID n'existe pas déjà
     * @param  {String} nom
     * @param  {String} prenom
     * @param  {String} id
     */
    creerEtAjouterJoueur(nom, prenom, id) {
        if (!this.joueurs.some((h) => h.getId() === id))
            this.joueurs.push(new Joueur(nom, prenom, id));
        return this;
    }
    /**
     * Ajoute un mj à la liste si l'ID n'existe pas déjà
     * @param  {String} nom
     * @param  {String} prenom
     * @param  {String} id
     */
    creerEtAjouterMJ(nom, prenom, id) {
        if (!this.mjs.some((h) => h.getId() === id))
            this.mjs.push(new MaitreDuJeu(nom, prenom, id));
        return this;
    }
    /**
     * Ajoute un cast pour le MJ
     * @param  {Number} idMJ
     * @param  {String} nom
     * @param  {Joueur[]} joueurs
     */
    creerCastForMJ(idMJ, nom, joueurs) {
        this.getMjParID(idMJ).ajouterCast(nom, joueurs);
        return this;
    }
}