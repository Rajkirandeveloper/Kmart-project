const jwt=require('jsonwebtoken');
const SECRET="SUPERSECRETPROJECT"
module.exports=function middleware(req,res,next){

try{
    let token=req.header('x-access-token');
    if(!token){
        return res.status(400).send("Token Not Found")
    }
    const decode=jwt.verify(token,SECRET) 
    req.user=decode.user
    next()

}
catch(err){
    console.log(err)
    return res.status(404).send("Please send Valid Token")

}

}