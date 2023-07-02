const User = require("../models/User");
const bcrypt = require('bcryptjs');

module.exports.getUser = (req,res) => {
    return res.send({user: req.user});
}

module.exports.destroySession = (req,res) => {
    //using passport logout function
    req.logout(function(err) {
        if (err) { 
            console.log(err);
            res.send('Something Went Wrong');
        }
        res.send('Logged Out');
    });
}

module.exports.register = async (req,res) => {
    const {name,email,password,confirmPassword} = req.body;
    if(password!=confirmPassword){
        return res.send("Password doesn't match");
    }
    try {
        const user = await User.findOne({email: req.body.email});
        if(user){
            return res.send('User Already Exists');
        }else{
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new User({
                name,email,password: hashedPassword
            });
            await newUser.save();
            return res.send('User Registered');
        }
    } catch (error) {
        console.log(error);
        return res.send('Something went wrong');
    }
}