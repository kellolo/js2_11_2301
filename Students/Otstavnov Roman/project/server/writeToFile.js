const fs = require('fs');

function writeToFile (res, file, data, onSuccess) {
  fs.writeFile(file, JSON.stringify(data, null, ' '), (err) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0}))
    } else {
      onSuccess();
    }
  })
}

module.exports = writeToFile;