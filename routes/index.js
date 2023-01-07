const express = require('express');
const router = express.Router();
const middleware = require('../components/middleware/middleware');
const productController = require('../components/products/mainPageController');
const cartApiController = require('../components/cart/api/cartApiController');

router.get('/', middleware.verify_logout_from_admin ,productController.list);
router.get('/shopping-cart', middleware.verify_customer,cartApiController.cartDetail);
router.post('/shopping-cart', middleware.verify_customer,cartApiController.manage_button);
router.get('/:ProductID', middleware.verify_logout_from_admin ,productController.details);
router.post('/', middleware.verify_customer,cartApiController.add);
router.post('/:ProductID', middleware.verify_customer,cartApiController.add);
module.exports = router;