const orm = require("../config/orm.js");
// ORM = cares about the db stuff and only db stuff
// model = only cares about creating a js object that makes it easier to talk to the db
// controller = requires our model and we can call `burger.selectAll(` in our routes
// view = show me the burger ui

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
   orm.create("burgers", ["burgerData", "devoured"], [name, false], cb);
 },
 updateOne: function(id, cb) {
   var condition = "id=" + id;
   orm.update("burgers", {
     devoured: true
   }, condition, cb);
 }
};

  module.exports = burger;
