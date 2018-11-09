//this file include all routes related with customer (all CRUDs)

const errors = require('restify-errors');


//module.exports = function(server){}
//same thing with a arrow function written as below
module.exports = server => {
  
  //handle all get requests for customers
  server.get('customers', (req, res, next) => {
    res.send({msg: 'test'});// sending an object with text
    next();//in restify next must be invoked at the end
  });
}