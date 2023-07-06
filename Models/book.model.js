const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title : String,
    author :String,
    genre :{type:String,
    enum:["Fiction", "Science", "Comic"]} ,
    Description: String,
    price:Number
  
});


const BookModel = mongoose.model("Book",BookSchema);
module.exports = { BookModel };
