const express = require("express")
const app = express()
const book = require("./routes/book")
const genre = require("./routes/genre")
const connectDB = require("./config/config")
require('dotenv').config({ path: './config/.env' });
connectDB()
app.use(express.urlencoded({extended:true}))
app.use(express.json())



const PORT = process.env.PORT || "5000"


// book middleware
app.use("/book",book)
app.use("/genre",genre)






app.listen(PORT,()=>console.log(`Listening on ${PORT}`))