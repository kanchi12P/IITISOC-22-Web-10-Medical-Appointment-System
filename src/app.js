const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true
}));


const port= process.env.PORT || 5000;

// public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));
app.set('view engine', 'hbs');


app.get("", function(req,res){
    res.render('index');
})

app.get("/form", function(req,res){
    res.render('form');
})


app.post("/view", function(req,res){
    res.send("<h1>Thanks! Your response has been recorded</h1>");
})


app.get("*", (req,res) =>{
    res.render('index');
})






app.listen(port,() => {
    console.log("Server is running on 5000 port");
})