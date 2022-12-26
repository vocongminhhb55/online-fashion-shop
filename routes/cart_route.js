const express = require('express');
const router = express.Router();

const productController = require('../components/cart/cart-controller');


router.get('/', productController.show_cart);


module.exports = router;