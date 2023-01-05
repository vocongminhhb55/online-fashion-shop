const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const authService = require('./authService');
const registerSchema = require('./schemas/register');

const ajv = new Ajv();
addFormats(ajv);

exports.showRegistrationForm = (req, res) => {
  res.render('admin/sign-up',{ layout:'layout_admin.hbs'});
};

exports.register = async (req, res) => {
  // syntax validation
  if (!ajv.validate(registerSchema, req.body)) {
    res.render('admin/sign-up', { error: 'Invalid input!', layout:'layout_admin.hbs' });
    return;
  }
  const { 'full-name': fullName, email, password } = req.body;
  try {
    await authService.register(fullName, email, password);
  } catch (e) {
    res.render('admin/sign-up', { error: e.message, layout:'layout_admin.hbs' });
    return;
  }
  res.redirect('/admin/sign-in');
};

exports.showLoginForm = (req, res) => {
  res.render('admin/sign-in',{ layout:'layout_admin.hbs'});
};

exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/admin');
  });
};
