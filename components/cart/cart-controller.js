const createError = require('http-errors');
const qs = require('qs');

exports.show_cart = (req, res) => {
    res.render('customer/shopping-cart');
}