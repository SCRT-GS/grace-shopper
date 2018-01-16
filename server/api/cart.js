const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {

    try {
        let cart
        const sessionCart = await Order.findOne({
            where: {
                session: req.sessionID,
                status: 'Created'
            }
            
        })

        if (!req.user){
            console.log('The visitor adding to their cart is not logged in: ', req.sessionID)
            if (sessionCart) {
                console.log('The visitor already had a cart: ', sessionCart.dataValues)
                cart = sessionCart
            }
            else {
                console.log('The visitor has no cart associated to session')
                cart = await  Order.create({
                    session: req.sessionID,
                    status: 'Created'
                })
                console.log('created a cart:', cart.dataValues)
            }
            
        } else {
           console.log('The user adding to the cart is logged in')
           //the session cart replaces the userCart
           //There might be no session cart
            if(sessionCart){
                console.log('The user has a sessionCart to replace a userCart if the user cart is different')
                const destroyedCart = await Order.destroy({
                    where: {
                        userId: req.user.dataValues.id,
                        session: {
                            $ne: req.sessionID
                        },
                        status: 'Created'
                    }
                })
                console.log(`Destroyed ${destroyedCart} cart`)
                cart = sessionCart
            } else {
                console.log('The user has no sessionCart. It must be the first item they add to the cart')
                //create a session cart
                const createdCartAssociatedWithUser = await Order.create({
                    session: req.sessionID,
                    userId: req.user.dataValues.id,
                    status: 'Created'
                })
                cart = createdCartAssociatedWithUser
            }
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
        let cart
        
        if (req.params.id !== '0') {
            console.log('A logged in user is fetching their cart: ', req.params.id)
            console.log('if they had a previous cart, this will be replaced with the sessionCart')

            const sessionCart = await Order.findOne({
                where: {
                    session: req.sessionID,
                    status: 'Created'
                },
                include: [{
                    model: OrderItem
                }]
            }) 
           
            if (!sessionCart){
                console.log('There is no session cart. Finding a user cart if it exists.')
                //look for an existing cart associated to user
                cart = await Order.findOne({
                    where: {
                        userId: req.params.id,
                        status: 'Created'
                        
                    },
                    include: [{
                        model: OrderItem
                    }]
                })
            } else {
                console.log('There is a session cart.')
                console.log('If it exists, destroying a user cart to replace it')
                const destroyedCart = await Order.destroy({
                    where: {
                        userId: req.params.id,
                        status: 'Created',
                        session: {
                            $ne: req.sessionID
                        }
                    }
                })
                console.log(`Destroyed ${destroyedCart} cart`)
                    //if a cart was destroyed, the session cart needs to be associated to the user
                    //in order to replace it
                    const updatedCart = await Order.update({
                        userId: req.params.id 
                    },{
                        where: {
                            session: req.sessionID,
                            status: 'Created'
                        }
                    })
                    console.log(`Updated ${updatedCart[0]} cart`)
                    cart = await Order.findOne({
                        where: {
                            userId: req.params.id,
                            status: 'Created'
                        },
                        include: [{
                            model: OrderItem
                        }]
                    })
            } 
        } else  {
            console.log('A visitor is fetching their cart: ', req.sessionID)
            cart = await Order.findOne({
                where: {
                    session: req.sessionID,
                    status: 'Created'
                },
                include: [{
                    model: OrderItem
                }]
            })
        }
        res.json(cart)
    } catch (error) {
        next(error)
    }
})

router.delete('/item/:id', async (req, res, next) => {
    try {
        //technically, anyone can delete an orderItem even if it isn't in their cart
        //can fix this in V2
        const order = await OrderItem.findOne({
            where: {
                id: req.params.id
            }
        })
        const orderId = order.dataValues.orderId
        const numberOfDeletedOrderItems = await OrderItem.destroy({
            where: {
                id: req.params.id
            }
        })
        console.log('This is the ID of the order being edited:', orderId)
        console.log(`Just deleted ${numberOfDeletedOrderItems} orderItem.`)
        const updatedOrder = await Order.findOne({
            where: {
                id: orderId
            },
            include: [{
                model: OrderItem
            }]
        })
        res.json(updatedOrder)
    } catch (error) {
        next(error)
    }
})
