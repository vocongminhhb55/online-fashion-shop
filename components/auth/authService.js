const bcrypt = require('bcryptjs');

const authRepository = require('./authRepository');

exports.register = async (fullName, email, password, tac) => {
  if (tac != 'true')
    throw new Error("You haven't agree to Terms and Conditions");
  if (await authRepository.emailExists(email))
    throw new Error('Email exists!');
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return authRepository.insertUser(fullName, email, hash);
}

/**
 * Check user credential and return the user info, otherwise null
 * @param email
 * @param password
 * @returns {Promise<Object|null>}
 */
exports.checkUserCredential = async (email, password) => {
  const user = await authRepository.getUserByEmail(email);
  if (!user) return null;
  if (await bcrypt.compare(password, user.password))
    return user;
  return null;
}
exports.checkUserCredential_admin = async (email, password) => {
  const user = await authRepository.getUserByEmail_admin(email);
  if (!user) return null;
  if (await bcrypt.compare(password, user.password))
    return user;
  return null;
}