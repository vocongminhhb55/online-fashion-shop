const { connection } = require('../../db');
const productRepository = require('./productsRepository');

exports.getAll = () => {
  return productRepository.getAll();
}
// exports.get_by_pages = (arr, limit, offset) => {
//   let result = []
//   const s = limit + offset;
//   const size = arr.length < s ? arr.length:s; 
//   for(var i = offset;i<size;i++){
//     result.push(arr[i]);
//   }
//   return result;
// }
exports.filter = (name) => {
  return productRepository.filter(name);
}

exports.filter1 = (category, tags) => {
  return productRepository.filter1(category, tags);
}
exports.get = (id) => productRepository.get(id);
exports.find_similar = (list1, list2) => {
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if(list1[i].id === list2[j].id){
        result.push(list1[i]);
      }
    }
  }
  return result;
}
exports.filter2 = (name) => {
  return productRepository.filter2(name);
}
// exports.filter3 = () => {
//   return productRepository.filter3();
// }
// exports.filter4 = () => {
//   return productRepository.filter4();
// }
// exports.filter5 = () => {
//   return productRepository.filter5();
// }
// exports.sort_price_asc = () => {
//   return productRepository.sort_price_asc();
// }
// exports.sort_price_dsc = () => {
//   return productRepository.sort_price_dsc();
// }
// exports.sort_name_asc = () => {
//   return productRepository.sort_name_asc();
// }
// exports.sort_name_dsc = () => {
//   return productRepository.sort_name_dsc();
// }



//____________________________________________

// exports.getAll_page = () => {
//   return productRepository.getAll();
// }

// exports.filter_page = (name) => {
//   return productRepository.filter(name);
// }

// exports.filter1_page = (name) => {
//   return productRepository.filter1(name);
// }
// exports.filter2_page = (name) => {
//   return productRepository.filter2(name);
// }
// exports.filter3_page = () => {
//   return productRepository.filter3();
// }
// exports.filter4_page = () => {
//   return productRepository.filter4();
// }
// exports.filter5_page = () => {
//   return productRepository.filter5();
// }
// exports.sort_price_asc_page = () => {
//   return productRepository.sort_price_asc();
// }
// exports.sort_price_dsc_page = () => {
//   return productRepository.sort_price_dsc();
// }
// exports.sort_name_asc_page = () => {
//   return productRepository.sort_name_asc();
// }
// exports.sort_name_dsc_page = () => {
//   return productRepository.sort_name_dsc();
// }
// exports.get = (id) => productRepository.get(id);


// exports.sortByPriceAsc_page = () =>  {
//   return productRepository.sortByPriceAsc();
// }


// exports.sortByPriceDesc_page = () =>  {
//   return productRepository.sortByPriceDesc();
// }


// exports.sortByNameDesc_page = () =>  {
//   return productRepository.sortByNameDesc();
// }


// exports.sortByNameAsc_page = () =>  {
//   return productRepository.sortByNameAsc();
// }


