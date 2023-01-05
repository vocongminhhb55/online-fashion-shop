const db = require('../../../db');

exports.getAll_admin = async () => {
  const result = await db.connection.execute('select * from admin_user');
  return result[0];
}
exports.get = async (id, table) => {
  const result = await db.connection.execute("SELECT * FROM " + table + " where id = ?", [id]);
  return result[0][0];
}
exports.getName = async (name, table) => {
  const result = await db.connection.execute('select * from ' + table + ' where name like ?', [`%${name}%`]);
  return result[0];
}
exports.getEmail = async (name, table) => {
  const result = await db.connection.execute('select * from ' + table + ' where username like ?', [`%${name}%`]);
  return result[0];
}
exports.getAll_customer = async () => {
  const result = await db.connection.execute('select * from user');
  return result[0];
}

exports.filter_category = async (category) => {
  const result =  await db.connection.execute("SELECT * FROM product where Category = ?", [category]);
  return result[0];
}
exports.filter_branding = async (branding) => {
  const result =  await db.connection.execute("SELECT * FROM product where Branding = ?", [branding]);
  return result[0];
}

//edit product
exports.edit_product_name = async (name, id) => {
  const result = await db.connection.execute("UPDATE product SET Name = ? WHERE ProductID = ?", [name, id]);
}

exports.edit_product_category = async (category, id) => {
  const result = await db.connection.execute("UPDATE product SET Category = ? WHERE ProductID = ?", [category, id]);
}

exports.edit_product_branding = async (branding, id) => {
  const result = await db.connection.execute("UPDATE product SET Branding = ? WHERE ProductID = ?", [branding, id]);
}

exports.edit_product_status = async (status, id) => {
  const result = await db.connection.execute("UPDATE product SET status = ? WHERE ProductID = ?", [status, id]);

}
exports.addProduct = async (name, price, shortDes, longDes, category, branding) => {
  const result = await db.connection.execute("INSERT INTO product (Name, Price, ShortDescription, LongDescription, Category, Branding, Total_purchase) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, price, shortDes, longDes, category, branding, 0])
}
exports.deleteProduct = async (id) => {
  const result = await db.connection.execute("DELETE FROM product WHERE ProductID = ?", [id]);
}