
const orderModel = require('./moudles/order.js')

orderModel.find({}, (err, res) => {
  console.log(res);
})