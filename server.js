// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(fileUpload());

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

const fileMeta = {};

app.route('/api/upload').post(function(req,res) {
          let {name,size,mimetype} = req.files.file;
          fileMeta.name = name;
          fileMeta.type = mimetype;
          fileMeta.size = size;
         });
app.route('/api/filemeta').get(function(req, res) {
            let {name,size,type} = fileMeta;
            console.log(fileMeta);
            res.send(fileMeta);
            name = '';
            size = '';
            type = '';
          });