const express = require("express");
const { BookModel } = require("../Models/book.model");
BookRouter = express.Router();



BookRouter.post("/add",async (req, res) => {
    const payload = req.body;
  
    try {
      const book = new BookModel(payload);
      await book.save();
      res.status(200).send({ msg: "Book is added Sucessfully" });
    } catch (err) {
      res.status(404).send({ msg: "Not able to add Book" });
    }
  });


  BookRouter.get("/get", async (req, res) => {
   
    // const token = req.headers.authorization;
    // const decoded = jwt.verify(token, "masai");
    try {
      const book = await BookModel.find();  //{userID:decoded.userID}
      res.status(200).send(book);
    } catch (err) {
      res.status(404).send({ msg: "Not able to get the books" });
    }
  });



  BookRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      await BookModel.findByIdAndDelete({ _id: id });
      res.status(200).send("Book has been deleted");
    } catch (err) {
      res.status(404).send({ msg: "Not able to delete" });
    }
  });


//   http://localhost:8080/book/filter?genre=Science

  BookRouter.get("/filter", async (req, res) => {
    
    const searchTerm = req.query.genre;
    

    try {
      const book = await BookModel.find( { genre: searchTerm  } );
      res.status(200).send(book);
    } catch (err) {
      res.status(404).send({ msg: "Not able to read" });
    }
  });




  BookRouter.get("/sort/desc", async (req, res) => {
    
    
    

    try {
      const book = await BookModel.aggregate(
        [
          { $sort : { price : -1 } }
        ]
     )
      res.status(200).send(book);
    } catch (err) {
      res.status(404).send({ msg: "Not able to read" });
    }
  });



  BookRouter.get("/sort/asc", async (req, res) => {
    
  
    

   
    try {
        const book = await BookModel.aggregate(
          [
            { $sort : { price : 1 } }
          ]
       )
        res.status(200).send(book);
      } catch (err) {
        res.status(404).send({ msg: "Not able to read" });
      }
  });

module.exports={BookRouter}