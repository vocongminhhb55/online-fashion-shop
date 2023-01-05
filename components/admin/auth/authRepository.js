const db = require('../../../db');
exports.emailExists = async (username) => {
  const result = await db.connection.execute('select username from admin_user where username = ? limit 1', [username]);
  return result[0].length > 0;
};

/**
 * Return the user info with specify username, otherwise null
 * @param username
 * @returns {Promise<object|null>}
 */

exports.getUserByEmail = async (username) => {
  const result = await db.connection.execute('select * from admin_user where username = ? limit 1', [username]);
  return result[0] && result[0][0];
};


exports.insertUser = async (fullName, username, password) => {
  await db.connection.execute('INSERT INTO  admin_user (username,password,name) VALUES (?,?,?)', [username, password, fullName]);
};