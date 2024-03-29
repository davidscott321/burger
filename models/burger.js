var orm = require('../config/orm.js');

var burger = 
{
  selectAll: function(cb)
  {
    orm.selectAll(function(result)
    {
      cb(result);
    });
  },
  insertOne: function(burger_name,cb)
  {
    orm.insertOne(burger_name,function(result)
    {
      cb(result);
    });
  },
  updateOne: function(id,cb)
  {
    orm.updateOne(id,function(result)
    {
      cb(result);
    });
  }
};

module.exports = burger;