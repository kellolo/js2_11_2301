
let express = require('express')
let fs = require ('fs')
let bodyParser = require('body-parser')

let server = express ()
server.use (express.json())

server.use ('/', express.static('./src/static'))

server.use(bodyParser.json())

server.get ('/catalog', (req, res) => {
    fs.readFile ('./src/server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data)
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
    })
})

server.get ('/cart1', (req, res) => {
    fs.readFile ('./src/server/database/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data)
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
    })
})

server.get ('/pr', (req, res) => {
    fs.readFile ('./src/server/database/pr.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data)
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
    })
})

server.post('/add_btnClick', (req, res) => {
    fs.readFile('./src/server/database/cart.json', 'utf8', (err, data) => {
        if (!err) {
            res.send (data)
            console.log(req.body)
            // let cart = JSON.parse(data)//  
            let carts = req.body
            // cart.push(item);

            fs.writeFile('./src/server/database/cart.json', JSON.stringify(carts), (err) => {
                 if (err) {
                    res.send('{"result": 0}')
                  } else {
                    res.send('{"result": 1}')
                  }
            })

        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
        
    })
  })

server.listen (8080, () => {console.log ('listening at port 8080')})

