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
        this.total = valeur + rBonus + dBonus + sBonus;

        this.points = this.calcPoints(dBonus);
        this.mod = this.calcMod();
    }
    /**
     * Coup en points de la stat
     * @param {Number} dBonus 
     */
    calcPoints(dBonus) {
        return dBonus * (dBonus < 0 ? 10 : 30);
    }
    /**
     * Calcul du modificateur de la stat
     */
    calcMod() {
        return Math.ceil(this.total > 17 ? this.total - 17 + 4 : (this.total - 10) / 2)
    }
}

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

class Langue extends Connaissance {
    /**
     * Langue connue par le personnage
     * @param {String} nom Nom de la langue connue
     * @param {Number} points Cout en point de la langue apprise
     */
    constructor(nom, points) {
        super(nom, 0, points);
    }
}

class Competence extends Connaissance {
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

class Metier extends Connaissance {
    /**
     * Métier appris par le personnage
     * @param {String} nom Nom du métier du personnage
     * @param {Number} niveau Niveau du métier
     * @param {String} description Description du métier
     */
    constructor(nom, niveau, description = "") {
        super(nom, niveau, defPoints(niveau) * 2, description);
    }
}

class Magie extends Connaissance {
    /**
     * Sort ou école de Magie apprise par le personnage
     * @param {String} nom Nom du sort ou de l'école de magie apprise
     * @param {Number} niveau Niveau du sort ou de l'école
     * @param {String} elem Element du sort ou de l'école
     * @param {String} description Description de l'école ou du sort
     */
    constructor(nom, niveau, elem, description = "") {
        super(nom, niveau, defPoints(niveau) * 2, description);
        this.elem = elem;
    }
}