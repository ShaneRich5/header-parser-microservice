var express = require('express');
var app = express();

app.get('/api/whoami', function(req, res) {
    
});

app.listen(8080, function() {
    console.log("header-parser running on port 8080");
});