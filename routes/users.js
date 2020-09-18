const express=require('express');
const router =express.Router();



router.get('/login',(req,res) =>
{
    res.render('login');
    
});
router.get('/register',(req,res)=>{
    res.render('register')
});
router.get('/dashboard',(req,res) =>
{
    res.render('dashboard');
})

router.post('/register',(req,res)=>
{
    const{name,email,password,password2}=req.body;
    let errors=[];
    if(!name||!email||!password||!password2)
    {
        errors.push({msg:'Please fill in all details'})
    }
    if(password2!=password)
    {
        errors.push({msg:'Password do not match'})
    }
    if(password.length<6)
    {
        errors.push({msg:'Password should be atleast 6 characters'})
    }
    if(errors.length>0)
    {
      res.render('register',
      errors,
      name,
      email,
      password,
      password2
      

      )
      
    }
    else{
       res.send("Nope") ;
    }
})
router.get('/cour',(req,res)=>{
    res.render('courses');
});
router.get('/competitions',(req,res)=>{
    res.render('competition')
})
router.get('/playcode',(req,res)=>{
    res.render('play')
})
router.get('/coderun',(req,res)=>{
    res.render('corun')
})
router.get('/chatup',(req,res)=>{
   res.render('chat');
})
router.get('/feed',(req,res)=>{
    res.render('feedweb');
})
router.get('/about',(req,res)=>{
    res.render('aboutt');
})
router.get('/example',(req,res)=>{
    res.render('example');
})
router.get('/runh',(req,res)=>{
    res.render('fun');
})

module.exports=router;