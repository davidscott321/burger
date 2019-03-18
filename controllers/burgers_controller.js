var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

router.get("/index",function (req,res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = { 
      burgers: data 
    };

    res.render("index",hbsObject);
  });
});

router.get("*",function(req,res) {
  res.redirect("/index");
});

router.post("/api/burger",function (req,res) 
{
  burger.insertOne(req.body.burgerName,function() 
  {
    res.redirect("/index");
  });
});

router.post("/api/devour/:id",function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect("/index");
  });
});

module.exports = router;