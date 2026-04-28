const mongoose=require('mongoose');

const task=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    status:{
        type:String
    }
});

const Todo=mongoose.model('Todo',task);
module.exports=Todo;
