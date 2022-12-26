const express = require('express');
const router = express.Router();

const productController = require('../components/home-page/home-page-controller');

router.get('/:slug', productController.link_to);
router.get('/', productController.getHomePage);
// router.get('/profile/:id', productController.getProFile);
// router.post('/profile/:id', productController.editProfile);


module.exports = router;