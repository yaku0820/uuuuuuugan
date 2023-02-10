const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../login.html'));
})

// router.post('/login', passport.authenticate('local',console.log("ajilah portses"), { failureRedirect: '/login' } ),
// function(req, res) {
    
//   res.redirect('/');
// }
// );

router.post('/',(req,res)=>{
    
    let students = JSON.parse(fs.readFileSync(path.join(__dirname,"../students.json"),'utf-8'));
   let student =  students.find((elements)=>{
    console.log(elements)
        return (elements.username==req.body.un && bcrypt.compareSync(req.body.pw,elements.password))
    });
    if(student){
        req.session.canLog=true,
        res.redirect('/');
    }else{
        res.send('уучлаарай алдаа гарлаа');
    }


 
});
module.exports=router