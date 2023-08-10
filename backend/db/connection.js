const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/Kmart"


module.exports=function connectDb(){
    mongoose.connect(mongoURI,).then(()=>{
        console.log("Database Connected.....")
    }).catch(()=>{
        console.log("DB Error")
    })

}

// {
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }