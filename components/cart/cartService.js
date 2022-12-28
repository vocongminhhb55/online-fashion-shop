const productService = require('../products/Service');


exports.add = (productId, cart) => {
  const foundProduct = cart.products.find(product => product.id === productId);
  if (foundProduct)
    foundProduct.quantity = foundProduct.quantity + 1;
  else {
    cart.products.push({ id: productId, quantity: 1 });
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
    i++;
    return {
      ...product, name: productInfo.name, price: Price * count, img: productInfo.img_main_1
    };
  }));
  return cartDetails;
};

exports.initCart = () => ({
  products: [],
});