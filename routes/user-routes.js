const express = require('express')
const { getAllUser,signUp,getAllBlogs,addBlogs,updateBlogs,deleteBlog } = require('../controller.js/user-controllers')
const router = express.Router()

router.get('/get-all-users', getAllUser);
router.post('/sign-up',signUp)

router.get('/get-all-blogs', getAllBlogs);
router.post('/add-blogs', addBlogs);
router.patch('/update-blog/:id', updateBlogs);
router.delete('/delete-blog/:id', deleteBlog);



module.exports = router