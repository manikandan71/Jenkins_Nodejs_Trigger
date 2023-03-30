const express = require('express')

const app = express();app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
  res.send('testing the hello world code in the jenkins ubuntu server')
})

app.listen(5000,()=>{
    console.log(`server running on port: http://localhost:4000`)
})