const db = require('../../../db');

exports.change_name = async (name, id) => {
    await db.connection.execute("UPDATE admin_user SET name = ? WHERE (id = ?);", [name, id]);
}
exports.change_age = async (name, id) => {
    await db.connection.execute("UPDATE admin_user SET age = ? WHERE (id = ?);", [name, id]);
}
exports.change_gender = async (name, id) => {
    await db.connection.execute("UPDATE admin_user SET gender = ? WHERE (id = ?);", [name, id]);
}
exports.get = async (id) => {
    const result = await db.connection.execute("SELECT * FROM admin_user where id = ?", [id]);
    return result[0][0];
}
exports.change_pass = async (name, id) => {
    await db.connection.execute("UPDATE admin_user SET password = ? WHERE (id = ?);", [name, id]);
}
exports.addProduct = async (name, price, shortDes, longDes, category, branding, status) => {
    const result = await db.connection.execute("INSERT INTO product (Name, Price, ShortDescription, LongDescription, Category, Branding, Total_purchase) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, price, shortDes, longDes, category, branding, status])
}



exports.getOrderList = async ()=>{
    const result = await db.connection.execute("select  * from order_details  ");
    return result[0];
}


exports.getOrderListByTimeAsc = async ()=>{
    const result = await db.connection.execute("select  * from order_details order by date asc ");
    return result[0];
}

exports.getOrderListByTimeDesc = async ()=>{
    const result = await db.connection.execute("select  * from order_details order by date desc ");
    return result[0];
}

exports.getOrderListByStatus = async ()=>{
    const result = await db.connection.execute("select * from order_details where status ='DaGiao'");
    return result[0];
}

exports.getOrderListByStatus1 = async()=>{
    const result  = await db.connection.execute("select * from order_details where status ='ChuaGiao'");
    return result[0];
}


exports.getOrder = async (id) => {
    const result =  await db.connection.execute("SELECT * FROM order_details where id = ?", [id]);
    return result[0][0];
}

exports.filter = async (date) => {
    const result =  await db.connection.execute("SELECT * FROM order_details where status ='DaGiao' and month(date)  like ?", [`%${date}%`]);
    return result[0];
  }

exports.filter1 = async (date) => {
    const result =  await db.connection.execute("SELECT * FROM order_details where  status ='DaGiao' and year(date)  like ?", [`%${date}%`]);
    return result[0];
}

exports.updateStatus = async(Status,id)=>{
     await db.connection.execute("update order_details set status = ? where (id = ?);", [Status,id]);
}





