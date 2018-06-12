var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/postJsonConfig', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        str: req.body.config
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

// fetch("/echo/json/",
// {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify({a: 1, b: 2})
// })
// .then(function(res){ console.log(res) })
// .catch(function(res){ console.log(res) })