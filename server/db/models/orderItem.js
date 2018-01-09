
const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('order_item', {
  price: {
    type: Sequelize.DECIMAL(10, 2)
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderItem
