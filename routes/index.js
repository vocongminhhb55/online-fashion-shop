const express = require('express');
const router = express.Router();

const productController = require('../components/products/mainPageController');
const cartApiController = require('../components/cart/api/cartApiController');

router.get('/', productController.list);
router.get('/shopping-cart', cartApiController.cartDetail);
router.get('/:ProductID', productController.details);
router.post('/', cartApiController.add);
module.exports = router;