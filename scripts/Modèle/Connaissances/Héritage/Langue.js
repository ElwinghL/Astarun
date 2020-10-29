import Connaissance from "../Connaissance.js";

class Langue extends Connaissance {
    /**
     * Langue connue par le personnage
     * @param {String} nom Nom de la langue connue
     * @param {Number} points Cout en point de la langue apprise
     */
    constructor(nom, points) {
        super(nom, 0, points);
    }
}

export default Langue;