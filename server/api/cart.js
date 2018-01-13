const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')

module.exports = router

//when a user clicks on 'Add to shopping cart' for any item
router.put('/', async (req, res, next) => {

    try {
        //create a new orderItem for the respective Item
        //if there is no other 'Created' order, create one
        const createdOrder = await Order.create({
            session: req.sessionID
        })

        //console.log this to see what kind of object it spits out
        res.json(createdOrder)
        //otherwise, use that previously 'created' order to associate the new orderItem
    }
    catch (error) {
        next(error)
    }

})


router.get('/user/:id', async (req, res, next) => {
    try {
        const cart = await Order.findOne({
            where: {
                userId: req.params.id,
                status: 'Created'
            },
            include: [{
                model: OrderItem
            }]
        }) || {}
        res.json(cart)
    } catch (error) {
        next(error)
    }
})

