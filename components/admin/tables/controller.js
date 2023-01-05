const service = require('./service');
const products_service = require('../../products/Service');
const { emailExists } = require('../auth/authRepository');
const qs = require('qs');

exports.tables = async (req, res) => {
    let admins = await service.getAll_admin();
    let customers = await service.getAll_customer();
    let products = await products_service.getAll();

    const { name_admin } = req.query;
    const { email_admin } = req.query;
    const { sort_admin } = req.query;
    const { name_customer } = req.query;
    const { email_customer } = req.query;
    const { sort_customer } = req.query;

    const { sort_product } = req.query;
    // filter
    const { category } = req.query;
    const { branding } = req.query;

    if (name_admin) {
        admins = await service.getName(name_admin, 'user_admin');
    }
    if (email_admin) {
        admins = await service.getEmail(email_admin, 'user_admin');
    }
    if (name_customer) {
        customers = await service.getName(name_customer, 'users');
    }
    if (email_customer) {
        customers = await service.getEmail(email_customer, 'users');
    }
    if (sort_admin == "asc_name") {
        admins = service.sort_asc(admins, 'name');
    }
    else if (sort_admin == "dsc_name") {
        admins = service.sort_dsc(admins, 'name');
    }
    else if (sort_admin == "asc_email") {
        admins = service.sort_asc(admins, 'email');
    }
    else if (sort_admin == "dsc_email") {
        admins = service.sort_dsc(admins, 'email');
    }
    if (sort_customer == "asc_name") {
        customers = service.sort_asc(customers, 'name');
    }
    else if (sort_customer == "dsc_name") {
        customers = service.sort_dsc(customers, 'name');
    }
    else if (sort_customer == "asc_email") {
        customers = service.sort_asc(customers, 'email');
    }
    else if (sort_customer == "dsc_email") {
        customers = service.sort_dsc(customers, 'email');
    }

    if (category) {
        products = await service.filter_category(category);
    }
    else if (branding) {
        products = await service.filter_branding(branding);
    }
    if (sort_product == "asc_price") {
        products = service.sort_asc(products, 'Price');
    }
    else if (sort_product == "dsc_price") {
        products = service.sort_dsc(products, 'Price');
    }
    else if (sort_product == "asc_purchase") {
        products = service.sort_asc(products, 'Total_purchase');
    }
    else if (sort_product == "dsc_purchase") {
        products = service.sort_dsc(products, 'Total_purchase');
    }
    res.render('admin/tables', { admins, customers, products, layout: 'layout_admin.hbs' })
}

exports.acc_details = async (req, res, next) => {
    const { id } = req.params;
    const acc = await service.getID(id, 'user_admin');
    const role = 'Admin'
    res.render('admin/acc_details', { acc, role, layout: 'layout_admin.hbs' });
}
exports.acc_details_customer = async (req, res, next) => {
    const { id } = req.params;
    const acc = await service.getID(id, 'users');
    const role = 'Customer'
    res.render('admin/acc_details', { acc, role, layout: 'layout_admin.hbs' });
}
exports.manageProduct = async (req, res) => {
    const { name_add } = req.body;
    const { price } = req.body;
    const { shortDes } = req.body;
    const { longDes } = req.body;
    const { category_add } = req.body;
    const { branding_add } = req.body;
    const { status_add } = req.body;
    const { add_product } = req.body;

    if (add_product) {

        if (name_add && price && shortDes && longDes && category_add && branding_add && status_add) {
            await service.addProduct(name_add, price, shortDes, longDes, category_add, branding_add, status_add);
        }
        else {
            let admins = await service.getAll_admin();
            let customers = await service.getAll_customer();
            let products = await products_service.getAll();
            res.render('admin/tables', { admins, customers, products, error: 'Please enter full attribute', layout: 'layout_admin.hbs' });
            return;
        }
    }

    res.redirect('/admin/tables');

};


exports.editProduct = async (req, res) => {
    const { ProductID } = req.params;


    const { edit_name } = req.body;
    const { edit_category } = req.body;
    const { edit_branding } = req.body;
    const { edit_status } = req.body;
    const { edit_product } = req.body;

    console.log(ProductID);
    console.log(edit_name);
    console.log(edit_category);
    if (edit_product === "edit") {
        if (!edit_name) {
            res.render('admin/edit-product', { error: 'Your input is empty', layout: 'layout_admin.hbs' });
            return;
        }
        if (edit_name) {
            await service.edit_product_name(edit_name, ProductID);
        }
        if (edit_category) {
            await service.edit_product_category(edit_category, ProductID);
        }
        if (edit_branding) {
            await service.edit_product_branding(edit_branding, ProductID);
        }
        if (edit_status) {
            await service.edit_product_status(edit_status, ProductID);
        }
    }
    if (edit_product === "back") {
        res.redirect('/admin/tables');
        return;
    }
    if (edit_product === "delete") {
        await service.delete_product(ProductID);
    }

    res.redirect('/admin/tables')
}

exports.getEditProduct = async (req, res) => {
    res.render('admin/edit-product', { layout: 'layout_admin.hbs' });
}
