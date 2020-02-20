let express = require('express');
let fs = require('fs');
const bodyParser = require('body-parser');

let server = express();
server.use(express.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/', express.static('./src/static'));

server.get('/catalog', (req, res) => {
  fs.readFile('./src/server/database/catalog.json', 'utf-8', (err, data) => {
    if (!err) {
      res.send(data)
    } else {
      res.sendStatus(404, JSON.stringify({result: 0}))
    }
  })
});

server.get('/cart', (req, res) => {
  fs.readFile('./src/server/database/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      res.send(data)
    } else {
      res.sendStatus(404, JSON.stringify({result: 0}))
    }
  })
});

server.post('/cart/add', (req, res) => {
  const newItem = req.body;
  console.log(newItem);
  const cartItems = getCartItems();
  if (cartItems && newItem.product_id && newItem.product_name && newItem.price) {
    const find = cartItems.find(cartItem => cartItem.product_id === +newItem.product_id);
    if (!find) {
      cartItems.push({
        ...newItem,
        quantity: 1
      })
    } else {
      find.quantity++
    }
  }
  fs.writeFile('./src/server/database/cart.json', JSON.stringify(cartItems), (err) => {
    if (!err) {
      res.send(JSON.stringify({cartItems: cartItems}));
      setStats('add', {
        product_id: newItem.product_id,
        product_name: newItem.product_name,
      });
    } else {
      res.sendStatus(404, JSON.stringify({result: 0}))
    }
  });
});
server.post('/cart/remove', (req, res) => {
  const item = req.body;
  const cartItems = getCartItems();
  if (item.product_id) {
    const find = cartItems.find(cartItem => cartItem.product_id === item.product_id);
    if (find.quantity > 1) {
      find.quantity--
    } else {
      cartItems.splice(cartItems.indexOf(find), 1)
    }
  }
  fs.writeFile('./src/server/database/cart.json', JSON.stringify(cartItems), (err) => {
    if (!err) {
      res.send(JSON.stringify({cartItems: cartItems}));
      setStats('remove', {
        product_id: item.product_id,
        product_name: item.product_name,
      });
    } else {
      res.sendStatus(404, JSON.stringify({result: 0}))
    }
  });
});

server.listen(7001, () => console.log(`
listening at port http://localhost:7001
catalog: http://localhost:7001/catalog
cart: http://localhost:7001/cart
`));


const getCartItems = () => JSON.parse(fs.readFileSync(
  './src/server/database/cart.json',
  'utf-8'
));

const setStats = (action, item) => {
  const stats = JSON.parse(fs.readFileSync(
    './src/server/database/stats.json',
    'utf-8'
  )) || [];

  stats.push({
    action,
    item,
    time: +new Date().getTime()
  });

  fs.writeFile('./src/server/database/stats.json', JSON.stringify(stats), (err) => {
    if (err) {
      throw new Error(err);
    }
  });
};