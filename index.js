const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const data = {username, password};
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
    }
    console.log(options);
    
    res.sendFile(__dirname + "/dashboard.html");
})
app.post("/dashboard", function(req, res){
    res.send("hello");
})
app.get("/form", function(req, res){
    res.sendFile(__dirname + "/form.html");
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})