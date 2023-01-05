const cartService = require('../cartService');

exports.add = (req, res) => {
  const { productId } = req.body;
  // validate valid productId
  // ...
  const { quantity } = req.body;
  let quant = 1;
  if (quantity) {
    quant = quantity;
  }
  if (!req.session.cart)
    req.session.cart = cartService.initCart();
  cartService.add(productId, req.session.cart, quant);

  res.redirect('/home-page/shop');
};

exports.cartDetail = async (req, res) => {
  if (!req.session.cart || req.session.cart.length === 0) {
    res.render('customer/shopping-cart', { error: 'Your cart is empty' });
    return;
  }
  let list_products = await cartService.cartDetails(req.session.cart);

  let Price = 0;
  let Vat = 0;
  if (list_products.products) {
    for (let i = 0; i < list_products.products.length; i++) {
      Price += list_products.products[i].price;
      Vat += list_products.products[i].Vat;
    }
  }
  const Total = Price + Vat;
  console.log(list_products);
  res.render('customer/shopping-cart', { list_products, Price, Vat, Total });
}

exports.manage_button = async (req, res) => {
  const { close } = req.body;
  if (close) {

    for (let i = 0; i < req.session.cart.products.length; i++) {

      if (req.session.cart.products[i].id === close) {

        req.session.cart.products.splice(i, 1);
        break;
      }
    }
  }
  res.redirect('/home-page/shop/shopping-cart');
}