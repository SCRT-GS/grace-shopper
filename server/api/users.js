const router = require('express').Router()
const { User, Order, OrderItem, Product } = require('../db/models')
var nodemailer = require('nodemailer');

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
  catch (error) {
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


router.get('/:id/orders', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        status: 'Completed',
        userId: +req.params.id
      },
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

    if (order.status === 'Processing') {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'wwchocolatefactory2@gmail.com',
          pass: 'chocolicious'
        }
      })

      const text = `Thank you for placing your order at The Chocolate Store. We\'re packing up your sweet treats now and will send you a notification email when it ships. Your order number is ${order.id}. We appreciate your business!\n\nLove and chocolate,\n\n William Wonka\n\n
     Chocolatier & CEO \n\n The Chocolate Store`

      const mailOptions = {
        from: 'wwchocolatefactory2@gmail.com',
        to: `${order.email}`,
        subject: 'Thank you for ordering from The Chocolate Store!',
        text: text
      }
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.json({ yo: 'error' });
        } else {
          console.log('Message sent: ' + info.response);
          res.json({ yo: info.response });
        }
      });
    }
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
  catch (error) {
    next(error)
  }
})
