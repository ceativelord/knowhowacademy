var express= require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){

    res.render("home");
});

app.get("/salespage1", function(req, res){
    
    res.render("salespage1");

});
app.get("/salespage2", function(req, res){
    
    res.render("salespage2");

});







app.listen(process.env.PORT, process.env.IP});