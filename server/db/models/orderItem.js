
const Sequelize = require('sequelize')
const db = require('../db')

const OrderItem = db.define('order_item', {
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderItem
