class Stat {
    /**
     * Stat physique ou mentale du personnage
     * @param {String} nom Nom de la stat
     * @param {Number} valeur Valeur de base obtenue au dé
     * @param {Number} rBonus Bonus racial
     * @param {Number} dBonus Bonus définitif
     * @param {Number} sBonus Bonus du stuff
     */
    constructor(nom, valeur, rBonus = 0, dBonus = 0, sBonus = 0) {
        this.nom = nom;
        this.valeur = valeur;
        this.rBonus = rBonus;
        this.dBonus = dBonus;
        this.sBonus = sBonus;

        this.points = this.calcPoints();
        this.mod = this.calcMod();
    }
    /**
     * Coup en points de la stat
     */
    calcPoints() {
        return this.dBonus * (this.dBonus < 0 ? 0 : 30);
    }
    /**
     * Calcul du modificateur de la stat
     */
    calcMod() {
        return Math.ceil(this.total > 17 ? this.total - 17 + 4 : (this.total - 10) / 2)
    }
    /**
     * Retourne le total de la stat
     */
    total() {
        return this.valeur + this.rBonus + this.dBonus + this.sBonus
    };
    getMod() {
        return this.mod;
    }
}

const ESTATS = {
    CONS: {
        nom: "Constitution",
        index: 0
    },
    AGI: {
        nom: "Agilité",
        index: 1
    },
    INT: {
        nom: "Intelligence",
        index: 2
    },
    CHA: {
        nom: "Charisme",
        index: 3
    },
    CONN: {
        nom: "Connaissance",
        index: 4
    },
    INS: {
        nom: "Instinct",
        index: 5
    }
}

export default Stat;
export default ESTATS;