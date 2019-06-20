const defPoints = function (niveau) {
    return niveau * (niveau + 1) / 2
}

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

        this.personnages = [];
    }
}

class MaitreDuJeu extends Humains {
    /**
     * Permet de créer un humain qui est MDJ
     * @param {String} nom Nom de famille du joueur
     * @param {String} prenom Prénom du joueur
     * @param {String} id IDDiscord du joueur
     */
    constructor(...args) {
        super(...args);
        this.casts = [];
    }
}

class Joueur extends Humains {
    /**
     * Permet de créer un humain qui est Joueur
     * @param {String} nom Nom de famille du joueur
     * @param {String} prenom Prénom du joueur
     * @param {String} id IDDiscord du joueur
     */
    constructor(...args) {
        super(...args);
    }
}

class Cast {
    /**
     * Groupe de joueur prêt à partir à l'aventure
     * @param {String} nom Nom du cast
     * @param {Joueur[]} joueurs Liste des joueurs du cast
     */
    constructor(nom, joueurs = []) {
        this.nom = nom;
        this.joueurs = joueurs
    }
}

class Personnage {
    /**
     * Crée un personnage vide
     */
    constructor() {
        this.nom = "";
        this.taille = "";

        this.race = null;

        this.jauges = new Array(4);
        this.resistances = new Array(7);
        this.stats = new Array(6);
    }
}

class Race {
    /**
     * Une des races qui peuple le jeu
     * @param {String} nom Nom de la Race
     * @param {Object[]} rBonus Bonus apporté aux stats
     * @param {Connaissance} uniqueSkill Compétence unique de la race
     */
    constructor(nom, rBonus, uniqueSkill) {
        this.nom = nom;
        this.rBonus = rBonus;
        this.uniqueSkill = uniqueSkill;
    }
}

class Jauge {
    /**
     * 
     * @param {String} nom Nom de la jauge
     * @param {Number} valeur Valeur 
     * @param {Number} bonus Pourcentage bonus
     * @param {Number} niveau 
     */
    constructor(nom, valeur, bonus = 0, niveau = 0, modT = 1) {
        this.nom = nom;
        this.valeur = valeur;
        this.bonus = bonus;
        this.niveau = niveau;

        this.total = this.calcTotal(modT);
        this.pts = this.calcPoints();
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
    calcPoints() {
        return defPoints(this.niveau);
    }
}

class Stat {
    constructor(nom, valeur, rBonus = 0, dBonus = 0, sBonus = 0) {
        this.nom = nom;
        this.valeur = valeur;
        this.total = valeur + rBonus + dBonus + sBonus;

        this.points = this.calcPoints(dBonus);
        this.mod = this.calcMod();
    }

    calcPoints(dBonus) {
        return dBonus * 30;
    }

    calcMod() {
        return Math.ceil(this.total > 17 ? this.total - 17 + 4 : (this.total - 10) / 2)
    }
}

class Resistance {
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

    calcTotal() {
        return this.valeur + 5 * this.niveau;
    }
}

class Connaissance {
    constructor(nom, niveau, calcPoints, description = "") {
        this.nom = nom;
        this.niveau = niveau;
        this.description = description;

        this.points = calcPoints;
    }
}

class Langue extends Connaissance {
    constructor(nom, points) {
        super(nom, 0, points);
    }
}

class Competence extends Connaissance {
    constructor(nom, niveau, description = "", bPalier = true, stat1 = null, stat2 = null) {
        super(nom, niveau, defPoints(niveau), description);
        this.bPalier = bPalier;
        this.stat1 = stat1;
        this.stat2 = stat2;

        this.mod = this.calcMod();
        this.total = calcTotal();
    }

    calcMod() {
        if (this.bPalier) {
            return (0 + (this.stat1 ? this.stat1.mod : 0) + Math.ceil(this.stat2 ? this.stat2.mod / 2 : 0))
        } else {
            return 0;
        }
    }
    calcTotal() {
        return (this.bPalier ? this.mod + this.niveau * 2 : 0);
    }
}

class Stance extends Connaissance {
    constructor(nom, niveau, prec, mAtk, crit, mCrit, description = "") {
        super(nom, niveau, defPoints(niveau), description);
        this.prec = prec;
        this.mAtk = mAtk;
        this.crit = crit;
        this.mCrit = mCrit;
    }
}

class Metier extends Connaissance {
    constructor(nom, niveau, description = "") {
        super(nom, niveau, defPoints(niveau) * 2, description);
    }
}

class Magie extends Connaissance {
    constructor(nom, niveau, elem, description = "") {
        super(nom, niveau, defPoints(niveau) * 2, description);
        this.elem = elem;
    }
}