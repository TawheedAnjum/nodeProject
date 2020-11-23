const db = require('./db');

module.exports = {
  validate: function (user, callback) {
    var sql =
      "select * from customer where cu_email='" +
      user.cu_email +
      "' and cu_pass='" +
      user.cu_pass +
      "'";
    db.getResults(sql, function (results) {
      if (results.length > 0) {
        callback(true);
      } else {
        callback(false);
      }
    });
  },

  // customer..........start

  cartInsert: function (user, callback) {
    var sql = "insert into cart (cu_id, id, quantity) VALUES (?, ?, ?)";

    db.execute(
      sql,
      [user.cu_id, user.id, user.quantity],
      function (status) {
        callback(status);
      }
    );
  },

  getByCustomer: function (id, callback) {
    var sql = "SELECT * FROM customer WHERE cu_id='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getCustomerID: function (id, callback) {
    var sql = "SELECT cu_id FROM customer WHERE cu_email='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  // customerr-----end

  // product......start
  getByProductCategory: function (id, callback) {
    var sql = "SELECT * FROM products WHERE category_id='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getByProduct: function (id, callback) {
    var sql = "SELECT * FROM products WHERE id='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  getById: function () {},

  getAll: function (callback) {
    var sql = "select * from products";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  // product......end;

  // Cart......start
  getCartList: function (id, callback) {
    var sql = "SELECT * FROM cart WHERE cu_id='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },
  // Cart......end

  // catagory.......
  getAllCategory: function (callback) {
    var sql = "select * from category";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  // update: function(){

  // },
  // delete: function(){

  // }
};