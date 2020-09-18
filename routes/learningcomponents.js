const express= require('express');
const routes=express.Router();
routes.get('/helloworldjava',(req,res) =>{
    res.render('HelloWorldJava')
});
module.exports=routes;