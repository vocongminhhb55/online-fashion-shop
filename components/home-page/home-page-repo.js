const db = require('../../db');

exports.change_name = async (name, id) => {
    await db.connection.execute("UPDATE customer_products.users SET name = ? WHERE (id = ?);", [name, id]);
}
exports.change_age = async (name, id) => {
    await db.connection.execute("UPDATE customer_products.users SET age = ? WHERE (id = ?);", [name, id]);
}
exports.change_gender = async (name, id) => {
    await db.connection.execute("UPDATE customer_products.users SET gender = ? WHERE (id = ?);", [name, id]);
}
exports.get = async (id) => {
    const result = await db.connection.execute("SELECT * FROM users where id = ?", [id]);
    return result[0][0];
}