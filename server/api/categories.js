const router = require('express').Router()
const { Product, Category } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
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

router.post('/', async (req, res, next) => {
  try {
    const category = await Category.create({
      name: req.body.name,
    })
    res.json(category)
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: {
        id: +req.params.id
      }
    })
    await category.destroy({ force: true })
    res.json('This record no longer exists')
  }
  catch (error) {
    next(error)
  }
})
