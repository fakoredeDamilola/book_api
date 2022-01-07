const express = require("express")
const Router = express.Router()
const Book = require("../models/Book.model")

// get all gooks in a genre
Router.get("/:genre",async (req,res) => {
    const genre = await Book.find({genre: req.params.genre})
    console.log({genre})
    res.json(genre)
})

// update the genre in all books\
Router.put("/:genre",async (req,res) =>{
    const genre = {genre : req.body.genre}
    const genreUpdated = await Book.updateMany({genre:req.params.genre},genre,{new:true})
    console.log(genreUpdated)
    res.json(genreUpdated)
})

// delete a partcular genre
Router.delete("/:genre",async (req,res) =>{
    const genreDeleted = await Book.deleteMany({genre:req.params.genre})
    console.log(genreDeleted)
    res.json(genreDeleted)
})


module.exports = Router