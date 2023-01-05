const productService = require('../products/Service');


exports.add = (productId, cart, quant) => {
  const foundProduct = cart.products.find(product => product.id === productId);
  if (foundProduct)
    foundProduct.quantity = foundProduct.quantity + quant;
  else {
    cart.products.push({ id: productId, quantity: quant });
  }
};

exports.cartDetails = async (cart) => {
  const cartDetails = { ...cart };
  if (!cartDetails.products)
    return cartDetails;
  let i = 0;
  cartDetails.products = await Promise.all(cartDetails.products.map(async product => {
    const productInfo = await productService.get(product.id);

    let Price = parseFloat(productInfo.price);
    let count = parseFloat(cartDetails.products[i].quantity);
    const Vat = Price * 0.08;
    i++;
    return {
      ...product, name: productInfo.name, price: Price * count, img: productInfo.img_main_1, Vat: Vat
    };
  }));
  return cartDetails;
};

exports.initCart = () => ({
  products: [],
});