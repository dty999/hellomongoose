var mongoose = require('./db.js')
var OrderSchema = mongoose.Schema({
  Order_Id: Number,
  total: Number,
  price: Number
})

var OrderModel = mongoose.model('Order', OrderSchema, 'order')

module.exports = OrderModel