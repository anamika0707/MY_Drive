const express=require('express')
const authMiddleware=require('../middlewares/auth')
const router=express.Router();



// ...existing code...
const multer = require('multer');
const fileModel = require('../models/files.models');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/upload-file', authMiddleware, upload.single('file'), async (req, res) => {
    try {
        const newFile = await fileModel.create({
            path: req.file.path,
            originalname: req.file.originalname,
            user: req.user.userID
        });
        res.redirect('/home');
    } catch (err) {
        res.status(500).send('File upload failed');
    }
});

router.post('/bulk-upload', authMiddleware, upload.array('file'), async (req, res) => {
    try {
        const files = req.files;
        for (const file of files) {
            await fileModel.create({
                path: file.path,
                originalname: file.originalname,
                user: req.user.userID
            });
        }
        res.redirect('/home');
    } catch (err) {
        res.status(500).send('Bulk upload failed');
    }
});
// ...existing code...


// // ...existing code...
// router.get('/home', authMiddleware, async (req, res) => {
//     const files = await fileModel.find({ user: req.user.userID });
//     res.render('home', { files });
// });
// // ...existing code...



// ...existing code...
router.get('/home', authMiddleware, async (req, res) => {
    const files = await fileModel.find({ user: req.user.userID });
    res.render('home', { files, user: req.user });
});
// ...existing code...


// ...existing code...
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});
// ...existing code...


// router.get('/home',authMiddleware,(req,res)=>{
//     res.render('home');
// })

// router.post('/upload',upload.single('file'),async (req,res)=>{
//     const newFile=await fileModel.create({
//         path:req.file.path,
//         originalname:req.file.originalname,
//         user:req.user._id
//     })
// })


module.exports=router