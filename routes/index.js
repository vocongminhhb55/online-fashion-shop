const express = require('express');
const router = express.Router();

const productController = require('../components/products/mainPageController');


router.get('/', productController.list);
router.get('/:ProductID', productController.details);

module.exports = router;