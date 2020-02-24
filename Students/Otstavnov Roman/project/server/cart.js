const cart = {
  add (cart, item) {
    const find = this.getItem(cart, item.product_id);
    if (!find) {
      cart.push({...item, quantity: 1})
    } else {
      find.quantity++
    }
    return cart;
  },
  delete (cart, id) {
    const find = this.getItem(cart, id);
    if (find && find.quantity > 1) {
      find.quantity--
    } else {
      cart.splice(cart.indexOf(find), 1)
    }
    return cart;
  },
  getItem (cart, id) {
    return cart.find(item => item.product_id === id)
  }
};

module.exports = cart;