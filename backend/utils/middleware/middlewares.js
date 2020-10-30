const config = require('config')
const jwt  =  require('jsonwebtoken')

function isAdmin(req,res,next){
    if(req.user.isAdmin === false)
     return res.status(403).send("Access Denied for this user.This is for authorized admins only.");
    else
    next();
}


function authenticated(req,res,next){
    const token = req.header('x-auth-token')
    if(!token) {
        let errObject = {error:{code:-140,message:"This service is for authorised users only.plz got to login to access it"}}
        return res.status(200).send(errObject)
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
        req.user = decoded
        next()
    } catch (err) {
        let errObject = {error:{code:-130,message:"Your session data was destroyed. go to login again"}}
       return  res.status(200).send(errObject)
    }
}

module.exports = {isAdmin,authenticated}