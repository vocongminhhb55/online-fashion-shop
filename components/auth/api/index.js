const express = require('express');
const router = express.Router();

const authApiController = require('./authApiController');

router.get('/verify-email/:email', authApiController.verifyEmail);
router.get('/verify-email-admin/:email', authApiController.verifyEmail_admin);

module.exports = router;