const router = require('express').Router()
const { User, Order, OrderItem, Product } = require('../db/models')
var nodemailer = require('nodemailer');

module.exports = router

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'wwchocolatefactory2@gmail.com',
    pass: process.env.GOOGLE_AUTO_EMAIL
  }
})

router.get('/', async (req, res, next) => {
      try {
        const adminUser = await User.findOne({
          where: {
            id: req.session.passport.user
          }
        })

        if (adminUser.isAdmin) {
          const users = await User.findAll({
            // explicitly select only the id and email fields - even though
            // users' passwords are encrypted, it won't help if we just
            // send everything to anyone who asks!
            attributes: ['id', 'email', 'isAdmin', 'resetPassword']
          })
          res.json(users)
        }
      }
      catch (error) {
        next(error)
      }
    })


router.get('/admin/:id', async (req, res) => {
  if (req.session.passport) {
    if (req.session.passport.user) {

      try {
        const adminUser = await User.findOne({
          where: {
            id: req.session.passport.user
          }
        })

        if (adminUser.isAdmin) {
          const user = await User.findOne({
            where: {
              id: +req.params.id
            }
          })
          res.json(user)
        }
      }
      catch (error) {
        next(error)
      }
    }
  } else {
    return res.status(500).send('You do not have permission to view this page')
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
        const adminUser = await User.findOne({
          where: {
            id: req.session.passport.user
          }
        })

        if (adminUser.isAdmin) {
          const orders = await Order.findAll({
            include: [{
              model: OrderItem
            }]
          })
          res.json(orders)
        }
      }
      catch (error) {
        next(error)
      }
    })

router.get('/admin/orders/:id', async (req, res, next) => {
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

router.post('/admin/shipping-email', async (req, res, next) => {
  if (req.session.passport) {
    if (req.session.passport.user) {
      try {
        const adminUser = await User.findOne({
          where: {
            id: req.session.passport.user
          }
        })

        if (adminUser.isAdmin) {

          const order = req.body

          const text = `Thank you for placing your order at The Chocolate Store. Your package has been shipped!. Your order number is ${order.id}. We appreciate your business!\n\nLove and chocolate,\n\nWilliam Wonka\n\nChocolatier & CEO \n\nThe Chocolate Store`

          const mailOptions = {
            from: 'wwchocolatefactory2@gmail.com',
            to: `${order.email}`,
            subject: 'Your order from The Chocolate Store has shipped!',
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
          res.json(order)
        }
      }
      catch (error) {
        next(error)
      }
    }
  }
  else {
    return res.status(500).send('You do not have permission to view this page')
  }
})


router.put('/update/orders/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: +req.params.id
      }
    })

    await order.update({
      status: req.body.status,
      email: req.body.email,
      userId: req.body.userId
    })
    await order.reload()
    res.json(order)


    if (order.status === 'Processing') {

      const text = `Thank you for placing your order at The Chocolate Store. We\'re packing up your sweet treats now and will send you a notification email when it ships. Your order number is ${order.id}. We appreciate your business!\n\nLove and chocolate,\n\nWilliam Wonka\n\nChocolatier & CEO \n\nThe Chocolate Store`

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
    if (order.status === 'Completed') {

      const text = `Your order from The Chocolate Store has been delivered. Your order number is ${order.id}. We appreciate your business!\n\nLove and chocolate,\n\nWilliam Wonka\n\nChocolatier & CEO \n\nThe Chocolate Store`

      const mailOptions = {
        from: 'wwchocolatefactory2@gmail.com',
        to: `${order.email}`,
        subject: 'Your order has been delivered!',
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
      })
    }
  }

  catch (error) {
    next(error)
  }
})


router.put('/update/:id', async (req, res, next) => {
  if (req.session.passport) {
    if (req.session.passport.user) {
      try {
        const adminUser = await User.findOne({
          where: {
            id: req.session.passport.user
          }
        })
        if (adminUser.isAdmin) {
          const user = await User.findOne({
            where: {
              id: +req.params.id
            }
          })
          let changePossible = false
          if (user.resetPassword === false) {
            changePossible = true
          }
          await user.update({
            email: req.body.email,
            isAdmin: req.body.isAdmin,
            resetPassword: req.body.resetPassword
          })
          await user.reload()
          res.json(user)
          if (changePossible && req.body.resetPassword === true) {

            const text = `Please log in to the Chocolate Factory website to reset your password.`

            const mailOptions = {
              from: 'wwchocolatefactory2@gmail.com',
              to: `${user.email}`,
              subject: 'Please reset your password.',
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
            })
          }
        }
      }
      catch (error) {
        next(error)
      }
    }
  } else {
    return res.status(500).send('You do not have permission to view this page')
  }
})

router.put('/resetPassword/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: +req.params.id
      }
    })

    await user.update({
      password: req.body.password,
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
  if (req.session.passport) {
    if (req.session.passport.user) {
      try {
        const adminUser = await User.findOne({
          where: {
            id: req.session.passport.user
          }
        })

        if (adminUser.isAdmin) {
          const user = await User.findOne({
            where: {
              id: +req.params.id
            }
          })
          await user.destroy({ force: true })
          res.json('this user record no longer exists')
        }
      }
      catch (error) {
        next(error)
      }
    }
  }
  else {
    return res.status(500).send('You do not have permission to view this page')
  }
})
