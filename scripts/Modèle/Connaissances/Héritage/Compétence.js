import Connaissance from "../Connaissance.js";

class Compétence extends Connaissance {
    /**
     * 
     * @param {String} nom Nom de la compétence
     * @param {Number} niveau Niveau de la compétence
     * @param {String} description Description de la compétence
     * @param {Boolean} bPalier Est-ce une compétence de palier ?
     * @param {Stat} stat1 Sinon stat principale
     * @param {Stat} stat2 Sinon stat secondaire
     */
    constructor(nom, niveau, description = "", bPalier = true, stat1 = null, stat2 = null) {
        super(nom, niveau, defPoints(niveau), description);
        this.bPalier = bPalier;
        this.stat1 = stat1;
        this.stat2 = stat2;

        this.mod = this.calcMod();
        this.total = calcTotal();
    }
    /**
     * Calcul le modificateur de la compétence
     */
    calcMod() {
        if (this.bPalier) {
            return (0 + (this.stat1 ? this.stat1.mod : 0) + Math.ceil(this.stat2 ? this.stat2.mod / 2 : 0))
        } else {
            return 0;
        }
    }
    /**
     * Calcul le total de la compétence à ajouter au dé
     */
    calcTotal() {
        return (this.bPalier ? this.mod + this.niveau * 2 : 0);
    }
}

export default Compétence;