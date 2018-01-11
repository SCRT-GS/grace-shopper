const router = require('express').Router()
const { Product, Review } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
    console.log('session:', req.session)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(product)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id/reviews', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        productId: req.params.id
      }
    })
    res.json(reviews)
  }
  catch (error) {
    next(error)
  }

