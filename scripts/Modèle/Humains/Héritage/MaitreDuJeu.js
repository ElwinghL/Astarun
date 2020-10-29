import Cast from "../../Cast.js";
import Humains from "../Humains.js";
import Cast from "../../Cast.js";

class MaitreDuJeu extends Humains {
    /**
     * Permet de créer un humain qui est MDJ
     * @param {String} nom Nom de famille du joueur
     * @param {String} prenom Prénom du joueur
     * @param {String} id IDDiscord du joueur
     */
    constructor(...args) {
        super(...args);
        this.casts = [];
        return this;
    }
    //Getters
    getCasts() {
        return this.casts;
    }
    getCastParID(id) {
        return this.casts.find(cast => cast.getId() === id);
    }
    //Methods
    ajouterCast(nom, joueurs) {
        this.casts.push(new Cast(nom, this.casts.length, joueurs));
        return this;
    }
}

export default MaitreDuJeu;