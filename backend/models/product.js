const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    rating:{
        type:Number,
        default:[]
    }
})

const model=new mongoose.model('products',productSchema);

module.exports=model;

// price:{
//     type:Number,
//     required:true
// },
// quantity:{
//     type:String,
//     required:true
// },
// user:{
//     type:String
// },