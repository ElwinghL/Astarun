import Connaissance from "../Connaissance.js";

class EcoleDeMagie extends Connaissance {
    /**
     * Sort ou école de Magie apprise par le personnage
     * @param {String} nom Nom du sort ou de l'école de magie apprise
     * @param {Number} niveau Niveau du sort ou de l'école
     * @param {String} description Description de l'école ou du sort
     */
    constructor(nom, niveau, description = "") {
        super(nom, niveau, defPoints(niveau) * 2, description);
    }
}

export default EcoleDeMagie;