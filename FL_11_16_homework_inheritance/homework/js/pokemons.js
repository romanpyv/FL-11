"use strict";

// 1.
function assign(target, ...sources) {
    let res = Object(target);
    for (let i = 0; i < sources.length; i++) {
        if(sources[i] === undefined || sources[i] === null) continue;
        let keysArr = Object.keys(sources[i]), len = keysArr.length;
        for (let j = 0; j < len; j++) {
            let desc = Object.getOwnPropertyDescriptor(sources[i], keysArr[j]);
            if (desc !== undefined && desc.enumerable) {
                res[keysArr[j]] = sources[i][keysArr[j]];
            }
        }
    }
    return res;
}

const defaults = { a: 123, b: 777 };
const options = { a: 456 };
const configs = assign({}, defaults, options);
console.log(configs);

// 2
if (!Object.create) {
    Object.create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
function create(proto, example) {
    function F() {}
    F.prototype = proto;
    if (typeof(example) === "object") {
        for (let prop in example) {
            if (example.hasOwnProperty(prop)) {
                F[prop] = example[prop];
            }
        }
    }
    return new F;
}
const obj1 = { prop: 5 };
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);

// 3.
function Pokemon() {
    this.type = 'element';
    this.specie = 'Pokémon';
    this.fly = false;
    this.pokemonType = 'Pokemon';
}
Pokemon.prototype.getType = function () {
    return this.type;
};
Pokemon.prototype.getSpecie = function () {
    return this.specie;
};
Pokemon.prototype.canFly = function () {
    return this.fly;
};
Pokemon.prototype.getPokemonType = function () {
    return this.pokemonType;
};

function Charmander() {
    this.type = 'Fire';
    this.specie = 'Lizard Pokémon';
    this.fly = false;
    this.pokemonType = 'Charmander';
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmeleon() {
    Charmander.call(this);
    this.pokemonType = 'Charmeleon';
    this.specie = 'Flame Pokémon';
}
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard() {
    Charmeleon.call(this);
    this.pokemonType = 'Charizard';
    this.fly = true;
}
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;

Charmander.prototype.evolve = function () {
    return new Charmeleon();
};
Charmeleon.prototype.evolve = function () {
    return new Charizard();
};
Charizard.prototype.evolve = function () {
    return this;
};
// Pichu
function Pichu() {
    this.type = 'Electric';
    this.specie = 'Mouse Pokémon';
    this.fly = false;
    this.pokemonType = 'Pichu';
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu() {
    Pichu.call(this);
    this.pokemonType = 'Pikachu';
}
Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu() {
    Pikachu.call(this);
    this.pokemonType = 'Raichu';
}
Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;

Pichu.prototype.evolve = function () {
    return new Pikachu();
};
Pikachu.prototype.evolve = function () {
    return new Raichu();
};
Raichu.prototype.evolve = function () {
    return this;
};

// Example:
const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true

console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

console.log(charmander.canFly()); // -> false
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true

const pichu = new Pichu();
console.log(pichu.getPokemonType()); // => Pichu

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
console.log(raichu2 === raichu); // true