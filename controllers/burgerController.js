var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// ORM = cares about the db stuff and only db stuff
// model = only cares about creating a js object that makes it easier to talk to the db
// controller = requires our model and we can call `burger.selectAll(` in our routes
// view = show me the burger ui

router.get('/', function (req, res) {
	// res.redirect('/burgers');
	console.log("yo");
	burger.selectAll( function(burgerData){
		console.log(burgerData);
		res.render("index", { burger_data: burgerData })
	})
});
/*
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/cats", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
*/
// Export routes for server.js to use.
module.exports = router;
