const express= require('express');
const bodyparser= require('body-parser');
const path=require('path');
const ejs= require('ejs');
const Form= require('./model/form');
const User=require('./model/user');
const mongoose= require('mongoose');
const port = process.env.PORT ||8000;
const app=express();
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use('/static',express.static('static')); 
app.use(express.urlencoded());
app.set('views', path.join(__dirname,'views'));

mongoose.connect('mongodb://localhost/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/academics',(req,res)=>{
    res.render('academics')
})
app.get('/resource',(req,res)=>{
    res.render('resource')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/feedback',(req,res)=>{
    res.render('feedback')
})

app.post('/contact',async (req,res)=>{
    //console.log(req.body)
    const {firstName,lastName,email,mobile}= req.body
    //console.log(mobile);
    let mob='' + mobile;
    /*if(mob.length<10 || mob[0]!='9'||mob[0]!='8'|| mob[0]!='7' || mob[0]!='6'){
        console.log('enter valid mobile number');
        res.redirect('contact',{status:401,msg:'invalid mobile'})
    }*/

    try{
        const response= await Form.create({
          firstName,
          lastName,
          email,
          mobile
        }) 
        res.status(200).redirect('feedback')
    }
    catch{
        res.status(401).send(error)
    }

     
   
})
app.get('/staff',(req,res)=>{
    res.render('staff.ejs')
})

app.get('/apply',(req,res)=>{
    res.render('apply.ejs');

})
app.post('/apply',async (req,res)=>{
    console.log(req.body);
    const {firstName,   
         middleName,
        lastName,      
        fatherName,      
        motherName,     
        mobile,       
        email,
        aadhar,
        DOB,
        address,
        Qualification,
        gender,
        disablity}=req.body;
    try{
        const respomse= await User.create({
            firstName,   
            middleName,
            lastName,      
            fatherName,      
            motherName,     
            mobile,       
            email,
            aadhar,
            DOB,
            address,
            Qualification,
            gender,
            disablity
        })
        res.status(200).redirect('feedback');
    }
    catch{
        console.log(error);
    }
    
})


app.listen(port,()=>{
    console.log("connected to  localhost  server..")
})
