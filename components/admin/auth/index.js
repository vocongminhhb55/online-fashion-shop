const express = require('express');
const router = express.Router();

const authController = require('./authController');
const passport = require('./passport');

router.get('/sign-up', authController.showRegistrationForm);
router.post('/sign-up', authController.register);

router.get('/sign-in', authController.showLoginForm);
router.post('/sign-in', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/sign-in',
}));
router.get('/logout', authController.logout);

module.exports = router;
