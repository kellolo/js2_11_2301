
let express = require('express');
let fs = require ('fs');

let server = express ();
server.use (express.json());

server.use ('/', express.static('./src/static'));

server.get ('/catalog', (req, res) => {
    fs.readFile ('./src/server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data);
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}));
        }
    })
});

server.get ('/cart', (req, res) => {
    fs.readFile ('./src/server/database/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data);
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}));
        }
    })
});

server.listen (8080, () => {console.log ('listening at port 8080')});