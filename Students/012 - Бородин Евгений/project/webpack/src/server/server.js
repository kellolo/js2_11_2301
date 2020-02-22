
let express = require('express')
let fs = require ('fs')

let server = express ()
server.use (express.json())

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