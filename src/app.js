const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port =process.env.PORT || '100';

// public static path

const static = path.join(__dirname,"../public")
// console.log(__dirname);

const path_ = path.join(__dirname,"../temp/views");
const partial = path.join(__dirname,"../temp/partials");
hbs.registerPartials(partial);
app.set('view engine', 'hbs');
app.set('views',path_);

app.use(express.static(static));



// routing
app.get("",(req, res) =>{
    res.render('index')
})
app.get("/about",(req, res) =>{
    res.render("about")
})
app.get("/weather",(req, res) =>{
    res.render("weather");
})
app.get("*",(req, res) =>{
    res.send("404")
})
 

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})