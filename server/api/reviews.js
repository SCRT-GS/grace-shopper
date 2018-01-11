const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Review.findAll(req.body)
    .then(review => res.json(review))
    .catch(next)
})

router.get('/:reviewId', (req, res, next) => {
  Review.findOne({
    where: {
      id: req.params.reviewId
    }
  })
    .then(review => res.json(review))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(review => res.json(review))
  .catch(next)
})
