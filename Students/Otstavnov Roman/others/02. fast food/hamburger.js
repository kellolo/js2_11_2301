const PRICE_AND_CALORIES = Object.freeze({
  size: {
    small: { price: 50, calories: 20},
    big: { price: 100, calories: 40},
  },
  stuff: {
    cheese: { price: 10, calories: 20},
    salad: { price: 20, calories: 5},
    potatoes: { price: 15, calories: 10},
  },
  topping: {
    seasoning: { price: 15, calories: 0 },
    mayonnaise: { price: 20, calories: 5 },
  }
})

class Hamburger {
  constructor(size, stuffing) {
    if(!PRICE_AND_CALORIES.size.hasOwnProperty(size)) {
      console.error(`Необоходимо указать существующий размер: ${Object.keys(PRICE_AND_CALORIES.size)}` );
      return;
    }
    if(!PRICE_AND_CALORIES.stuff.hasOwnProperty(stuffing)) {
      console.error(`Необоходимо указать существующую начинку: ${Object.keys(PRICE_AND_CALORIES.stuff)}` );
      return;
    }
    this.size = size;
    this.stuff = stuffing;
    this.toppings = [];

    return this;
  }

  // Добавить добавку
  addTopping(topping) {
    if(!PRICE_AND_CALORIES.topping.hasOwnProperty(topping)) {
      console.error(`Необоходимо указать существующую добавку: ${Object.keys(PRICE_AND_CALORIES.topping)}`);
      return this;
    }
    this.toppings.push(topping);
    return this;
  }

  // Убрать добавку
  removeTopping(topping) {
    this.toppings = this.toppings.filter(addedTopping => addedTopping !== topping);
    return this;
  }

  // Получить список добавок
  getToppings(topping) {
    return this.toppings.toString();
  }

  // Узнать размер гамбургера
  getSize() {
    return this.size;
  }

  // Узнать начинку гамбургера
  getStuffing() {
    return this.stuff;
  }

   // Узнать цену
  calculatePrice() {
    let price = PRICE_AND_CALORIES.size[this.size].price;
    price += PRICE_AND_CALORIES.stuff[this.stuff].price;
    price += this.toppings.reduce((acum, topping) => acum+PRICE_AND_CALORIES.topping[topping].price, 0);
    return price;
  }

   // Узнать калорийность
  calculateCalories() {
    let calories = PRICE_AND_CALORIES.size[this.size].calories;
    calories += PRICE_AND_CALORIES.stuff[this.stuff].calories;
    calories += this.toppings.reduce((acum, topping) => acum+PRICE_AND_CALORIES.topping[topping].calories, 0);
    return calories;
  }
}

const h1 = new Hamburger('small', 'cheese')
  .addTopping('mayonnaise')
  .addTopping('seasoning')
  .addTopping('mayonnaise')
  .removeTopping('mayonnaise');

console.log(h1.calculatePrice());
console.log(h1.calculateCalories());
console.log(h1);