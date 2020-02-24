const fs = require ('fs')

function writeFile (path, text, res)
    fs.writeFile(path, JSON.stringify(carts), (err) => {
    if (err) {
       res.sendStatus(500, '{"result": 0}')
     } else {
       res.send('{"result": 1}')
     }
})

module.exports = writeFile