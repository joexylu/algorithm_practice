var shortid = require('shortid');
// To generate a unique ID, use shortid.generate()

var middleware = function(req, res, next){
  shortid(req.id)
  next()
}

module.exports = middleware;