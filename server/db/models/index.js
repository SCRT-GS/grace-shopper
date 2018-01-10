const User = require('./user')
const Address = require('./address')
const Category = require('./category')
const Order = require('./order')
const OrderItem = require('./orderItem')
const Product = require('./product')
const Review = require('./review')



/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 OrderItem.belongsTo(Order)
 OrderItem.belongsTo(Product)

 Review.belongsTo(Product)
 Review.belongsTo(User)

 Product.belongsToMany(Category, {through: 'product_category'})

 Address.belongsTo(Order)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
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
