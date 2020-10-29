import ESTATS from "./Stat.js"
import Connaissance from "../Connaissances/Connaissance.js";
class Race {
    /**
     * Une des races qui peuple le jeu
     * @param {String} nom Nom de la Race
     * @param {Object} rBonus Bonus apporté aux stats
     * @param {Connaissance} uniqueSkill Compétence unique de la race
     */
    constructor(nom, rBonus, uniqueSkill) {
        this.nom = nom;
        this.rBonus = rBonus;
        this.uniqueSkill = uniqueSkill;
    }

    getNom() {
        return this.nom;
    }

    getRBonus(eStat) {
        return this.rBonus[eStat] || 0;
    }
}

const ERACE = {
    HUMAINS: {
        nom: "Humains",
        rBonus: {},
        uniqueSkill: EUNIQUESKILLS.SPECIALISATION
    }
}

const EUNIQUESKILLS = {
    SPECIALISATION: new Connaissance("Spécialisation", 0, 0, "Une compétence peut atteindre votre tier + 1"),
}

export default Race;
export default ERACE;