const mongoose=require('mongoose')

const fileSchema=new mongoose.Schema({
    path:{
        type:String,
        require:[true,'path is required']
    },
    originalname:{
        type:String,
        required:[true,'original name is required']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'user is required']
    }
})

const file=mongoose.model('file',fileSchema);
// module.exports=fileSchema;
module.exports = file;