const express = require('express');
const passport = require('passport')
require('../config/auth');
// const db = require('../');
const router = express.Router();

const userController = require('../controllers/user_controller')

router.get('/', userController.login);
router.get('/google',
    passport.authenticate('google', {scope: ['email', 'profile'] } )
);
router.get('/google/callback', 
    passport.authenticate('google',{
        successRedirect: '/login/check',
        failureRedirect: '/login/failure',
    })
// userController.login_google_callback
);
router.get('/check', userController.login_check);
router.get('/failure', userController.login_failure);

module.exports = router; 