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
exports.insertOrderDetail = async (firstName, lastName,  Country, Address,  Apartment, townCity,state, postCode, Phone, Email, price) => {
    await db.connection.execute('insert into order_details (firstName, lastName, country,address, apartment,city, state, zip,phone,email,total) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?)', [firstName, lastName, Country, Address,Apartment, townCity, state, postCode, Phone, Email, price]);
}
