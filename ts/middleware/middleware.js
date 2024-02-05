const authorization=(req,res,next)=>{
    let isAuthorized=true;

    if (!isAuthorized) {
        return res.redirect('/')
    }

    next();
}

module.exports={
    authorization
}