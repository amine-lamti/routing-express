const express = require('express')

const app = express()

let time_out = new Date().getHours();

app.get('/', function(req, res) {
  if ( (time_out>8)&&(time_out<17) ) 
  res.sendFile(__dirname + '/home.html');
  else 
  res.sendFile(__dirname + '/error.html');
})


app.get('/home', (req, res) => {
    if ( (time_out>8)&&(time_out<17) ) 
    res.sendFile(__dirname + '/home.html');
    else 
    res.sendFile(__dirname + '/error.html');
})

app.get('/contact', (req, res) => {
    if ( (time_out>8)&&(time_out<17) ) 
    res.sendFile(__dirname + '/contact.html');
    else 
    res.sendFile(__dirname + '/error.html');
})

app.get('/ourservice', (req, res) => {
    if ( (time_out>8)&&(time_out<17) ) 
    res.sendFile(__dirname + '/ourservice.html');
    else 
    res.sendFile(__dirname + '/error.html');
})


app.listen(5000, (err) => {
    if(err) console.log("server is not running")
    else console.log("server is runnig on port 3000")
})