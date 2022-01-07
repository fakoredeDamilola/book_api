const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    ISBN:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
        default:Date.now
    },
    description:{
        type:String,
    },

})

const Book = mongoose.model("Book",BookSchema)

module.exports = Book