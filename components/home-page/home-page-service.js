const { connection } = require('../../db');
const home_page_Repository = require('./home-page-repo');

exports.change_name = (name, id) => {
    return home_page_Repository.change_name(name, id);
}
exports.change_age = (name, id) => {
    return home_page_Repository.change_age(name, id);
}
exports.change_gender = (name, id) => {
    return home_page_Repository.change_gender(name, id);
}
exports.getID = (id) => home_page_Repository.get(id);

exports.inputOrder = (firstName, lastName, Country, Address,Apartment, townCity, state, postCode, Phone, Email, price) => {
    return home_page_Repository.insertOrderDetail(firstName, lastName, Country, Address,Apartment, townCity, state, postCode, Phone, Email, price);
}