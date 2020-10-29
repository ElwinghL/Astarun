class Resistance {
    /**
     * Resistance à un élément du personnage
     * @param {String} elem Element de la résistance
     * @param {Number} valeur Resistance de base
     * @param {Number} niveau Niveau de la résistance
     */
    constructor(elem, valeur, niveau) {
        this.elem = elem;
        this.valeur = valeur;
        this.niveau = niveau;

        this.points = calcPoints();
        this.total = calcTotal();
    }

    /**
     * Calcule le nombre de points que coute cette resistance
     */
    calcPoints() {
        return defPoints(this.niveau);
    }
    /**
     * Calcul le montant total de la résistance
     */
    calcTotal() {
        return this.valeur + 5 * this.niveau;
    }
}

const ERESISTANCES = {
    EAU: "Eau",
    FEU: "Feu",
    OMBRE: "Ombre",
    LUMIERE: "Lumière",
    ORDRE: "Ordre",
    CHAOS: "Chaos",
    PSY: "Psy"
}

export default Resistance;
export default ERESISTANCES;