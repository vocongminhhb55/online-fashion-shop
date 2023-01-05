
exports.verify_customer = (req, res, next) => {
    if (!req.user || req.user.email.includes("admin.")) {
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/auth/login');
        });
        return;
    }
    next();
};
exports.verify_admin = (req, res, next) => {
    if (!req.user || !req.user.email.includes("admin.")) {
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/admin/sign-in');
        });
        return;
    }
    next();
};