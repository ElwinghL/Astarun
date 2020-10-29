import Stat from "./Stat.js";
import ESTATS from "./Stat.js";
import Race from "./Race.js";
import ERACE from "./Race.js";
import Resistance from "./Résistance.js";
import ERESISTANCES from "./Résistance.js"
import Jauge from "./Jauge.js";
import EJAUGES from "./Jauge.js";
import Save from "./Save.js";
import ESAVES from "./Save.js";

class Personnage {
    /**
     * Création d'un personnage simple
     * @param {String} nom Nom du personnage
     * @param {Number} taille Modificateur de race du personnage
     * @param {ERACE} eRace Elément de l'énum des races implémentées
     * @param {Number} tier Tier du personnage
     * @param {Number} id
     */
    constructor(nom, taille, eRace, tier, id) {
        this.id = id;

        this.nom = nom;
        this.taille = taille;

        this.race = this.buildRaceFromERACE(eRace);

        this.tier = tier;

        this.jauges = new Array(4);
        this.resistances = new Array(7);
        this.stats = new Array(6);
        this.saves = new Array(3);

        return this;
    }
    getStat(stat) {
        return this.stats[stat.index];
    }
    initStats(CONS, AGI, INT, CHA, CONN, INS) {
        this.stats[ESTATS.CONS.index] = new Stat(ESTATS.CONS.nom, CONS.base, this.race.getRBonus(ESTATS.CONS.nom), CONS.definitif, CONS.stuff);
        this.stats[ESTATS.AGI.index] = new Stat(ESTATS.AGI.nom, AGI.base, this.race.getRBonus(ESTATS.AGI.nom), AGI.definitif, AGI.stuff);
        this.stats[ESTATS.INT.index] = new Stat(ESTATS.INT.nom, INT.base, this.race.getRBonus(ESTATS.INT.nom), INT.definitif, INT.stuff);
        this.stats[ESTATS.CHA.index] = new Stat(ESTATS.CHA.nom, CHA.base, this.race.getRBonus(ESTATS.CHA.nom), CHA.definitif, CHA.stuff);
        this.stats[ESTATS.CONN.index] = new Stat(ESTATS.CONN.nom, CONN.base, this.race.getRBonus(ESTATS.CONN.nom), CONN.definitif, CONN.stuff);
        this.stats[ESTATS.INS.index] = new Stat(ESTATS.INS.nom, INS.base, this.race.getRBonus(ESTATS.INS.nom), INS.definitif, INS.stuff);
        return this;
    }
    initResistances(EAU, FEU, OMBRE, LUMIERE, ORDRE, CHAOS, PSY) {
        //Pour le moment, le système ignore les résistances
        //TODO : Changer les 0,0 en utilisation des objets plus haut + résistance de race
        this.resistances[0] = new Resistance(ERESISTANCES.EAU, 0, 0);
        this.resistances[1] = new Resistance(ERESISTANCES.FEU, 0, 0);
        this.resistances[2] = new Resistance(ERESISTANCES.OMBRE, 0, 0);
        this.resistances[3] = new Resistance(ERESISTANCES.LUMIERE, 0, 0);
        this.resistances[4] = new Resistance(ERESISTANCES.ORDRE, 0, 0);
        this.resistances[5] = new Resistance(ERESISTANCES.CHAOS, 0, 0);
        this.resistances[6] = new Resistance(ERESISTANCES.PSY, 0, 0);
        return this;
    }
    initJauges(PV, MANA, TOUCH) {
        this.jauges[EJAUGES.PV.index] = new Jauge(EJAUGES.PV.nom, this.getStat(ESTATS.CONS).total(), PV.bonus, PV.niveau, this.taille);
        this.jauges[EJAUGES.MANA.index] = new Jauge(EJAUGES.MANA.nom, this.getStat(ESTATS.INT).total(), MANA.bonus, MANA.niveau, this.taille);
        const touch = this.getStat(ESTATS.AGI).total() + this.getStat(ESTATS.INS).total();
        this.jauges[EJAUGES.TOUCH.index] = new Jauge(EJAUGES.TOUCH.nom, touch, TOUCH.bonus, TOUCH.niveau, this.taille);
        this.jauges[EJAUGES.ESQUIVE.index] = new Jauge(EJAUGES.TOUCH.nom, (TOUCH.niveau > 0 ? Math.ceil(touch / 2) : 0), TOUCH.bonus, TOUCH.niveau, 0, true);
        return this;
    }
    initSaves(VIGUEUR, VOLONTE, REFLEXES) {
        this.saves[ESAVES.VIGUEUR.index] = new Save(ESAVES.VIGUEUR.nom, VIGUEUR.niveau, this.getStat(ESTATS.CONS));
        this.saves[ESAVES.VOLONTE.index] = new Save(ESAVES.VOLONTE.nom, VOLONTE.niveau, this.getStat(ESTATS.INT));
        this.saves[ESAVES.REFLEXES.index] = new Save(ESAVES.REFLEXES.nom, REFLEXES.niveau, this.getStat(ESTATS.AGI), this.getStat(ESTATS.INS));
        return this;
    }
    init(listeStats, listeResistances, listeJauges, listeSaves) {
        //On peut chaîner grâce au return this
        this.initStats(...listeStats)
            .initResistances(...listeResistances)
            .initJauges(...listeJauges)
            .initSaves(...listeSaves);
    }

    //Methods
    buildRaceFromERACE(eRace) {
        return new Race(eRace.nom, eRace.rBonus, eRace.uniqueSkill)
    }

}