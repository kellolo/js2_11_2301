const fs = require('fs')
const logger = require('./logger')
function writeFile(file, text, res, log) {
    fs.writeFile(file, text, (err) => {
        if(err) {
            res.sendStatus(500, '{"result": 0}')
        } else {
            res.send('{"result": 1}')
            logger(log.name, log.action)
        }
    })
}

module.exports = writeFile