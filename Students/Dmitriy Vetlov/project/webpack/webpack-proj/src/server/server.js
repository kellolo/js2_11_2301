let express = require('express')
let fs = require('fs')

let server = express()
server.use(express.json())

let basket = require('./basket')
let writer = require('./writer')

server.use('/', express.static('./src/static'))

server.get('/catalog', (req, res) => {
    fs.readFile('./src/server/database/catalog.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.sendStatus(404, JSON.stringify ({result: 0}))
        }
    })
})

server.get('/basket', (req, res) => {
    fs.readFile('./src/server/database/basket.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            res.sendStatus(404, JSON.stringify ({result: 0}))
        }
    })
})

server.post('/basket', (req, res) => {
    let path = './src/server/database/basket.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if(!err) {
            let {newBasket, name} = basket.add(req, JSON.parse(data))
            writer(path, JSON.stringify(newBasket, null, ' '), res, {name: name, action: 'add'})
        } else {
            res.sendStatus(500, JSON.stringify ({result: 0}))
        }
    })
})

server.put('/basket/:id', (req, res) => {
    let path = './src/server/database/basket.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if(!err) {
            let {newBasket, name} = basket.change(req, JSON.parse(data))
            writer(path, JSON.stringify(newBasket, null, ' '), res, {name: name, action: 'change'})
        } else {
            res.sendStatus(500, JSON.stringify ({result: 0}))
        }
    })
})
server.delete('/basket/:id', (req, res) => {
    let path = './src/server/database/basket.json'
    fs.readFile(path, 'utf-8', (err, data) => {
        if(!err) {
            let {newBasket, name} = basket.delete(req, JSON.parse(data))
            writer(path, JSON.stringify(newBasket, null, ' '), res, {name: name, action: 'del'})
        } else {
            res.sendStatus(500, JSON.stringify ({result: 0}))
        }
    })
})

server.listen(8080, () => {console.log('Am-a port 8080')})






// let http = require('http')

// //роутинг=====================================

// let server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.write('Main page')
//         res.end()
//     } else if (req.url === '/messages') {
//         res.write('Messages')
//         res.end()
//     } else if (req.url === '/users') {
//         res.write('Users')
//         res.end()
//     } else if (req.url === '/users-list') {
//         let users = {
//             Ann: {age: 23, height: 173},
//             John: {age: 21, height: 182}
//         }
//         res.write(JSON.stringify(users))
//         res.end()
//     }
// })

// server.listen(8080)
// server.on('connection', () => {
//     console.log('new connection')
// })