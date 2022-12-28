const productService = require('./Service');
const createError = require('http-errors');
const qs = require('qs');
const target_category = "";
exports.list = async (req, res) => {
  const { name: nameFilter } = req.query;
  const { category } = req.query;
  const { tag } = req.query;
  // const { price1 } = req.query;
  // const { price2 } = req.query;
  // const { price3 } = req.query;
  const { sort_price } = req.query;
  let products = [];
  let filter_category = [];
  let filter_tags = [];

  if (nameFilter || category || tag) {
    if (nameFilter) {
      products = await productService.filter(nameFilter);
    }
    if (category) {
      filter_category = await productService.filter1(category);
      products = filter_category;
    }
    if (tag) {
      filter_tags = await productService.filter2(tag);
      if (category)
        products = productService.find_similar(filter_tags, filter_category);
      else
        products = filter_tags;
    }

    // else if (price1) {
    //   filter_name = 'price1';
    //   target_name = price1;
    //   products = await productService.filter3();
    // }
    // else if (price2) {
    //   filter_name = 'price2';
    //   target_name = price2;
    //   products = await productService.filter4();
    // }
    // else if (sort_price === "asc_price") {
    //   filter_name = 'sort_price';
    //   target_name = "asc_price";
    //   products = await productService.sort_price_asc();
    // }
    // else if (sort_price === "dsc_price") {
    //   filter_name = 'sort_price';
    //   target_name = "dsc_price";
    //   products = await productService.sort_price_dsc();
    // }
    // else if (sort_price === "asc_name") {
    //   filter_name = 'sort_price';
    //   target_name = "asc_name";
    //   products = await productService.sort_name_asc();
    // }
    // else if (sort_price === "dsc_name") {
    //   filter_name = 'sort_price';
    //   target_name = "dsc_name";
    //   products = await productService.sort_name_dsc();
    // }
  }
  else
    products = await productService.getAll();

  const { sort, ...withoutSort } = req.query;
  res.render('customer/shop', { products, category, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}` });
};

function get_Category(list, id) {
  let arr = [];
  let i = 0;
  for (; i < list.length; i++) {
    if (list[i]['id'] == id)
      break;
  }
  for (let j = 0; j < list.length; j++) {
    if (j != i && list[i]['category'] == list[j]['category']) {
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
  arr = get_Category(products, ProductID);
  if (!product) return next(createError(404));
  res.render('customer/shop-details', { product, arr });
};
