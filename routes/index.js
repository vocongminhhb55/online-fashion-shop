const express = require('express');
const router = express.Router();

const productController = require('../components/products/mainPageController');
const cartApiController = require('../components/cart/api/cartApiController');

router.get('/', productController.list);
router.get('/shopping-cart', cartApiController.cartDetail);
router.post('/shopping-cart', cartApiController.manage_button);
router.get('/:ProductID', productController.details);
router.post('/', cartApiController.add);
router.post('/:ProductID', cartApiController.add);
module.exports = router;