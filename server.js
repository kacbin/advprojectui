var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

// });
// app.get("/students/test", function(req, res) {
//     res.send("from students test");
// });

app.get("/", function(req, res) {
    res.redirect("/src/index.html");
});

//Launching server
app.listen(8888, function(req, res) { //runing server in the port 8080
    console.log("Opening port 8888");
    console.log('application launched at localhost:8888');
});