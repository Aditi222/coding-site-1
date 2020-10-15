const express=require('express');


const app=express();

const fr = require('./routes/index');
const seci =require('./routes/users');
const frit = require('./routes/learn');
const learning=require('./routes/learningcomponents')



const PORT =process.env.PORT || 5000;


app.set('view engine','ejs');
//Bodyparser

app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'));
app.use('/',fr);
app.use('/users',seci);
app.use('/learn',frit);
app.use('/learningg',learning);
app.listen(PORT,() =>
{
    console.log("Hii Aditi!");
})
