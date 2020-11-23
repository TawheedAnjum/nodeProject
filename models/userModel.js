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

  getByCustomer: function (id, callback) {
    var sql = "SELECT * FROM customer WHERE cu_email='" + id + "'";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

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

  getAllCategory: function (callback) {
    var sql = "select * from category";
    db.getResults(sql, function (results) {
      callback(results);
    });
  },

  insert: function (user, callback) {

  var sql ="insert into customer VALUES ('', '" +user.cu_name +"' , '" +user.cu_email +"' , '" +user.cu_pass +"')";
    // var sql ="INSERT INTO customer ('cu_name','cu_email','cu_pass') VALUES (?,?,?)";

    db.execute(sql, function (status) {
      callback(status);
    });
  },
  // update: function(){

  // },
  // delete: function(){

  // }
};