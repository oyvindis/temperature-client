const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const compression = require('compression');

module.exports = {
  start() {
    const app = express();
    app.use(express.static(path.join(__dirname, '/../build')));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    const port = Number(process.env.PORT || 3000);
    app.set('port', port);

    app.use('/env.json', express.static(path.join(__dirname, 'env.json')));

    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '/../build/index.html'));
    });

    app.listen(app.get('port'), () => {
      console.log(`Frontend start on http://localhost:3000`);
    });
  }
};
