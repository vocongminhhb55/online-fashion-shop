const { imgSrc } = require('./Data');
const home_page_Repository = require('./Repo');
const bcrypt = require('bcryptjs');
exports.getAll = () => {
  return imgSrc;
};
exports.change_pass = async (old_pass, new_pass, id) => {

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(new_pass, salt);
      return home_page_Repository.change_pass(hash, id);
}
exports.getByPage = (page) => {
  return imgSrc.find((img_src) => img_src.page === page);
};
exports.change_name = (name, id) => {
  return home_page_Repository.change_name(name, id);
}
exports.change_age = (name, id) => {
  return home_page_Repository.change_age(name, id);
}
exports.change_gender = (name, id) => {
  return home_page_Repository.change_gender(name, id);
}
exports.getID = (id) => home_page_Repository.get(id);



exports.deleteProduct = (name, category, branding) => {
  return home_page_Repository.deleteProduct(name, category, branding);
}

exports.updateProduct = (name, category, branding, quantity, status) => {
  return home_page_Repository.updateProduct(name, category, branding, quantity, status);
}


exports.getOrderList = () =>{
  return home_page_Repository.getOrderList();
}

exports.getOrderListByTimeAsc = () =>{
  return home_page_Repository.getOrderListByTimeAsc();
}

exports.getOrderListByTimeDesc = () =>{
  return home_page_Repository.getOrderListByTimeDesc();
}

exports.getOrderListByStatus = () =>{
  return home_page_Repository.getOrderListByStatus();
}

exports.getOrderListByStatus1=()=>{
  return home_page_Repository.getOrderListByStatus1();
}

exports.getOrder =(id)=>{
  return home_page_Repository.getOrder(id);
}

exports.filter = (date)=>{
  return home_page_Repository.filter(date);
}

exports.filter1 = (date)=>{
  return home_page_Repository.filter1(date);
}

exports.updateStatus = (Status,id)=>{
  return home_page_Repository.updateStatus(Status,id);
}