const fs = require('fs');

const logger = (file, action, data) => {
  fs.readFile (file, 'utf-8', (err, fileData) => {
    if (!err) {
      const stats = JSON.parse(fileData);
      stats.push({
        action,
        data,
        time: +new Date().getTime()
      });
      fs.writeFile(file, JSON.stringify(stats,  null, ' '), (err) => {
        if (err) {
          console.error(`write error: ${err}`);
        }
      });
    } else {
      console.error(`read error: ${err}`);
    }
  });
};

module.exports = logger;