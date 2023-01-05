const service = require('./Service');
const qs = require('qs');
const bcrypt = require('bcryptjs');
exports.get_HomePage = (req, res) => {

    res.render('admin/home-page', { layout: 'layout_admin.hbs' });
}
exports.get_Pages = (req, res) => {
    //res.render('products/list');
    res.render('admin/' + req.params.slug, { layout: 'layout_admin.hbs' });
}
exports.getProFile = async (req, res, next) => {
    const { id } = req.user;
    const user = await service.getID(id);
    if (!user) return next(createError(404));
    res.render('admin/profile', { user, layout: 'layout_admin.hbs' });
}

exports.editProfile = async (req, res, next) => {
    const { id } = req.user;
    const { name } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    const { old_pass } = req.body;
    const { new_pass } = req.body;
    const { edit } = req.body;
    if (id) {
        if (edit === "edit_profile") {
            if (name == req.user.name) {
                res.render('admin/profile', { error: 'Your input is the same with the old one', layout: 'layout_admin.hbs' });
                return;
            }
            if (!name && !age && !gender) {
                res.render('admin/profile', { error: 'Yout input is empty', layout: 'layout_admin.hbs' });
                return;
            }
            else {
                if (name)
                    await service.change_name(name, id);
                if (age)
                    await service.change_age(age, id);
                if (gender)
                    await service.change_gender(gender, id);
            }

        }
        if (edit === "change_pass") {
            if (!old_pass) {
                res.render('admin/profile', { error1: 'Enter old password', layout: 'layout_admin.hbs' });
                return;
            }
            else {
                const user = await service.getID(id);
                if (!await bcrypt.compare(old_pass, user.password)) {
                    res.render('admin/profile', { error1: 'Incorrect old password', layout: 'layout_admin.hbs' });
                    return;
                }
            }
            if (!new_pass) {
                res.render('admin/profile', { error2: 'Enter new password', layout: 'layout_admin.hbs' });
                return;
            }
            if (new_pass.length < 6) {
                res.render('admin/profile', { error2: 'Your password must contain at least 6 character', layout: 'layout_admin.hbs' });
                return;
            }
            await service.change_pass(old_pass, new_pass, id);

        }
    }
    res.redirect('/admin/profile');
}

exports.List = async (req, res) => {

    const { status } = req.query;
    const { time } = req.query;


    let order = [];


    // if (status === "DaGiao") {
    //     order = await service.getOrderListByStatus();
    // }
    // else if (status === "ChuaGiao") {
    //     order = await service.getOrderListByStatus1();

    // }
    // else if (time === "asc") {
    //     order = await service.getOrderListByTimeAsc();
    // }
    // else if (time === "desc") {
    //     order = await service.getOrderListByTimeDesc();
    // }
    // else {
    //     order = await service.getOrderList();
    // }
    order = await service.getOrderList();
    res.render('admin/billing', { order, layout: 'layout_admin.hbs' });
}


exports.Revenue = async (req, res) => {
    const { date: dateFilter } = req.query;
    const { date1: dateFilter1 } = req.query;
    let revenue = [];
    if (dateFilter) {
        revenue = await service.filter(dateFilter);
        console.log(revenue);
    }
    if (dateFilter1) {
        revenue = await service.filter1(dateFilter1);
    }

    else {
        revenue = await service.getOrderList();
        console.log(revenue);
    }

    res.render('admin/dashboard', { revenue, layout: 'layout_admin.hbs' });

}


exports.updateStatus = async (req, res, next) => {
    const { IdOrder } = req.params;

    const { statusUpdate } = req.body;


    await service.updateStatus(statusUpdate, IdOrder);

    res.redirect('/admin/billing')

}



exports.details = async (req, res, next) => {
    const { IdOrder } = req.params;
    const order = await service.getOrder(IdOrder);

    res.render('admin/notifications', { order, layout: 'layout_admin.hbs' });
};