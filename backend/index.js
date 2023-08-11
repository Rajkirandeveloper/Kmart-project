const express=require('express');
const app=express();
const productRoutes=require('./routes/productroutes')
const PORT=5000;
const dbFunction=require('./db/connection');
//call db
dbFunction()
//body parser middleware
app.use(express.json())

//testing api
app.get('/',(req,res)=>{
    res.send("Hello World");
})

//routes api
app.use('/',productRoutes);

//server running port
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})