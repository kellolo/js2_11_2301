let fs = require('fs')
let moment = require('moment')
let file = './src/server/database/log.json'

function logger (name, action) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (!err) {
            let logs = JSON.parse(data)
            logs.push({
                time: moment().format('DD MM YYY hh:mm:ss'),
                product: name,
                userAction: action
            })
            fs.writeFile(file, JSON.stringify(logs), (er) => {
                if(er) {
                    console.log("error write file log")
                }
            })
          } else {
                console.log("error read file log")
        }
        })
}

module.exports = logger