const express = require('express');
const router = express.Router();

const authController = require('./authController');
const passport = require('./passport');

router.get('/register', authController.showRegistrationForm);
router.post('/register', authController.register);

router.get('/login', authController.showLoginForm);
router.post('/login', function(req, res, next) {
  passport.authenticate('local', {session : false},
  function(err, user, info) {
      if (err) {
          return res.render("auth/login",{error:"Invalid input", layout:'layout_admin.hbs'});
      } else if (!user) {
        return res.render("auth/login",{error:"This account is not exist", layout:'layout_admin.hbs'});
      }
      req.logIn(user, function(err) {
          if (err) {
            return res.render("auth/login",{error:"Invalid input", layout:'layout_admin.hbs'});
          }
          res.redirect("/home-page")
      });
  })(req, res, next);
});
router.get('/logout', authController.logout);

module.exports = router;
