const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const authService = require('./authService');
const registerSchema = require('./schemas/register');

const ajv = new Ajv();
addFormats(ajv);

exports.showRegistrationForm = (req, res) => {
  res.render('auth/register', { layout: 'layout_admin.hbs' });
};

exports.register = async (req, res) => {
  // syntax validation
  if (!ajv.validate(registerSchema, req.body)) {
    res.render('auth/register', { error: 'Invalid input!', layout: 'layout_admin.hbs' });
    return;
  }
  const { 'full-name': fullName, email, password, tac } = req.body;
  if(email && email.includes("admin.")){
    res.render('auth/register', { error: 'Try to avoid special character',layout:'layout_admin.hbs' });
    return;
  }
  try {
    await authService.register(fullName, email, password, tac);
  } catch (e) {
    res.render('auth/register', { error: e.message, layout: 'layout_admin.hbs' });
    return;
  }
  res.redirect('/auth/login');
};

exports.showLoginForm = (req, res) => {
  res.render('auth/login', { layout: 'layout_admin.hbs' });
};

exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/home-page');
  });
};
