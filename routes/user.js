const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const passport = require('passport');

router.post('/login',passport.authenticate('local',{failureRedirect: '/user/failureJson',successRedirect:'/user/successJson'}));
router.post('/register',usersController.register);
router.get('/getUser',usersController.getUser);
router.get('/destroy-session',usersController.destroySession);

router.get('/failureJson',(req,res) => {
    res.send('Invalid Username or Password!');
});
router.get('/successJson',(req,res) => {
    console.log(req);
    res.send({user: req.user});
});

module.exports = router;