const express=require('express');
const router=express.Router()

router.post('/register',(req,res)=>{
    res.send('Register Success Fully')
})
router.post('/login',(req,res)=>{
    res.send('Register Success Fully')
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