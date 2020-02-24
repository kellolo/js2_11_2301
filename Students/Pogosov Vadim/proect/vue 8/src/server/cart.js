let cart = {
    change (req, cart) {
        let id = +req.params.id
        let find = cart.contents.find (element => element.id_product === id)
        find.quantity += +req.body.delta
        return {newCart:cart, name:find.product_name}
    },
    add (req, cart) {
        let el_cart = req.body
        cart.contents.push(Object.assign({}, el_cart, {quantity:1}))
        return {newCart:cart, name:el_cart.product_name}
    },
    delete (req, cart) {
        let id = +req.params.id
        let find = cart.contents.find (element => element.id_product === id)
        cart.contents.splice(cart.contents.indexOf(find), 1) 
        return {newCart:cart, name:find.product_name}
    },
    
}


module.exports = cart
