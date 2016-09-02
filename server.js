var express = require('express');
var app = express();

app.get('/api/whoami', function(req, res) {
    var os = req.headers['user-agent'].match(/\(.*\)/)[0].split(/\)/)[0].substring(1);
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: os
        
    })
});

app.listen(8080, function() {
    console.log("header-parser running on port 8080");
});