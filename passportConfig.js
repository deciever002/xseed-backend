const User = require('./models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy({ usernameField: 'email' },async (email,password,done) => {
    try {
        const user = await User.findOne({email});
        if(!user){
            return done(null,false);
        }
        const result = await bcrypt.compare(password,user.password);
        if(result){
            return done(null,user);
        }else{
            return done(null,false);
        }

    } catch (error) {
        console.log(error);
        return done(error);
    }
}));

passport.serializeUser((user,done) => {
    console.log("Serialized user",user);
    done(null,user.id);
})

passport.deserializeUser(async (id,done) => {
    try{
        //find the user from session by passing id
        let user = await User.findById(id);
        console.log("Deserialized user",user,id);
        done(null,user);
    }catch(err){
        //if something went wrong while deserializing pass err object in callback with second argument as false
        console.log("error occured while deserializing",err);
        done(err,false);
    }
});

module.exports = passport;
