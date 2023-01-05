const express = require('express');
const router = express.Router();

const adminController = require('../../components/admin/home-page-controller/mainPageController');
const authController = require('../../components/admin/auth/authController');
const passport = require('../../components/auth/passport');
const tables = require('../../components/admin/tables/controller');
const middleware = require('../../components/middleware/middleware');


router.get('/', middleware.verify_admin, adminController.get_HomePage);
router.get('/sign-up', authController.showRegistrationForm);

router.post('/sign-up', authController.register);

router.get('/sign-in', authController.showLoginForm);
router.post('/sign-in', passport.authenticate('admin-local', {
  successRedirect: '/admin',
  failureRedirect: '/admin/sign-in',
}));
router.get('/logout', authController.logout);
router.get('/billing', middleware.verify_admin,adminController.List);
router.get('/billing/:IdOrder',middleware.verify_admin, adminController.details);
router.post('/billing/:IdOrder',adminController.updateStatus);

router.get('/tables/acc_details_admin/:id',middleware.verify_admin, tables.acc_details);
router.get('/tables/acc_details_customer/:id',middleware.verify_admin, tables.acc_details_customer);

router.get('/dashboard',middleware.verify_admin,adminController.Revenue);
router.get('billing/:IdOrder', middleware.verify_admin,adminController.details);



router.get('/tables',  middleware.verify_admin,tables.tables);



router.get('/tables/edit-product/:ProductID', tables.getEditProduct);
router.post('/tables/edit-product/:ProductID', tables.editProduct);

router.post('/tables',middleware.verify_admin, tables.manageProduct);

router.get('/profile',middleware.verify_admin, adminController.getProFile);
router.post('/profile',middleware.verify_admin, adminController.editProfile);
router.get('/:slug',middleware.verify_admin, adminController.get_Pages);



module.exports = router;