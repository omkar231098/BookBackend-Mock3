const express = require("express");
const connection = require("./Configs/db");
const { BookRouter } = require("./Routes/book.route");




require("dotenv").config()

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());




app.use("/Book",BookRouter)




app.listen(PORT, async ()=>{
      try{
       await connection;
       console.log("connected to db")
       
      } catch(err) {
        console.log(err.message)
       
      }
console.log("server is running",PORT)
})


