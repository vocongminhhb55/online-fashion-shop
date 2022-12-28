
const db = require('../../db');

exports.getAll = async () => {
  const result =  await db.connection.execute('select * from product');
  return result[0];
}

exports.filter = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM product where name like ?", [`%${name}%`]);
  return result[0];
}
exports.filter1 = async (category) => {
  const result =  await db.connection.execute("SELECT * FROM product where category = ?", [category]);
  return result[0];
}
exports.filter2 = async (name) => {
  const result =  await db.connection.execute("SELECT * FROM product where tags = ?", [name]);
  return result[0];
}
// exports.filter3 = async () => {
//   const result =  await db.connection.execute("SELECT * FROM product where Price <= 50");
//   return result[0];
// }
// exports.filter4 = async () => {
//   const result =  await db.connection.execute("SELECT * FROM product where Price > 50 and Price < 100");
//   return result[0];
// }
// exports.filter5 = async () => {
//   const result =  await db.connection.execute("SELECT * FROM product where Price > 100");
//   return result[0];
// }
exports.sort_price_asc = async () => {
  const result =  await db.connection.execute("select * from product order by product.price ASC;");
  return result[0];
}
exports.sort_price_dsc = async () => {
  const result =  await db.connection.execute("select * from product order by product.price DESC;");
  return result[0];
}
exports.sort_name_asc = async () => {
  const result =  await db.connection.execute("select * from product order  by product.name ASC;");
  return result[0];
}
exports.sort_name_dsc = async () => {
  const result =  await db.connection.execute("select * from  product order by product.name DESC;");
  return result[0];
}

//___________________________________________________________

// exports.getAll_page = async (limit,offset) => {
//   const result =  await db.connection.execute('select * from product limit' + limit +'offset ?',[offset]);
//   return result[0];
// }

// exports.filter_page = async (name,limit,offset) => {
//   const result =  await db.connection.execute("SELECT * FROM product where Name like ?" + limit +"offset ?", [`%${name}%`]);
//   return result[0];
// }
// exports.filter1_page = async (name,limit,offset) => {
//   const result =  await db.connection.execute("SELECT * FROM product where Category = ?"+ limit +"offset ?", [name]);
//   return result[0];
// }
// exports.filter2_page = async (name,limit,offset) => {
//   const result =  await db.connection.execute("SELECT * FROM product where Branding = ?"+ limit +"offset ?", [name]);
//   return result[0];
// }
// exports.filter3_page = async (limit,offset) => {
//   const result =  await db.connection.execute("SELECT * FROM product where Price <= 50"+ limit +"offset ?");
//   return result[0];
// }
// exports.filter4_page = async (limit,offset) => {
//   const result =  await db.connection.execute("SELECT * FROM product where Price > 50 and Price < 100"+ limit +"offset ?");
//   return result[0];
// }
// exports.filter5_page = async (limit,offset) => {
//   const result =  await db.connection.execute("SELECT * FROM product where Price > 100"+ limit +"offset ?");
//   return result[0];
// }
// exports.sort_price_asc_page = async (limit,offset) => {
//   const result =  await db.connection.execute("select * from product order by product.Price ASC"+ limit +"offset ?");
//   return result[0];
// }
// exports.sort_price_dsc_page = async (limit,offset) => {
//   const result =  await db.connection.execute("select * from product order by product.price DESC"+ limit +"offset ?");
//   return result[0];
// }
// exports.sort_name_asc_page = async (limit,offset) => {
//   const result =  await db.connection.execute("select * from product order  by product.Name ASC"+ limit +"offset ?");
//   return result[0];
// }
// exports.sort_name_dsc_page = async (limit,offset) => {
//   const result =  await db.connection.execute("select * from  product order by product.Name DESC"+ limit +"offset ?");
//   return result[0];
// }


exports.get = async (id) => {
  const result =  await db.connection.execute("SELECT * FROM product where id = ?", [id]);
  return result[0][0];
}
