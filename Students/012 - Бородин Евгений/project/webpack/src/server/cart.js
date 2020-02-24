let cart = {
    change (req, cart) {
        let id = +req.params.id
        let find = this._findItem(cart, id)
        find.quantity += +req.body.delta
        this._calcCart(cart)
        return {newCart: cart, name: find.product_name}
    },
    add (req, cart) {
        let item = req.body
        cart.contents.push(Object.assign({}, item, {quantity: 1}))
        this._calcCart(cart)
        return {newCart: cart, name: item.product_name}
    },
    delete (req, cart) {
        let id = +req.params.id
        let find = this._findItem(cart, id)
        cart.contents.splice(cart.contents.indexOf(find), 1)
        this._calcCart(cart)
        return {newCart: cart, name: find.product_name}
    },
    _findItem (cart, id) {
        return cart.contents.find(item => item.id_product === id)
    },
    _calcCart (cart) {
        let cost = 0
        let count = 0
        cart.contents.forEach (item => {
            cost += item.price * item.quantity
            count += item.quantity
        })
        cart.amount = cost
        cart.countGoods = count
    },
}

module.exports = cart