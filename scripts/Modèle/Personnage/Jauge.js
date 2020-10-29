class Jauge {
    /**
     * 
     * @param {String} nom Nom de la jauge
     * @param {Number} valeur Valeur 
     * @param {Number} bonus Pourcentage bonus
     * @param {Number} niveau 
     * @param {Boolean} estA0 Le coup en point de la jauge est il nul ?
     */
    constructor(nom, valeur, bonus = 0, niveau = 0, modT = 1, estA0 = false) {
        this.nom = nom;
        this.valeur = valeur;
        this.bonus = bonus;
        this.niveau = niveau;
        this.actuel;

        this.total = this.calcTotal(modT);
        this.pts = this.calcPoints(estA0);
    }
    /**
     * Calcul le total de cette jauge
     * @param {Number} modT Modificateur de taille à appliquer
     */
    calcTotal(modT) {
        return this.valeur * (modT + this.bonus / 100) + 10 * this.niveau
    }
    /**
     * Calcule le nombre de points que coute cette jauge
     */
    calcPoints(estA0) {
        return estA0 ? 0 : defPoints(this.niveau);
    }
}

const EJAUGES = {
    PV: {
        nom: "Points de vie",
        index: 0
    },
    MANA: {
        nom: "Points de mana",
        index: 1
    },
    TOUCH: {
        nom: "CA",
        index: 2
    },
    Esquive: {
        nom: "ESQUIVE",
        index: 3
    }
}

export default Jauge;
export default EJAUGES;