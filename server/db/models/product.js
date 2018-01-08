
const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL(10, 2)
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  imgURL: {
    type: Sequelize.STRING
  }
})

module.exports = Product
