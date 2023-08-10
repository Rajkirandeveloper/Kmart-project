const express=require('express');
const app=express();
const productRoutes=require('./routes/productroutes')
const PORT=5000;
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use('/',productRoutes);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})