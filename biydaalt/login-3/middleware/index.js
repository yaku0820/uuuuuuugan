
function loginMid(req,res,next){
    if(req.isAuthenticate){
        next();
    }else(
        res.redirect('/login')
    )
}

function logoutMid(req,res,next){
    if(!req.isAuthenticate){
        next();
    }else(
        res.redirect('/')
    )
}

module.exports={
    loginMid,
    logoutMid
}