
const express = require('express')
require ('dotenv').config()  // dot env 1st step
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/google', (req, res) => {
  res.send("https://google.com")
})
app.get("/login",(req,res)=>{
    res.send("<h1>login here </h1>")
})
app.listen(process.env.PORT, () => {  // dotenv second step
  console.log(`Example app listening on port ${port}`)
})