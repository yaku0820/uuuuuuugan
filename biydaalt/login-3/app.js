const { constants } = require("buffer");
const express = require("express");
// const passport = require('./passport-config');
const session = require('express-session');
const { send, argv } = require("process");
const indexRouter = require("./routers")
const LoginRouter = require('./routers/login')
const registerRouter = require('./routers/register')
// const {loginMid,logoutMid} = require('./middleware');
const {GetStudents, PostStudents,PutStudents,DeleteStudents} = require('./data');
const mySql = require('mysql2')
const app = express();
//enivormental varaible
//GET POST PUT DELETE //crud
app.use('/public',express.static('public'))

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// passport

// app.use(passport.initialize());
// app.use(passport.session())
 
// session
app.use(session(
    {
        cookie:{
          
            maxAge:1000,
            sameSite:true
            
        },
       
        secret:"bazraa",
        resave:false,
        saveUninitialized:false, 
        
    } 
))


function check(req,res,next){
    console.log(req.session)
    if(req.session.canLog==true){
        next()
    }else{
        res.redirect("/login")
    }
}

//routing
app.all(["/",'index'],check, indexRouter);   // loginMid check
app.use('/login',LoginRouter)    //logoutMid
app.use('/SingUp',registerRouter)
app.listen(3001, async ()=>{
 console.log("3001port aschihlaa yov yov",)
})
