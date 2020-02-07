let orderForm = document.querySelector('#order-form')
let calculateBtn = document.querySelector('#calculateBtn')
let outputContainer = document.querySelector('.total-output')

calculateBtn.addEventListener('click', addOrder)

function addOrder() {
    let newOrder = new Order('size', 'filling', 'additive')
    let price = getTotalPrice(newOrder)
    let calories = getTotalCalories(newOrder)
    renderResult(price, calories)
}

function getTotalPrice(arr) {
    let prices = []
    arr.Additive.forEach(el => prices.push(el.price))
    prices.push(arr.Size.price)
    prices.push(arr.Filling.price)

    return prices.reduce((total, el) => {
        return total += +el
    }, 0)
}

function getTotalCalories(arr) {
    let calories = []
    arr.Additive.forEach(el => calories.push(el.calories))
    calories.push(arr.Size.calories)
    calories.push(arr.Filling.calories)

    return calories.reduce((total, el) => {
        return total += +el
    }, 0)
}

function renderResult(price, calories) {
    let str = `
        <p class="total-output__price"> <span>Стоимость</span>: ${price}</p>
        <p class="total-output__calories"> <span>Калорий</span>: ${calories}</p>
    `
    outputContainer.innerHTML = str
}

class Order {
    constructor(size, filling, additive) {
        this.Size = this._getData(size)
        this.Filling = this._getData(filling)
        this.Additive = this._getArray(additive)
    }
    _getData(attr) {
        var obj = document.querySelector(`input[name=${attr}]:checked`)
        return obj.dataset
    }
    _getArray(attr) {
        let objArr = [...document.querySelectorAll(`input[name=${attr}]:checked`)]
        let arr = []
        objArr.forEach(el => {
            arr.push(el.dataset)
        })

        return arr
    }
}