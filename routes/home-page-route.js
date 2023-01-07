const express = require('express');
const router = express.Router();
const middleware = require('../components/middleware/middleware');
const productController = require('../components/home-page/home-page-controller');

router.get('/checkout', middleware.verify_customer, productController.getCheckOut);
router.post('/checkout', middleware.verify_customer,productController.confirmCheckOut);
router.get('/checkout/confirm', middleware.verify_customer,productController.getCheckOut_Next);
router.post('/checkout/confirm', middleware.verify_customer,productController.confirmOrder);
router.get('/:slug', middleware.verify_customer,productController.link_to);
router.get('/', middleware.verify_customer,productController.getHomePage);
// router.get('/profile/:id', productController.getProFile);
// router.post('/profile/:id', productController.editProfile);


module.exports = router;