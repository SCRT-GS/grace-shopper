const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {
    try {
        if (!req.user){
            console.log('The user adding to their cart is not logged in: ', req.sessionID)
            //Since the user is not logged in, the only thing we can associate to the order is the session
            //The user may be creating an order 
            const orderWithoutUser = await Order.create({
                //other stuff
                session: req.sessionID,
                status: 'Created'
            })
            //or editing one accessible via the session
            const foundOrder = await Order.findOne({
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
            const savedOrder = await Order.findOne({
                userId: user,
                status: 'Created'
            })

            

        }
        //if there is no other 'Created' order, create one
        // const foundOrder = await Order.findOne({
        //     session: req.sessionID,
        //     status: 'Created'
        // })
        
         
        // const createdOrderItem = await OrderItem.create({
        //     price: req.body.price,
        //     quantity: req.body.quantity
        // }) 
        res.json(req.user) 

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

