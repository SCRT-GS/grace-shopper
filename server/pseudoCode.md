##User never logs in

A user loads the website.
The user now has a cookie on the browser and a session in the server.
The session is stored in our database; it doesn't have a user ID.
The user clicks 'Add to Cart' on a product.
An order is created in the database. It has a status of 'Created' and one associated orderItem.
The order is associated with the session ID in the request.
The user is notified of this. 
The user adds another 'orderItem' to their cart.
The server checks if there are any orders associated to the current session.
The server associates a newly created orderItem to the order associated with the session.
The user receives confirmation of this.
The user clicks CHECK OUT button.
The server returns the order and all associated order items.
The user reviews their order, inputs address, and updates or deletes line items.
The user clicks SUBMIT.
The server changes the order status to 'Processing'.

##User logs in with stuff in their cart

A user loads the website after having logged out.
The user now has a cookie on the browser and a session in the server.
The session is stored in our database; it doesn't have a user ID.
The user clicks 'Add to Cart' on a product.
An order is created in the database. It has a status of 'Created' and one associated orderItem.
The order is associated with the session ID in the request.
The user is notified of this.
The user remembers they have an account and proceeds to log in.
The session now has a userID associated with it?????
The server checks if there are any 'Created' orders associated with the current session.
A user can only have one 'Created' order a.k.a. a cart.
The most recent order takes precedence????
The 'Created' order takes precedence????
If needed, The server updates the userID associated with the order associated to the session.????
The user adds another 'orderItem' to their cart.
The server checks if there are any 'Created' orders associated to the logged in user OR to the current session.
The server associates a newly created orderItem to the 'Created' order associated with the session.
The user receives confirmation of this.
The user clicks CHECK OUT button.
The server returns the 'Created' order and all associated order items.
The user reviews their order, inputs address, and updates or deletes line items.
The user clicks SUBMIT.
The server changes the order status to 'Processing'.

##User logs in from a different device before shopping
The user logs in from a different device.
The device has a different cookie than the users browser.
The session has a userID associated with it.
The user has two sessions simultaneously????
The server checks if there are any 'Created' orders associated with the user.
The user checks their cart and sees orderItems listed in it.
The user adds another item to cart.
The server associates the new orderItem to the 'Created' order.
The user proceeds to check out as usual.
Since the status of the order changes, the next cart click creates another 'Created' order.

##User creates an order, deletes orderItems, logs out, returns to create new order

The user has an order with orderItems
When the user deletes an orderItem, a DELETE request goes to the server
When the order is empty, is it also deleted????
The 'Created' order remains but with zero associated orderItems.
Next time the user logs in and adds to cart, orderItems are associated to this order
If the user logs out and makes a cart, this cart may be potentially replaced by an empty cart
Since the 'Created' orders with a userID take precedence over 'Created' orders associated with the current session.


