const express = require("express")
const router = express.Router()
const Book = require("../models/Book.model")
// get all  the books
router.get("/",async (req,res)=>{
    let books = await Book.find()
    console.log(books)
    res.json(books)
})


// get a single book with id 
router.get("/:id",async (req,res)=>{
    console.log(123)
    try{
        let book = await Book.findById(req.params.id)
        console.log(book)
        if(book){
            return res.json(book)
        }else{
            console.error("Book not found")
        }
    }catch(e){
        console.error(e.message)
    }
  

})


// delete a book
router.delete("/:id",async (req,res)=>{
    try{
   await Book.findByIdAndDelete(req.params.id)
   res.json("Book deleted")
    }catch(e){
        console.error(e.message)
    }
})

// create a new book
router.post("/add",async (req,res)=>{
    try {
   let title = req.body.title
   let author = req.body.author
   let ISBN = req.body.ISBN
   let genre = req.body.genre
   let description = req.body.description
        let book = new Book({
            title,
            author,
            ISBN,
            genre,
            description
        })
         await book.save() 
         console.log(book)
         res.json(book)
    }catch(e){
        console.error(e.message)
    }
})

router.put("/edit/:id",async (req,res) => {
    try {
        
        let title = req.body.title
        let author = req.body.author
        let ISBN = req.body.ISBN
        let genre = req.body.genre
        let description = req.body.description
       let result = await Book.findByIdAndUpdate(req.params.id,{
        title,
        author,
        ISBN,
        genre,
        description 
    })
    return res.json(result)
    }catch(e){
        console.log(e)
    }
})



module.exports = router