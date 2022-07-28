var express = require("express")
var router = express.Router();

const credential = {
    email:"nav@gmail.com",
    password: "nav123"
}

router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard')
        // res.end("login sucessfull ..")
    }
    else {
        res.end("invalid username")
    
    }
});

//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }
    else{
        res.send("unauthorized user")
    }
})

//route for 
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }
        else{
            res.render('base',{title:"Express",logout:"logout Scuessfully"})
        }
    })
})

module.exports = router; 