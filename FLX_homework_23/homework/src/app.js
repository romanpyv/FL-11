class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = bonus;
  }

  makeOrder() {
    const res = `Price after discount and including bonuses is ${this.orderTotalPrice}`;
    console.log(res);
  }
}

function getDiscount(user) {
  const now = new Date();

  if (now.getHours() < 6 || now.getHours() > 23) {
    user.orderTotalPrice *= user.nightDiscount;
  }

  if (now.getDay() === 0 || now.getDay() === 6) {
    user.orderTotalPrice *= user.weekendDiscount;
  }

  user.orderTotalPrice -= user.bonus;
  user.bonus = 0;
}

function setBonus(user, price, discount) {
  user.bonus = Math.floor(user.orderTotalPrice / price) * discount;
}

const me = new User('Roman', 420, 0.9, 0.8, 0);

setBonus(me, 100, 5);
getDiscount(me);

me.makeOrder();
