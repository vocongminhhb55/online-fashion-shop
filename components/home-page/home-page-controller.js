const service = require('./home-page-service');
const createError = require('http-errors');
const cartService = require('../cart/cartService');
const qs = require('qs');
const { formatNames } = require('ajv-formats/dist/formats');
const { add } = require('../cart/cartService');
const { list } = require('../products/mainPageController');
exports.link_to = (req, res) => {
    res.render('customer/' + req.params.slug);
}
exports.getCheckOut = (req, res) => {
    res.render('customer/checkout');
}
exports.confirmCheckOut = async (req,res)=> {
    const {fName,lName,contry,address,apartment,city, state,zip,phone,email, confirm} = req.body;
    if(confirm){
        let list_products = await cartService.cartDetails(req.session.cart);
        if(!list_products.products &&!fName && !lName && !contry && !address && !apartment && !city && !state && !zip && !phone && !email){
            res.render('customer/checkout',{error: 'Please enter full of information'});
            return;
        }
        let Price = 0;
        for (let i = 0; i < list_products.products.length; i++) {
            Price += list_products.products[i].price;
        }
        if(!req.session.order) {
            req.session.order = {fName: fName, lName: lName, contry:contry, address: address, apartment: apartment, city: city, state:state, zip: zip, phone: phone, email:email, total: Price};
        }
        res.redirect('/home-page/checkout/confirm');
        return;
    }
    res.redirect('/home-page/checkout');
}
exports.getCheckOut_Next = (req,res) => {
    // state:state, zip: zip, phone: phone, email:email, total: Price
    const order = req.session.order;
    const name = order.lName + " " + order.fName;
    // const fName = order.fName;
    // const lName = order.lName;
    // const address = order.address;
    // const apartment = order.apartment;
    // const city = order.city;
    // const state = order.state;
    // const zip = order.zip;
    // const phone = order.phone;
    // const email = order.email;
    // const price = order.price;
    res.render('customer/checkout_next',{order,name});
}
exports.confirmOrder = async (req,res) => {
    const order = req.session.order;
    const fName = order.fName;
    const lName = order.lName;
    const country = order.contry;
    const address = order.address;
    const apartment = order.apartment;
    const city = order.city;
    const state = order.state;
    const zip = order.zip;
    const phone = order.phone;
    const email = order.email;
    const price = order.total;
    await service.inputOrder(fName,lName, country, address,apartment,city,state,zip,phone,email,price);
    res.render('customer/checkout_next',{order, notice:'Complete'});
}

exports.getHomePage = (req, res) => {
    res.render('customer/index');
}

// exports.getProFile = async (req, res, next) => {
//     const { id } = req.params;
//     const user = await service.getID(id);
//     if (!user) return next(createError(404));
//     res.render('customer/profile', { user });
// }
// exports.editProfile = async (req, res, next) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     const { age } = req.body;
//     const { gender } = req.body;
//     console.log(name);
//     if(name){
//         await service.change_name(name,id);
//     }
//     else if(age){
//         await service.change_age(age,id);
//     }
//     else if(gender){
//         await service.change_gender(gender,id);
//     }
  
//     const user = await service.getID(id);
//     if (!user) return next(createError(404));
//     res.render('customer/profile', { user });
// }