/**
 * Created by bxy0517 on 2/13/2015.
 */

var express = require('express');
var app = express();
var request = require('request');

app.get('/',function(req,res){
  request({
    //uri: "https://status.github.com/api/status.json",
    //uri: "https://status.github.com/api/messages.json", --> unavailable
    uri: "https://status.github.com/api/last-message.json",
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
  }, function(error, response, body) {
    res.header("Access-Control-Allow-Origin", "*");
    res.type('text/plain');
    res.send(body);
  });
});

app.listen(4848);
