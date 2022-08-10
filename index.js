
const app = require("./app.js")

const PORT = app.get("PORT"); 
app.listen(PORT, ()=> {
    console.log(`Listen in port ${PORT}`)
})
