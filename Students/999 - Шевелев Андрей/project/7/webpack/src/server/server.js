let express = require('express')
let fs = require('fs')
let bodyParser = require('body-parser')
let dateFormat = require('dateformat')

let server = express()
server.use(express.json())

let urlencodedParser = bodyParser.urlencoded({ extended: false })
let jsonParser = bodyParser.json()

server.use('/', express.static('./src/static'))

server.get('/catalog', (req, res) => {
    fs.readFile('./src/server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404, JSON.stringify({ result: 0 }))
        }
    })
})

server.get('/cart', (req, res) => {
    fs.readFile('./src/server/database/cart.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404, JSON.stringify({ result: 0 }))
        }
    })
})
server.post('/login', urlencodedParser, (req, res) => {
    res.send(JSON.stringify({ result: 1 }))
    console.log('Welcome: ' + req.body.username)
})

function addToStats(js, act) {
    let arr = []
    let nowDate = dateFormat(new Date(), "dd.MM.yyyy HH:MM:ss")
    let ob = Object.assign({
        act: act,
        product: js.product_name,
        dateTime: nowDate
    })
    fs.readFile('./src/server/database/stats.json', 'utf-8', (err, data) => {
        if (data) {
            arr = JSON.parse(data)
        }
        arr.push(ob)
        fs.writeFile('./src/server/database/stats.json', JSON.stringify(arr), (err, data) => {})

    })
}
server.post('/deletefromcart', jsonParser, (req, res) => {

    res.send(JSON.stringify({ result: 1 }))
    let js = req.body
    addToStats(js, 'delete')
})

server.post('/addtocart', jsonParser, (req, res) => {

    res.send(JSON.stringify({ result: 1 }))
    let js = req.body
    addToStats(js, 'add')

})

server.listen(8080, () => { console.log('listening at port 8080') })