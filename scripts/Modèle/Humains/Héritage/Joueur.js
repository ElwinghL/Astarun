import Humains from "../Humains.js";

class Joueur extends Humains {
    /**
     * Permet de créer un humain qui est Joueur
     * @param {String} nom Nom de famille du joueur
     * @param {String} prenom Prénom du joueur
     * @param {String} id IDDiscord du joueur
     */
    constructor(...args) {
        super(...args);
        return this;
    }
}

export default Joueur;