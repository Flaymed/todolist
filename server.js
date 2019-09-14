//Basic variables
const http = require('http');
const express = require('express');
const app = express();

require('events').EventEmitter.defaultMaxListeners = 0;
//Database connection
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./private/db/database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
});

app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Frontend Get Requests
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/css/style.css', function(req, res) {
  res.sendFile(__dirname + '/public/css/style.css');
});
//Backend Post Requests


//Listen the app on port 8080
const listener = app.listen(8080, function() {
  console.log('Your app is listening on port ' + 8080);
});
