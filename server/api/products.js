const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', (req, res, next) => {
  Product.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(product => res.json(product))
    .catch(next)
})
