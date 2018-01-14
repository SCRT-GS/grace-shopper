const User = require('./user')
const Address = require('./address')
const Category = require('./category')
const Order = require('./order')
const OrderItem = require('./orderItem')
const Product = require('./product')
const Review = require('./review')

/**
 * Associations
 */

Address.belongsTo(Order)

Order.hasMany(OrderItem)// Old association: OrderItem.belongsTo(Order)

OrderItem.belongsTo(Product)

Order.belongsTo(User)

Review.belongsTo(Product)
Review.belongsTo(User)

Product.belongsToMany(Category, {through: 'product_category'})
Category.belongsToMany(Product, {through: 'product_category'})


/**
 * Exporting all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 */

module.exports = {
  User,
  Address,
  Category,
  Order,
  OrderItem,
  Product,
  Review
}
