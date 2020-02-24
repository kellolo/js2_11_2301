
let express = require('express')
let fs = require ('fs')

let server = express ()
server.use (express.json())

let cart = require('./cart')
let writer = require('./writer')

server.use ('/', express.static('./src/static'))

server.get ('/catalog', (req, res) => {
    fs.readFile ('./src/server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data)
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
    })
})

server.get ('/cart', (req, res) => {
    fs.readFile ('./src/server/database/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send (data)
        } else {
            res.sendStatus (404, JSON.stringify ({result: 0}))
        }
    })
})


server.post('/cart', (req, res) => {
    let path = './src/server/database/cart.json'
    fs.readFile (path, 'utf-8', (err, data) => {
        if (!err) {
            // cart.add(req, data)
            let {newCart, name} = cart.add(req, JSON.parse(data))
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'add'})
        } else {
            res.sendStatus (500, JSON.stringify ({result: 0}))
        }
    })
}) // добавление нового товара в корзину
server.put('/cart/:id', (req, res) => {
    let path = './src/server/database/cart.json'
    fs.readFile (path, 'utf-8', (err, data) => {
        if (!err) {
            // cart.add(req, data)
            let {newCart, name} = cart.change(req, JSON.parse(data))
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'change'})
        } else {
            res.sendStatus (500, JSON.stringify ({result: 0}))
        }
    })
}) // изменение к-ва сущ в корзине товара
server.delete('/cart/:id', (req, res) => {
    let path = './src/server/database/cart.json'
    fs.readFile (path, 'utf-8', (err, data) => {
        if (!err) {
            // cart.add(req, data)
            let {newCart, name} = cart.delete(req, JSON.parse(data))
            writer(path, JSON.stringify(newCart, null, ' '), res, {name: name, action: 'del'})
        } else {
            res.sendStatus (500, JSON.stringify ({result: 0}))
        }
    })
}) // удаление товара

server.listen (8080, () => {console.log ('listening at port 8080')})




// let http = require('http')

// let server = http.createServer ((req, res) => {
//     if (req.url === '/') {
//         res.write ('Main Page')
//         res.end()
//     } else if (req.url === '/messages') {
//         res.write ('Messages')
//         res.end()
//     } else if (req.url === '/users') {
//         res.write ('Users')
//         res.end()
//     } else if (req.url === '/users-list') {
//         let users = {
//             ann: {age: 23, height: 167},
//             john: {age: 24, height: 186}
//         }
//         res.write (JSON.stringify(users))
//         res.end()
//     } 
// })

// server.listen (8080)
// server.on ('connection', () => {
//     console.log ('new connection')
// })