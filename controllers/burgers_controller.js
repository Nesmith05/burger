var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// router.get("/", function(req, res) {
//     burger.selectAll(function(data) {
//       var hbsObject = {
//           burgers: data
//         };
//       // console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
// });
router.get("/", function(req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
        // res.render("form");
        // res.sendFile(__dirname + "../views/index.handlebars");
    });
});

router.post("/burgers", function(req, res) {
    burger.insertOne([ 
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.redirect("/burgers");
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect("/burgers")
    });
});

module.exports = router;