import Connaissance from "../Connaissance.js";

class Stance extends Connaissance {
    /**
     * Stance de combat utilisée par le personnage
     * @param {String} nom Nom de la stance de combat
     * @param {Number} niveau Niveau de la stance de combat
     * @param {Number} prec Précision de la stance de combat à ajouter au dé
     * @param {Number} mAtk Modificateur d'attaque pour les dégats
     * @param {Number} crit Seuil à dépasser pour faire un coup critique
     * @param {Numer} mCrit Multiplicateur de dégats critiques
     * @param {String} description Description de la stance de combat
     */
    constructor(nom, niveau, prec, mAtk, crit, mCrit, description = "") {
        super(nom, niveau, defPoints(niveau), description);
        this.prec = prec;
        this.mAtk = mAtk;
        this.crit = crit;
        this.mCrit = mCrit;
    }
}

export default Stance;