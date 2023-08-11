const express=require('express');
const router=express.Router()
const Model=require('../models/user');
const jwt=require('jsonwebtoken');
const SECRET="SUPERSECRETPROJECT"
const middleware=require('../utils/middleware')
router.post('/register',async(req,res)=>{
    const {email,name,password,confirmpassword}=req.body
   
    try{
        console.log(name,email)
        const user=await Model.create({email,name,password,confirmpassword})
        // const user=await Model.create({email,name})
        ///await user.save()
     if(!user){
        return res.status(400).send("User Not Registered")
     }
     if(password !== confirmpassword){
        return res.status(400).send("Password Not matched0")
     }
        res.status(200).send("Registered success")

    }catch(err){
        console.log(err)
        return res.status(500).send("Database Error")
    }
})

router.get('/myprofile',middleware,async(req,res)=>{
    try{
        const exist= await Model.findById(req.user.id);
        if(!exist){
            return res.status(400).send("You are Not Authenticated")

        }
        res.status(200).json({success:true,data:exist})

    }catch(err){
        console.log(err)
        return res.status(500).send("Database Error");

    }

})
router.post('/login',async(req,res)=>{
    const{email,password}=req.body
    try{
        const exist=await Model.findOne({email})
        if(!exist){
            return res.status(400).send("User Not Found")
        }
        if(password !== exist.password){
            return res.status(400).send("Passwords Not Matched")
        }
        const payload={
            user:{
                id: exist._id
            }
        }
        jwt.sign(payload,SECRET,{expiresIn:"1hr"},(err,token)=>{
            if(err){
                throw err
            }
            return res.status(200).send(token)
        })

    }catch(err){
        console.log(err)
        return res.status(500).send("Database Error")

    }
})

router.get('/products',(req,res)=>{
    res.send('All Products')
})

router.get('/product/:id',(req,res)=>{
    res.send(' Products Details')
})

router.get('/order/:id',(req,res)=>{
    res.send(' Order')
})
router.get('/cart',(req,res)=>{
    res.send(' Cart')
})

module.exports=router;