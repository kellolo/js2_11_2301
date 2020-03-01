let express = require('express');
let fs = require('fs');

let server = express();
let cart = require('./cart');
let writer = require('./writer');

server.use(express.json());

server.get('/catalog', (request, response) =>{
  fs.readFile('./src/server/database/catalog.json', 'utf-8', (err, data) =>{
    if(!err) {
      response.send(data);
    } else {
      response.sendStatus(404, JSON.stringify({result: 0}))
    }
  })
});

server.get('/cart', (request, response) => {
  fs.readFile('./src/server/database/cart.json', 'utf-8', (err, data) => {
    if (!err) {
      response.send(data)
    } else {
      response.sendStatus(404, JSON.stringify({result: 0}))
    }
  })
});

server.post('/cart', (request, response) => {
  let path = './src/server/database/cart.json';
  fs.readFile(path, 'utf-8', (err, data) => {
    if (!err) {
     let {newCart, name} = cart.add(request, JSON.parse(data))
     writer(path, JSON.stringify(newCart, null, ' '), response, { name: name, action: 'add'})
    } else {
      response.sendStatus(500, JSON.stringify({result: 0}))
    }
  })
});

server.put('/cart/:id', (request, response) => {
  let path = './src/server/database/cart.json';
  fs.readFile(path, 'utf-8', (err, data) => {
    if (!err) {
     let {newCart, name} = cart.change(request, JSON.parse(data))
     writer(path, JSON.stringify(newCart, null, ' '), response, { name: name, action: 'change'})
    } else {
      response.sendStatus(500, JSON.stringify({result: 0}))
    }
  })
});

server.delete('/cart/:id', (request, response) => {
  let path = './src/server/database/cart.json';
  fs.readFile(path, 'utf-8', (err, data) => {
    if (!err) {
     let {newCart, name} = cart.delete(request, JSON.parse(data))
     writer(path, JSON.stringify(newCart, null, ' '), response, { name: name, action: 'delete'})
    } else {
      response.sendStatus(500, JSON.stringify({result: 0}))
    }
  })
});

server.listen(8080, () => {
  console.log('port 8080');
});