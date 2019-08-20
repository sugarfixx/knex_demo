var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var knex = require("./db/knex");

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/quotes', function (req, res) {
    knex.select().from('quotes').then(function (quotes) {
        res.send(quotes);
    });

});

app.listen(port, function() {
    console.log("listening on port: ", port);
});

