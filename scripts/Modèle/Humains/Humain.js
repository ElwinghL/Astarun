class Humains {
    /**
     * Permet de créer un humain qui peut être joueur ou maitre du jeu
     * @param {String} nom Nom de famille du joueur
     * @param {String} prenom Prénom du joueur
     * @param {String} id IDDiscord du joueur
     */
    constructor(nom, prenom, id) {
        this.nom = nom;
        this.prenom = prenom;
        this.id = id;
        //Personnage jouable pour les joueurs, PNJs pour le MJ
        this.personnages = [];
    }
    //Getters
    /**
     * Retourne le nom de l'humain
     */
    getNom() {
        return this.nom;
    }

    /**
     * Retourne le prénom de l'humain
     */
    getPrenom() {
        return this.prenom;
    }

    /**
     * Retourne l'id de l'humain
     */
    getId() {
        return this.id;
    }
}

export default Humains;