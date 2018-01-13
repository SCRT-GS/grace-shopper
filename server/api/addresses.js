const router = require('express').Router()
const {Address} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Address.findAll(req.body)
    .then(address => res.json(address))
    .catch(next)
})


// router.post('/', (req, res, next) => {
//   Address.create(req.body)
//   .then(address => res.json(address))
//   .catch(next)
// })

router.post('/', async (req, res, next) => {
  try {
    const address = await Address.create({
      line1: req.body.line1,
      line2: req.body.line2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      orderId: req.body.orderId,
    })
    res.json(address)
  }
  catch (error) {
    next(error)
  }
})
