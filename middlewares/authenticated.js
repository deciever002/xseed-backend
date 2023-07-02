//Only authorized users can access specific pages in the app
module.exports.checkAuthentication = function checkAuthentication(req,res,next){
    //check if authorized
    if(req.isAuthenticated()){
        next();
    }else{
        return res.status(401).send("User not Authorized")
    }
}