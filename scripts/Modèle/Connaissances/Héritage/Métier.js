import Connaissance from "../Connaissance.js";

class Métier extends Connaissance {
    /**
     * Métier appris par le personnage
     * @param {String} nom Nom du métier du personnage
     * @param {Number} niveau Niveau du métier
     * @param {String} description Description du métier
     */
    constructor(nom, niveau, description = "") {
        super(nom, niveau, defPoints(niveau) * 2, description);
    }
}


export default Métier;