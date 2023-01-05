const authService = require('../authRepository');

exports.verifyEmail = async (req, res) => {
  const { email } = req.params;
  let check = false;
  if (email.includes("admin."))
    check = true;
  const result = await authService.emailExists(email);
  res.json(!result && !check);
};

exports.verifyEmail_admin = async (req, res) => {
  const { email } = req.params;
  let a;
  if (!email.includes("admin."))
    a = "admin." + email;
  else a = email;
  const result = await authService.emailExists_admin(a);
  console.log(result);
  res.json(!result);
};