const router = require('express').Router()
const {User, Order, OrderItem} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    res.json(users)
}
    catch(error){
      next(error)
    }
})

router.get('/admin/:id', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: +req.params.id
      }
    })
    res.json(user)
  }
  catch (error) {
    next(error)
  }
})

router.get('/orders/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [{
        model: OrderItem
    }]
    })
    res.json(orders)
  }
  catch (error) {
    next(error)
  }
})

router.get('/admin/orders/:id', async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        id: +req.params.id
      },
      include: [{
        model: OrderItem
    }]
    })
    res.json(order)
  }
  catch (error) {
    next(error)
  }
})
router.put('/update/orders/:id', async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        id: +req.params.id
      }
    })
    await order.update({
      status: req.body.status,
    })
    await order.reload()
    res.json(order)
  }
  catch (error) {
    next(error)
  }
})

router.put('/update/:id', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: +req.params.id
      }
    })
    await user.update({
      email: req.body.email,
      isAdmin: req.body.isAdmin,
      resetPassword: req.body.resetPassword
    })
    await user.reload()
    res.json(user)
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
    where: {
      id: +req.params.id
    }
  })
    await user.destroy({ force: true })
    res.json('this user record no longer exists')
    }
  catch (error){
    next(error)
  }
})
