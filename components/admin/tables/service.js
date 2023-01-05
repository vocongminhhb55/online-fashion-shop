const repo = require('./repo');

exports.getAll_admin = () => {
    return repo.getAll_admin();
}
exports.getID = (id,table) => repo.get(id,table);
exports.getName = (name,table) => {
    return repo.getName(name,table);
}

exports.getEmail = (name,table) => {
    return repo.getEmail(name,table);
}


exports.sort_asc = (list, target) => {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if(list[i][target] > list[j][target]){
                let c = list[i];
                list[i] = list[j];
                list[j] = c;   
            }
        }
    }
    
    return list;
}
exports.sort_dsc = (list, target) => {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if(list[i][target] < list[j][target]){
                let c = list[i];
                list[i] = list[j];
                list[j] = c;        
            }
        }
    }
    return list;
}
exports.getAll_customer = () => {
    return repo.getAll_customer();
}

exports.filter_category = (category) => {
    return repo.filter_category(category);
}
  
exports.filter_branding = (branding) => {
    return repo.filter_branding(branding);
}


//edit product
exports.edit_product_name = (name, id) => {
    return repo.edit_product_name(name, id);
}

exports.edit_product_category = (category, id) => {
    return repo.edit_product_category(category, id);
}

exports.edit_product_branding = (branding, id) => {
    return repo.edit_product_branding(branding, id);
}

exports.edit_product_status = (status, id) => {
    return repo.edit_product_status(status, id);
}
exports.delete_product = (id) => {
    return repo.deleteProduct(id);
}
exports.addProduct = (name, price, shortDes, longDes, category, branding, quantity, status) => {
    return repo.addProduct(name, price, shortDes, longDes, category, branding, quantity, status);
  }