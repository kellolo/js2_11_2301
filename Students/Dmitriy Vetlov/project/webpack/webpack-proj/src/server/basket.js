let basket = {
    change(req, basket) {
        let id = +req.params.id
        let find = this._findItem(basket, id)
        find.quantity += +req.body.delta
        return {newBasket: basket, name: find.product_name}
    },
    add(req, basket) {
        let item = req.body
        basket.contents.push(Object.assign({}, item, {quantity: 1}))
        return {newBasket: basket, name: item.product_name}
    },
    delete(req, basket) {
        let id = +req.params.id
        let find = this._findItem(basket, id)
        basket.contents.splice(basket.contents.indexOf(find), 1)
        return {newBasket: basket, name: find.product_name}
    },
    _findItem(basket, id) {
        return basket.contents.find(item => item.id_product === id)
    }
}

module.exports = basket