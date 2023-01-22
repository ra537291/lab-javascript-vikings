// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health = (this.health - damage);
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        if (this.health <= 0) return this.name + " has died in act of combat";
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        if (this.health <= 0) return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let attackForce = this.vikingArmy[Math.ceil(Math.random() * this.vikingArmy.length - 1)];
        let damageReceived = this.saxonArmy[Math.ceil(Math.random() * this.saxonArmy.length - 1)];
        let damageToSaxon = damageReceived.receiveDamage(attackForce.attack());
        this.saxonArmy = this.saxonArmy.filter(sax => sax.health > 0)

        return damageToSaxon
    }

    saxonAttack() {
        let attackForce = this.saxonArmy[Math.ceil(Math.random() * this.saxonArmy.length - 1)];
        let damageReceived = this.vikingArmy[Math.ceil(Math.random() * this.vikingArmy.length - 1)];
        let damageToViking = damageReceived.receiveDamage(attackForce.attack());
        this.vikingArmy = this.vikingArmy.filter(vik => vik.health > 0)

        return damageToViking
    }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survive another day..."
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}





/*
this.vikingArmy = this.vikingArmy.forEach(function (vik, i) {
    if (vik.health <= 0) {
        vikingArmy[i].splice(i,1);
    }
})*/