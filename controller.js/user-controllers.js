
const user = require('../models/user')
const blogs = require('../models/blog');
const { default: mongoose } = require('mongoose');

module.exports ={
    getAllUser : async(req,res,next)=>
    {
       try{
            let users = await user.find();
            if(!users)
            {
                return res.status(404).json({message:"no user found"})
            }
            else
            {
                return res.status(200).json({users})
            }
       }
       catch(error)
       {
        console.log(error)
       }
    },
    signUp: async(req,res,next)=>
    {
        // console.log('sss', req.body)
       try {
          const newuser = await user.create(req.body) 
          res.status(201).json(newuser)    
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    getAllBlogs: async(req,res)=>{
        try {
            let blog = await blogs.find();
            if(!blog)
            {
                return res.status(404).json({message:"no blog found"})
            }
            else
            {
                return res.status(200).json({blog})
            }
            
        } catch (error) {
            res.status(500).json({error})
        }
    },
    addBlogs: async(req,res)=>
    {
        console.log('check the reqq',req.body);
      let existinguser;
      try{
        existinguser = await user.findById(req.body.user)
        console.log('check the exit',existinguser)
      } 
      catch(err)
      {
        res.status(500).json({message:err.message})
      } 
      if(!existinguser)
      {
        res.status(500).json({message: "Unable to find user"})
      }
      else
      {
        try{
            const addBlog = await blogs.create(req.body)
            existinguser.blogs.push(addBlog)
            await existinguser.save()
            res.status(200).json({addBlog, message: "Blog added successfully"})
          }
          catch(error)
          {
            res.status(500).json({message:error.message})
          }
      }
      
    },
    updateBlogs: async(req,res)=>
    {
        let blogid = req.params.id;
        try{
            const updateBlog = await blogs.findByIdAndUpdate(blogid,req.body)
            res.status(200).json({updateBlog, message: " Blog Updated successfully"})
          }
          catch(error)
          {
            res.status(500).json({message:error.message})
          }
    },
    deleteBlog:async(req,res)=>
    {
        try {
            const deleteBlog = await blogs.findByIdAndDelete(req.params.id).populate('user')
            await deleteBlog.user.blogs.pull(deleteBlog)
            await deleteBlog.user.save()
            res.status(200).json({message:'blog deleted successfully'})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}