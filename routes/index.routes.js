const express=require('express')
const authMiddleware=require('../middlewares/auth')
const router=express.Router();

router.get('/home',authMiddleware,(req,res)=>{
    res.render('home');
})

// router.post('/upload',upload.single('file'),async (req,res)=>{
//     const newFile=await fileModel.create({
//         path:req.file.path,
//         originalname:req.file.originalname,
//         user:req.user._id
//     })
// })

module.exports=router