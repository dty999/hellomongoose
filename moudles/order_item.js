var mongoose = require('./db.js')
var OrderItemSchema = mongoose.Schema({
  Order_Id: Number,
  title: String,
  price: Number
})

var OrderItemModel = mongoose.model('OrderItem', OrderItemSchema, 'orderItem')

module.exports = OrderItemModel