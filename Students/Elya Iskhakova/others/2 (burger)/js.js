'use strict';

let uForm = document.querySelector('#uForm'),
    btn = document.querySelector ('#btn'),
    total = document.querySelector ('.total');

uForm.addEventListener('change', updateOrder); // автоматическое обновление цен\калорий при изменении инпутов
btn.addEventListener('click', updateOrder); // кнопка не особо нужна тут получается, возможно пригодится для отправки заказа
    // вызываем фукцию, которая создает новый объект при изменении формы заказа, через eventListener(ы),
    // которая в свою очередь вызывает подсчет суммы и кол-ва калорий и вывод инфы в html
function updateOrder() {
  let burger = new Burger ('price', 'calories', 'size', 'stuffing', 'extra');
  burger.showTotal();
}

class Burger {
    constructor (price, calories, size, stuffing, extra) {
      this.price = 0;
      this.calories = 0;
      this.size = this._getSize(size);
      this.stuffing = this._getStuffing(stuffing);
      this.extra = this._getExtra(extra);
    }
    // получаем объект с данными из дата-атрибутов по цене
    _getPrice(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    }
    // получаем объект с данными из дата-атрибутов по калориям
    _getCalories(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    }
    // получаем объект с данными из дата-атрибутов по размеру
    _getSize(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);
      return obj.dataset;     
    }
    // получаем объект с данными из дата-атрибутов по начинке
    _getStuffing(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj.dataset;
    }
    // получаем массив(ы) с данными из дата-атрибутов по выбранным добавкам
    _getExtra (attrName) {
      let objArr = [...uForm.querySelectorAll (`input[name=${attrName}]:checked`)];
      let arr = [];
      objArr.forEach (i => {
          arr.push ([i.dataset.price, i.dataset.calories]);
      });
      return arr;
    }
    // считаем суммы цена/калории за размер + за начинку, перебором массива определяем стоимость/калории выбранных добавок и добавляем в общую сумму
    calculateOrder() {		
      this.price = +this.size.price + +this.stuffing.price;
      this.calories = +this.size.calories + +this.stuffing.calories;
      this.extra.forEach (i => {
        this.price += +(i[0]);
        this.calories += +(i[1]);
      });
    }
    // показываем общую сумму и кол-во калорий, вызов метода "показать" происходит при создании нового объекта бургер через класс
    showTotal () {		
      this.calculateOrder();
        total.innerText = `Итого: ${this.price} рублей / rub, ${this.calories} калорий / calories`;
    }
}
    // в конце для того, чтобы  сумма подсчитывалась при загрузке страницы уже на автоматически checked инпутах
updateOrder();