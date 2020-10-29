class Connaissance {
    /**
     * Classe abstraite de gestion des connaissances
     * @param {String} nom Nom de la connaissance
     * @param {Number} niveau Niveau de la connaissance
     * @param {Number} calcPoints Cout en point de la connaissance
     * @param {String} description Description de la connaissance
     */
    constructor(nom, niveau, calcPoints, description = "") {
        this.nom = nom;
        this.niveau = niveau;
        this.description = description;

        this.points = calcPoints;
    }
}

export default Connaissance;