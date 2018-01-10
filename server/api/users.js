const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
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
      resetPassword: +req.body.resetPassword,
      isAdmin: req.body.isAdmin
    })
    await user.reload()
    res.json(user)
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:id', (req, res) => {
  User.findOne({
    where: {
      id: +req.params.id
    }
  })
    .then(user => {
      return user.destroy({ force: true })
    })
    .then((result) => res.json('this user record no longer exists'))
    .catch(err => res.send(err))
})
