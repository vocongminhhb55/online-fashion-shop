const cartService = require('../cartService');

exports.add = (req, res) => {
  const { productId } = req.body;
  // validate valid productId
  // ...


  if (!req.session.cart)
    req.session.cart = cartService.initCart();
  cartService.add(productId, req.session.cart);

  res.redirect('/home-page/shop');
};

exports.cartDetail = async (req, res) => {
  let list_products = await cartService.cartDetails(req.session.cart);
  console.log(list_products);
  res.render('customer/shopping-cart', {list_products});
}