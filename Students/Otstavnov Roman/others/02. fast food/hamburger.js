class Hamburger {
  static hamburgers = [];
  static count = 0;

  static createHamburger (size, stuffing) {
    if(!size) {
      console.error(`Необоходимо указать размер` );
      return;
    }
    if(!stuffing) {
      console.error(`Необоходимо указать начинку` );
      return;
    }
    const newHamburger = new Hamburger(size, stuffing, ++Hamburger.count);
    this.hamburgers.push(newHamburger);
    return newHamburger;
  }

  constructor(size, stuffing, id) {
    this.id = id;
    this.size = {
      name: size.value,
      price: +size.dataset.price,
      calories: +size.dataset.calories,
    };
    this.stuff = {
      name: stuffing.value,
      price: +stuffing.dataset.price,
      calories: +stuffing.dataset.calories,
    };
    this.toppings = [];
  }

  // Добавить добавку
  addTopping(topping) {
    if(!topping) {
      console.error(`Необоходимо указать существующую добавку`);
      return this;
    }
    this.toppings.push({
      name: topping.value,
      price: +topping.dataset.price,
      calories: +topping.dataset.calories,
    });
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
    let price = this.size.price;
    price += this.stuff.price;
    price += this.toppings.reduce((acum, topping) => acum + topping.price, 0);
    return price;
  }

   // Узнать калорийность
  calculateCalories() {
    let calories = this.size.calories;
    calories += this.stuff.calories;
    calories += this.toppings.reduce((acum, topping) => acum + topping.calories, 0);
    return calories;
  }
}