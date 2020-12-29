var express = require('express');
var app = express();
var path = require('path');
var port = 8082;

// viewed at http://localhost:8082
app.get('/siding', function(req, res) {
    res.sendFile(path.join(__dirname + '/siding.html'));
});

app.get('/inventory', function(req, res) {
    res.sendFile(path.join(__dirname + '/inventory.html'));
});

console.log("Server running on " + port);
app.listen(port);
