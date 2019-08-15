function Hamburger(type, cal, secret) {
    let calories = cal, adds = {};
    this.type = type;
    if(secret){
        adds.secret = 1;
        calories += 100;
    }

    this.getCalories = function () {
        return calories;
    };
    this.setCalories = function (cal) {
        calories = cal;
    };
    this.addCheese = function () {
        if(adds.cheese) {
            console.log('Sorry, you can add cheese only once.');
        } else {
            adds.cheese = 1;
            calories += 120;
        }
    };
    this.addTomato = function () {
        if(adds.tomato !== 2){
            if(!adds.tomato) {
                adds.tomato = 1;
            } else {
                adds.tomato++;
            }
            calories += 20;
        } else {
            console.log('Sorry, you can add tomato only twice.');
        }
    };
    this.addSecretIngredient = function () {
        if (Object.keys(adds).length === 0) {
            adds.secret = 1;
            calories += 100;
        } else {
            if (adds.secret === 1) {
                console.log('Sorry, you can add secret ingredient only once.');
            } else {
                console.log('Sorry, you can add secret ingredient only before other ingredients.');
            }
        }
    };
    this.bite = function () {
        if (!adds.bites) adds.bites = 1;
        else adds.bites++;
        if (adds.end === true) return;
        adds.end = true;
        this.addSecretIngredient = function () {
            if (adds.end) {
                console.log('Sorry, you cannot add ingredients anymore.');
            } else {
                this.addSecretIngredient();
            }
        };
        this.addCheese = function () {
            if (adds.end) {
                console.log('Sorry, you cannot add ingredients anymore.');
            } else {
                this.addCheese();
            }
        };
        this.addTomato = function () {
            if (adds.end) {
                console.log('Sorry, you cannot add ingredients anymore.');
            } else {
                this.addTomato();
            }
        };
    };
    this.info = function () {
        let res = this.type + ' hamburger with: ';
        if (adds.secret) res += ' secret ingredient,';
        if (adds.tomato) res += ' ' + adds.tomato + ' tomato,';
        if (adds.cheese) res += ' cheese,';
        if (adds.bites) res += ' was bitten ' + adds.bites +' times.';
        if(res[res.length-1] === ' ') {
            res += 'nothing additional.';
        }
        if (res[res.length-1] === ',') {
            res = res.slice(0,-1);
            res += '.';
        }
        res += ' Total calories: ' + calories + '.';
        console.log(res);
    }
}
let delicacy = new Hamburger('classic', 1000, false);
delicacy.addCheese();
delicacy.addCheese();
delicacy.addTomato();
delicacy.addTomato();
delicacy.addTomato();
delicacy.addSecretIngredient();
delicacy.bite();
delicacy.addCheese();
delicacy.info();