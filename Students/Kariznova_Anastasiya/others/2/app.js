let form = document.querySelector ('#uForm');
let btn = document.querySelector ('#okBtn');
let burgers = [];

btn.addEventListener ('click', addBurger);

function addBurger () {
    let newBurger = new Burger ('size', 'filling', 'addition');
    burgers.push (newBurger);
    alert('your burger price = ' + burgers[burgers.length - 1].Price + '\nyour burger calories = '+ burgers[burgers.length - 1].Calories)
    console.log(burgers);
};


class Burger {
    constructor (size, filling, addition) {
        this.Size = this._check (size);
        this.Filling = this._check (filling);
        this.Addition = this._getArray (addition);
        this.Price = this.countPrice(size, filling, addition);
        this.Calories = this.countCalories(size, filling, addition);        
    }
    _check (attrName) {
        let obj = document.querySelector (`input[name=${attrName}]:checked`);
        return obj.value
    }
    _getArray (attrName) {
        let objArr = [...document.querySelectorAll (`input[name=${attrName}]:checked`)];
        let arr = []
        objArr.forEach (el => {
            arr.push (el.value)
        })
        return arr
    }

    countCalories(size, filling, addition) {
        let objSize = document.querySelector (`input[name=${size}]:checked`);
        let sum = +objSize.dataset.calories;

        let objFilling = document.querySelector (`input[name=${filling}]:checked`);
        sum += +objFilling.dataset.calories;

        let objs = [...document.querySelectorAll (`input[name=${addition}]:checked`)];
        objs.forEach(element => sum += +element.dataset.calories);
        return sum
    }

    countPrice(size, filling, addition) {
        let objSize = document.querySelector (`input[name=${size}]:checked`);
        let sum = +objSize.dataset.price;

        let objFilling = document.querySelector (`input[name=${filling}]:checked`);
        sum += +objFilling.dataset.price;
        
        let objs = [...document.querySelectorAll (`input[name=${addition}]:checked`)];
        objs.forEach(element => sum += +element.dataset.price);
        return sum
    }  
}
