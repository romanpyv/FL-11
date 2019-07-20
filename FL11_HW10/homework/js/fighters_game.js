function Fighter(obj) {
    let name = obj.name, damage = obj.damage, hp = obj.hp, agility = obj.agility, loss = 0, win = 0;
    this.getName = function(){
        return name;
    }
    this.getDamage = function () {
        return damage;
    }
    this.getHealth = function () {
        return hp;
    }
    this.getAgility = function () {
        return agility;
    }
    this.dealDamage = function (points) {
        hp -= points;
        if(hp < 0) {
            hp = 0;
        }
    }
    this.heal = function (points) {
        hp += points;
        if(hp > 100) {
            hp = 100;
        }
    }
    this.atack = function (defender) {
        let chance = 1 - defender.getAgility() / 100;
        if(Math.random() < chance) {
            defender.dealDamage(damage);
            console.log(`${name} make ${damage} damage to ${defender.getName()}.`);
        } else{
            console.log(name + ' attack missed.')
        }

    }
    this.addWin = function () {
        win++;
    }
    this.addLoss = function () {
        loss++;
    }
    this.logCombatHistory = function () {
        console.log(`Name: ${name}, Wins: ${win}, Loses: ${loss}.`);
    }
}
function battle(fighter1, fighter2) {
    let i = 0;
    if(fighter1.getHealth() === 0){
        console.log(fighter1.getName() + ' is dead. Heal him before battle.');
    }
    if(fighter2.getHealth() === 0){
        console.log(fighter2.getName() + ' is dead. Heal him before battle.');
    }
    while(fighter1.getHealth() !== 0 & fighter2.getHealth() !== 0) {
        if(i % 2) {
            fighter1.atack(fighter2);
        } else {
            fighter2.atack(fighter1);
        }
        i++;
    }
    if(fighter1.getHealth() !== 0) {
        fighter1.addWin();
        fighter2.addLoss()
        console.log(fighter1.getName() + ' won!');
    } else {
        fighter1.addLoss();
        fighter2.addWin();
        console.log(fighter2.getName() + ' won!');
    }
}
let fighter1 = new Fighter({name: 'Student', damage: 35 , agility: 40, hp: 100}),
    fighter2 = new Fighter({name: 'Teacher', damage: 40, agility: 15, hp: 110});
battle(fighter1, fighter2);