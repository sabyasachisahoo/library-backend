const Book = require('../models/book');

exports.getAllBooks = (req,res) =>{
    Book.find()
        .then((books) =>{
            console.log(books)
            res.send(books)
        }).catch((error)=>{
            console.log(error)
        })
    
}

exports.getBookById = (req,res) =>{
          Book.findById(req.params.id)
          .then(books => { 
              res.send(books)
          }).catch(error => console.log(error))    
}

exports.getBookByTitle = (req,res) =>{
      if(req.query.title){
          console.log(req.query.title)
            Book.find({'title':{ $regex :req.query.title, $options:'i'}})
            .then(books => { 
                res.send(books)
            }).catch(error => console.log(error))
        }     
}

exports.addBook = (req,res) => {
    let newBook = new Book({
        name:req.body.name,
        author:req.body.author,
        description:req.body.description,
        price:req.body.price,
        count:req.body.count,
        url:req.body.url
    })

    newBook.save()
        .then((data) => {
            res.send(data)
        }).catch((error)=>{
            console.log(error);
        })
}

exports.updateBook = (req,res) =>{
    Book.findByIdAndUpdate(req.params.id,req.body, {new: true})
    .then(()=>{
        res.send("Book updated successfully")
    }).catch((error)=>{
        console,log(error)
    })
}

exports.deleteBook =(req,res) =>{
    Book.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send("Book deleted") 
        }).catch((error)=>{
            console.log(error);
        })
}
