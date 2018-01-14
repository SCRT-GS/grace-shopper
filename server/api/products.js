const router = require('express').Router()
const { Product, Review, Category } = require('../db/models')
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
router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: [{
        model: Product
    }]
    })
    res.json(categories)
  }
  catch (error) {
    next(error)
  }
})
router.put('/update/:id', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: +req.params.id
      }
    })
    await product.update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imgURL: req.body.imgURL,
    })
    await product.reload()
    res.json(product)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', (req, res, next) => {
  return Product.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Category
      }]
    })
    .then(product => res.json(product))
    .catch(error => console.error(error))
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
})

router.post('/', async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      imgURL: req.body.imgURL
    })
    res.json(product)
  }
  catch (error) {
    next(error)
  }
})
