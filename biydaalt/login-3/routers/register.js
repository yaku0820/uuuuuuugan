// const express = require('express');
// const router = express.Router();
// const path = require('path');
// const fs = require('fs');
// const { json } = require('express');
// const bcrypt = require('bcrypt')

// router.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../register.html'))
// })
// router.post('/',async(req,res)=>{
//  let students = JSON.parse(fs.readFileSync(path.join(__dirname,"../students.json"),'utf-8'));
//  if(students.find((elements)=>{
//     return(req.body.un==elements.username);
//  })){
//     res.send("hereglech bvrtgedsen bna ")
//  }else if(req.body.pw!==req.body.cpw){
//     res.send("pw shalganuu");
//  }else{
//    bcrypt.hash(req.body.pw,10,(err,hash)=>{
//       if(err){
//          res.send(err)
//       }else{
//              students.push({username:req.body.un,password:hash});
//              fs.writeFileSync(path.join(__dirname,"../students.json"),JSON.stringify(students,null,2))
//             res.redirect('/login');
//       }
//    })
    
//  }
// });
// module.exports=router





const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { json } = require('express');
const bcrypt = require('bcrypt');
const{getStudents,postStudents} = require('../data')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../register.html'))
})
router.post('/',async(req,res)=>{
   
   if(req.body.pw!==req.body.cpw){
            res.send('password buruu bna')
        }else{
            bcrypt.hash(req.body.pw, 10, (err,hashed)=>{
                if(err){
                    throw err
                }else{
                        postStudents(req.body.un,hashed)
                        res.redirect("/")
                }
            });
        }
});
module.exports=router