const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/productmodels')
// import router from './routes/user-routes'
const router = require('./routes/user-routes')
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/user',router)


app.get('/',(req, res)=>{
     res.send("Hello world node scriptingg to run  ")
})

// app.get('/get-all-products', async(req, res)=>{
//     try{
//      const product = await Product.find({})
//      res.status(200).json(product)
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.message})
//     }
// })
// app.get('/get-by-id/:id', async(req, res)=>{
//     try{
//      const {id} = req.params;
//      const product = await Product.findById(id)
//      res.status(200).json(product)
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.message})
//     }
// })

// app.post('/product',async(req, res)=>{
//     try
//     {
//       const product = await Product.create(req.body)
//       res.status(200).json(product)
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.message})
//     }
// })

// app.patch('/update-product/:id', async(req, res)=>{
//     try{
//      const {id} = req.params;
//      const product = await Product.findByIdAndUpdate(id, req.body)
//      if(!product)
//      {
//         return res.status(404).json({message:`cannot find product id ${id}`})
//      }
//      else
//      {
//         const updateproduct = await Product.findById(id)
//         res.status(200).json(updateproduct)
//      }
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.message})
//     }
// })

// app.delete('/delete-product/:id', async(req, res)=>{
//     try{
//      const {id} = req.params;
//      const product = await Product.findByIdAndDelete(id)
//      if(!product)
//      {
//         return res.status(404).json({message:`cannot find product id ${id}`})
//      }
//      else
//      {
//         res.status(200).json(product)
//      }
//     }
//     catch(error)
//     {
//         res.status(500).json({message: error.message})
//     }
// })


app.listen(3000, ()=>{
    console.log('NODE APP IS RUNNING ON PORT 3000')
})

// mongoose
// .connect('mongodb://localhost:27017/app')
// .then(()=>{
//     app.listen(3000, ()=>{
//         console.log('NODE APP IS RUNNING ON PORT 3000')
//     })
//     console.log('MongoDB is connected')
// })
// .catch((error)=>{
//     console.log(error);
// })