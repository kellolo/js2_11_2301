let express = require('express');
let fs = require('fs');
//const bodyParser = require('body-parser');


let server = express();

server.use(express.json());
//server.use(bodyParser.json());

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

// server.get('/addtocart', (req, res) => {
//   fs.readFile('./src/server/database/cart.json', 'utf8', (err, data) => {
//     console.log(1,  res);
//     const cart = JSON.parse(data);
//     const item = req.body;
//   //  console.log(req);
//     cart.contents.push(item);

//     fs.writeFile('./src/server/database/cart.json', JSON.stringify(cart), (err) => {
//       console.log('done');
//     });
//   });
// });

server.listen(8080, () => {
  console.log('port 8080');
});