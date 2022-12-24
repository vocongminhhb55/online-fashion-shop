const service = require('./home-page-service');
const createError = require('http-errors');
const qs = require('qs');
exports.link_to = (req, res) => {
    res.render('products/' + req.params.slug);
}
exports.getHomePage = (req, res) => {
    res.render('products/home-page');
}

exports.getProFile = async (req, res, next) => {
    const { id } = req.params;
    const user = await service.getID(id);
    if (!user) return next(createError(404));
    res.render('products/profile', { user });
}
exports.editProfile = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    console.log(name);
    if(name){
        await service.change_name(name,id);
    }
    else if(age){
        await service.change_age(age,id);
    }
    else if(gender){
        await service.change_gender(gender,id);
    }
  
    const user = await service.getID(id);
    if (!user) return next(createError(404));
    res.render('products/profile', { user });
}