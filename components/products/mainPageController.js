const productService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');

exports.list = async (req, res) => {
  const {name: nameFilter} = req.query;
  const { category } = req.query;
  const { branding } = req.query;
  const { price1 } = req.query;
  const { price2 } = req.query;
  const { price3 } = req.query;
  const { sort_price } = req.query;
  let products = [];
  var num_products = 0;
  var filter_name;
  var target_name;
  const limit = 3;
  if (nameFilter) {
    filter_name = 'name';
    target_name = nameFilter;
    products = await productService.filter(nameFilter);
  }
  else if (category) {
    filter_name = 'category';
    target_name = category;
    products = await productService.filter1(category);
  }
  else if (branding) {
    filter_name = 'branding';
    target_name = branding;
    products = await productService.filter2(branding);
  }
  else if (price1) {
    filter_name = 'price1';
    target_name = price1;
    products = await productService.filter3();
  }
  else if (price2) {
    filter_name = 'price2';
    target_name = price2;
    products = await productService.filter4();
  }
  else if (price3) {
    filter_name = 'price3';
    target_name = price3;
    products = await productService.filter5();
  }
  else if (sort_price === "asc_price") {
    filter_name = 'sort_price';
    target_name = "asc_price";
    products = await productService.sort_price_asc();
  }
  else if (sort_price === "dsc_price") {
    filter_name = 'sort_price';
    target_name = "dsc_price";
    products = await productService.sort_price_dsc();
  }
  else if (sort_price === "asc_name") {
    filter_name = 'sort_price';
    target_name = "asc_name";
    products = await productService.sort_name_asc();
  }
  else if (sort_price === "dsc_name") {
    filter_name = 'sort_price';
    target_name = "dsc_name";
    products = await productService.sort_name_dsc();
  }
  else
    products = await productService.getAll();
  num_products = products.length;
  const pages = Math.ceil(num_products / limit);
  const pageNumbers = [];
  const curPage = req.query.page || 1;
  const offset = (curPage - 1) * limit;
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push({
      value: i,
      isCurrent: i === +curPage,
      filter: filter_name,
      target: target_name
    })
  }  
  products = productService.get_by_pages(products,limit,offset);
  const {sort,...withoutSort} = req.query;
  res.render('products/shop', { products, pageNumbers ,originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
};

function get_Category(list, id) {
  let arr = [];
  let i = 0;
  for (; i < list.length; i++) {
    if (list[i]['ProductID'] == id)
      break;
  }
  for (let j = 0; j<list.length;j++) {
    if (j!=i && list[i]['Category'] ==list[j]['Category'] ){
      arr.push(list[j]);
    }
  }
  return arr;
}
exports.details = async (req, res, next) => {
  const { ProductID } = req.params;
  let products = [];
  let arr = [];
  const product = await productService.get(ProductID);
  products = await productService.getAll();
  arr = get_Category(products,ProductID);
  if (!product) return next(createError(404));
  res.render('products/shop-details', {product,arr});
};
