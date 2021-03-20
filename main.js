
const orderModel = require('./moudles/order.js')

// orderModel.find({}, (err, res) => {
//   console.log(res);
// })

orderModel.aggregate([
  {
    $lookup:
    {
      from: 'orderItem',
      localField: 'order_Id',
      foreignField: 'order_Id',
      as: 'items'
    }
  }
], (err, docs) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(JSON.stringify(docs));
})