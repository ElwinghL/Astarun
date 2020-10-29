import Connaissance from "../Connaissance.js";

class Magie extends Connaissance {
    /**
     * Sort ou école de Magie apprise par le personnage
     * @param {String} nom Nom du sort ou de l'école de magie apprise
     * @param {Number} niveau Niveau du sort ou de l'école
     * @param {EcoleDeMagie} elem Element du sort ou l'école
     * @param {String} description Description de l'école ou du sort
     */
    constructor(nom, niveau, elem, description = "") {
        super(nom, niveau, defPoints(niveau), description);
        this.elem = elem;
    }
}

export default Magie;