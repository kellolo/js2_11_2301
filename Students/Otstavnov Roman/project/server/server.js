const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cart = require('./cart');
const logger = require('./logger');
const writeToFile = require('./writeToFile');

const catalogPath = './database/catalog.json';
const cartPath = './database/cart.json';
const statsPath = './database/stats.json';

const server = express();
server.use(express.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/', express.static('./static'));

server.get('/catalog', (req, res) => {
  fs.readFile(catalogPath, 'utf-8', (err, data) => {
    if (!err) {
      res.send(data)
    } else {
      res.sendStatus(404, JSON.stringify({result: 0}))
    }
  })
});

server.get('/cart', (req, res) => {
  fs.readFile(cartPath, 'utf-8', (err, data) => {
    if (!err) {
      res.send(data)
    } else {
      res.sendStatus(404, JSON.stringify({result: 0}))
    }
  })
});

server.post('/cart/add', (req, res) => {
  const newItem = req.body;
  fs.readFile(cartPath, 'utf-8', (err, data) => {
    if(!err) {
      const cartItems = cart.add(JSON.parse(data), newItem);
      writeToFile(
        res,
        cartPath,
        cartItems,
        () => {
          res.send(JSON.stringify({cartItems}));
          logger(statsPath, 'add', {
            product_id: newItem.product_id,
            product_name: newItem.product_name,
          });
        });
    } else {
      res.sendStatus(500, JSON.stringify({ result: 0 }))
    }
  });
});

server.delete('/cart/:id', (req, res) => {
  const id = +req.params.id;
  fs.readFile(cartPath, 'utf-8', (err, data) => {
    if (!err) {
      const deletedItem = cart.getItem(JSON.parse(data), id);
      const cartItems = cart.delete(JSON.parse(data), id);
      writeToFile(
        res,
        cartPath,
        cartItems,
        () => {
          res.send(JSON.stringify({cartItems}));
          logger(statsPath, 'remove', {
            product_id: deletedItem.product_id,
            product_name: deletedItem.product_name,
          });
        });
    } else {
      res.sendStatus(500, JSON.stringify({result: 0}))
    }
  });
});

server.listen(7001, () => console.log(`
listening at port http://localhost:7001
catalog: http://localhost:7001/catalog
cart: http://localhost:7001/cart
`));
