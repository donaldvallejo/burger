var connection = require("../config/connection.js")

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      console.log("queryString", queryString, orm, this);
      if (err) {
        throw err;
      }
      cb(result);
      console.log("result", result);
    });
  },

  insertOne: function(table, cols, burger_name, cb) {
    var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + burger_name.length + ") ";
    console.log(queryString);
    connection.query(queryString, burger_name, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

// ???????????????????????????????????????????????????
// update devoured burgers section
  // update sql table to insert burger into devoured col
    //


  // updateOne: function(table, cols, cb) {
  //   var queryString = "UPDATE " + table + " SET " + cols.toString() + " WHERE ";
  //   console.log(queryString);
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // },
};
module.exports = orm;
