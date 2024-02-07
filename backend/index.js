const express = require('express')
const mongoose=require("mongoose")

const rootRouter=require("./routes/index")

const cors=require('cors') //cross origin resource shareing
require('dotenv').config(); 

const app = express()
const port = 3000

const uri=process.env.URI

if(!uri){
  console.error('MongoDB URI is not defined in the environment variables.');
  process.exit(1)
}


  mongoose.connect(uri,{dbname:"wallet"})
  app.use(cors())

  app.use(express.json())

  app.use("/api/v1" , rootRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})