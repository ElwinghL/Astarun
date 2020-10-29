import Resistance from "./Résistance.js";
import Stat from "./Stat.js"
class Save extends Resistance {
    /**
     * Save d'un personnage en fonction d'une stat
     * @param {String} nom Nom de la save
     * @param {Number} niveau Niveau de la save
     * @param {Stat} stat Statistique sur laquelle s'appuie la save
     * @param {Stat} stat2 Statistique secondaire sur laquelle s'appuie la save
     */
    constructor(nom, niveau, stat, stat2 = null) {
        this.elem = nom;
        this.niveau = niveau;
        this.stat = stat;
        this.stat2 = stat2;
        this.valeur = this.calcValeur();
        this.total = this.calcTotal();
        this.points = this.calcPoints();
    }
    calcValeur() {
        if (stat2 !== null) {
            return Math.floor(this.stat.total() + this.stat2.total() / 2) + 5;
        }
        return this.stat.total() + 5;
    }
    calcTotal() {
        if (this.stat2 !== null) {
            return this.valeur + 2 * this.niveau + (this.niveau > 0 ? this.stat.getMod() : 0);
        }
        return this.valeur + 2 * this.niveau + (this.niveau > 0 ? Math.floor(this.stat.getMod() + this.stat2.getMod() / 2) : 0);
    }
}

const ESAVES = {
    VIGUEUR: {
        nom: "Vigueur",
        index: 0
    },
    VOLONTE: {
        nom: "Volonté",
        index: 1
    },
    REFLEXES: {
        nom: "Réfléxes",
        index: 2
    }
}

export default Save;
export default ESAVES;