class Food {
    constructor() {
        this.humburger = [];
        this.humburgerSet = [];
        this.ingredients = [];
    }

    fetchBurger() {
        this.humburger = [
            { id: 'smallGum', title: 'Маленький гамбургер', price: 50, calories: 20 },
            { id: 'bigGum', title: 'Большой гамбургер', price: 100, calories: 40 }
        ];
        this.humburgerSet = [
            { id: 'cheese', title: 'Сыр', price: 10, calories: 20 },
            { id: 'salad', title: 'Салат', price: 20, calories: 5 },
            { id: 'potato', title: 'Картофель', price: 15, calories: 10 }
        ];
        this.ingredients = [
            { id: 'mayonnaise', title: 'Майонез', price: 20, calories: 5 },
            { id: 'sauce', title: 'Приправа', price: 15, calories: 0 },
        ];
    }

    //метод подчета стоимости и калорийности
    calc(item){
        let humBlock = item.closest('div');
        let input =  humBlock.querySelectorAll('input');

        let blockPrice = humBlock.getElementsByClassName('price');
        let blockCalories = humBlock.getElementsByClassName('calories');

        let p = 0;
        let c = 0;

        for (let i = 0; i < input.length; i++){
            if (input[i].checked){
                p += parseInt(input[i].getAttribute('data-price'));
                c += parseInt(input[i].getAttribute('data-calories'));
            }
        }
        blockPrice[0].innerHTML = p;
        blockCalories[0].innerHTML = c;
    }

    //метод для добавления нескольких атрибутов разом
    setAttributes(element, attr) {
        for(let key in attr) {
            element.setAttribute(key, attr[key]);
        }
    }

    render() {
        let elem = document.getElementById('main');
        let form = document.createElement('form');
        //рендер чекбоксов с гамбергерами
        for (let i = 0; i < this.humburger.length; i++) {
            let block = document.createElement('div');
            block.id = 'burger' + i;
            let label = document.createElement('label');
            let input = document.createElement('input');

            // добавляем атрибуты для label
            this.setAttributes(label, {
                "for" : this.humburger[i].id,
            });
            label.innerHTML = this.humburger[i].title;

            // добавляем атрибуты для input
            this.setAttributes(input,{
                "type" : "checkbox",
                "for" : this.humburger[i].id,
                "id" : this.humburger[i].id,
                "name" : this.humburger[i].id,
                "data-price" : this.humburger[i].price,
                "data-calories" : this.humburger[i].calories,
                "onchange" : 'calc(this, this.id)'
            });

            let blockId = this.humburger[i].id;

            // добавляем на страницу
            form.appendChild(block);
            block.appendChild(label);
            label.appendChild(input);
            block.innerHTML += '<span class="info">Цена: ' + this.humburger[i].price + ', Калории: ' + this.humburger[i].calories + ' </span>';

            //рендер чекбоксов с составом гамбургера
            block.innerHTML += '<span class="line margin">Состав:</span>';
            for (let i = 0; i < this.humburgerSet.length; i++) {
                let label = document.createElement('label');
                let input = document.createElement('input');

                // добавляем атрибуты для label
                this.setAttributes(label, {
                    "for" : this.humburgerSet[i].id,
                });
                label.innerHTML = this.humburgerSet[i].title;

                // добавляем атрибуты для input
                this.setAttributes(input,{
                    "type" : "checkbox",
                    "for" : this.humburgerSet[i].id,
                    "name" : this.humburgerSet[i].id,
                    "id" : blockId + '_' + this.humburgerSet[i].id,
                    "data-price" : this.humburgerSet[i].price,
                    "data-calories" : this.humburgerSet[i].calories,
                    "onchange" : 'calc(this, this.id)'
                });

                // добавляем на страницу
                block.appendChild(label);
                label.appendChild(input);
                block.innerHTML += '<span class="info">Цена: ' + this.humburgerSet[i].price + ', Калории: ' + this.humburgerSet[i].calories + ' </span>';

            }

            //рендер чекбоксов с доп. ингридиентами
            block.innerHTML += '<span class="line margin">Доп. ингридиенты:</span>';
            for (let i = 0; i < this.ingredients.length; i++) {
                let label = document.createElement('label');
                let input = document.createElement('input');

                // добавляем атрибуты для label
                this.setAttributes(label, {
                    "for" : this.ingredients[i].id,
                    "id" : this.ingredients[i].id
                });
                label.innerHTML = this.ingredients[i].title;

                // добавляем атрибуты для input
                this.setAttributes(input,{
                    "type" : "checkbox",
                    "for" : this.ingredients[i].id,
                    "name" : this.ingredients[i].id,
                    "id" : blockId + '_' + this.ingredients[i].id,
                    "data-price" : this.ingredients[i].price,
                    "data-calories" : this.ingredients[i].calories,
                    "onchange" : 'calc(this, this.id)'

                });

                // добавляем на страницу
                block.appendChild(label);
                label.appendChild(input);
                block.innerHTML += '<span class="info">Цена: ' + this.ingredients[i].price + ', Калории: ' + this.ingredients[i].calories + ' </span>';

            }
            block.innerHTML += '<hr style="margin-top: 10px">';
            block.innerHTML += 'Стоимость: <b><span class="price">0</span></b>, Калорий: <b><span class="calories">0</span></b>';
            block.innerHTML += '<hr style="margin-bottom: 30px">';
        }
        elem.appendChild(form);
    }
}

let food = new Food();
food.fetchBurger();
food.render();

//дёрнем метод подсчета калорий из класса food через onchange, присвоенный чекбоксам
function calc(elem) {
    food.calc(elem);
}