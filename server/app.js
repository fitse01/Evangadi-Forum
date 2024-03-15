require('dotenv').config()
const express = require("express");
var app = express();
const port = 7000;

const cors = require('cors')
app.use(cors())


const dbConnection = require("./db/dbConfig")

// user routes midle file
const userRoutes = require("./routes/userRoute");

// question routes midle file
const questionRoutes = require("./routes/questionRoute");

// answer routes
const answerRoutes = require("./routes/answerRoute");


// authentication middleware
const authMiddleware = require("./middleware/authMiddleware")


// json middle ware to extract json data 
app.use(express.json())

// user midlewere route
app.use("/api/users" , userRoutes)



// question midlewere
app.use("/api/question" , authMiddleware, questionRoutes)

// answer midlewer
app.use("/api/answers" ,authMiddleware, answerRoutes)

async function start(){
  try{
    const result = await dbConnection.execute("select 'test'")
    // console.log(result)
    await app.listen(port)
    console.log("database connection is stablished ")
    console.log(`listening to : port ${port}`)

  }catch(error){
      console.log(error.message);
  }
}
start()

// server start
// app.listen(port, (err) => {
//   if (err) console.log(err.message);
//   else console.log(`listening to : port ${port}`);
// });















