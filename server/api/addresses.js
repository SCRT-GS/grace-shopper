const router = require('express').Router()
const {Address} = require('../db/address')
module.exports = router

router.get('/', (req, res, next) => {
  Address.findAll(req.body)
    .then(address => res.json(address))
    .catch(next)
})


router.post('/', (req, res, next) => {
  Address.create(req.body)
  .then(address => res.json(address))
  .catch(next)
})
