
let express = require('express');
let fs = require ('fs');

let server = express ();
server.use (express.json());

let cart = require('./cart');
let writer = require('./writter');

server.use ('/', express.static('./src/static'));

server.get ('/catalog', (req, res) => {
    fs.readFile ('./src/server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data)
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
    })
});

server.get ('/cart', (req, res) => {
    fs.readFile ('./src/server/database/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data)
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
    })
});


server.post('/cart', (req, res) => {
    let path = './src/server/database/cart.json';
    fs.readFile (path, 'utf-8', (err, data) => {
        if (!err) {
            // cart.add(req, data)
            let {newCart, name} = cart.add(req, JSON.parse(data));
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'add'})
        } else {
            res.sendStatus (500, JSON.stringify ({result: 0}))
        }
    })
});
server.put('/cart/:id', (req, res) => {
    let path = './src/server/database/cart.json';
    fs.readFile (path, 'utf-8', (err, data) => {
        if (!err) {
            // cart.add(req, data)
            let {newCart, name} = cart.change(req, JSON.parse(data))
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'change'})
        } else {
            res.sendStatus (500, JSON.stringify ({result: 0}))
        }
    })
});
server.delete('/cart/:id', (req, res) => {
    let path = './src/server/database/cart.json';
    fs.readFile (path, 'utf-8', (err, data) => {
        if (!err) {
            let {newCart, name} = cart.delete(req, JSON.parse(data));
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'del'})
        } else {
            res.sendStatus (500, JSON.stringify ({result: 0}))
        }
    })
});

server.listen (8080, () => {console.log ('listening at port 8080')});

