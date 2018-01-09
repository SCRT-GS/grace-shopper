/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Address, Category, Order, OrderItem, Product, Review} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const addresses = await Promise.all([
    Address.create({line1: '123 Main St', line2: 'Apt 2', city: 'Chicago', state: 'IL', zip: '60660'}),
    Address.create({line1: '4 Privet Dr', line2: 'Little Whinging', city: 'Surrey', state: 'IL', zip: '60089'})
  ])
  const categories = await Promise.all([
    Category.create({name: 'Dark'}),
    Category.create({name: 'Single Origin '}),
    Category.create({name: 'All'})
  ])
  const orders = await Promise.all([
    Order.create({session: 'hash', email: 'seed@email.com', status: 'Created'}),
    Order.create({session: 'hash2', email: 'seed2@email.com', status: 'Processing'})
  ])
  const orderItems = await Promise.all([
    OrderItem.create({price: 13.99, quantity: 10}),
    OrderItem.create({price: 14.99, quantity: 2})
  ])
  const products = await Promise.all([
    Product.create({
      name: 'Arawi - Deluxe',
      description: 'Single Origin Arriba Nacional, 78% cacao',
      price: 12.99,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'}),
    Product.create({
      name: 'Pacari - Super Milky',
      description: 'Single Origin Hybrid, 30% cacao',
      price: 15.99,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'})
  ])
  const reviews = await Promise.all([
    Review.create({content: 'This is a review.', rating: 3}),
    Review.create({content: 'This is another review', rating: 4})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${addresses.length} addresses`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderItems.length} orderItems`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
