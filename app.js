const express = require("express"); 

const app = express(); 
const getMovie = require("./controllers/getMovie.js"); 
const morgan = require("morgan")

app.use(morgan("dev")); 
app.set("PORT", 3001); 
app.use(express.json()); 



app.get("/", (req,res)=> {
    res.status(200).send("Hello world!")
})
app.get("/movie", getMovie)

module.exports = app; 