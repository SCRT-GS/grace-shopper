const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {
    try {
        let foundCart, cart
        if (!req.user){
            console.log('The user adding to their cart is not logged in: ', req.sessionID)
            //Since the user is not logged in, the only thing we can associate to the order is the session
            //check if there is a cart to edit
            foundCart = await Order.findOne({
                where: {
                    session: req.sessionID,
                    status: 'Created'
                }
                
            })
            console.log('type of foundOder: ', typeof foundCart)
            //if there is no cart in db, create one
            cart = await foundCart ||  Order.create({
                session: req.sessionID,
                status: 'Created'
            })
        } else {
            console.log('The user adding to their cart is logged in: ', req.sessionID)
            //Since the user is logged in, we can associate to the order a user
            //The Order model has the foreign key for this
            //We have to see if there is a cart for the user to 'edit'
            //The saved cart takes precedence
            const user = req.user
            console.log('user: ', user)
            foundCart = await Order.findOne({
                where: {
                userId: user,
                status: 'Created'
                }
            })
            //if there is no found cart, create a cart
            cart = await foundCart || Order.create({
                userId: user,
                session: req.sessionID,
                status: 'Created'
            })
        }
        const item = await OrderItem.create({
            price: req.body.price,
            quantity: req.body.quantity || 1,
            orderId: cart.id,
            productId: req.body.productId
        })
        const updatedCart = await Order.findOne({
            where: {
                id: cart.id
            },
            include: [{
                model: OrderItem
            }]
        })
        res.json(updatedCart) 
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
