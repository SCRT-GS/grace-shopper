const db = require('../server/db')
const { User, Category, Product, Review, Order, OrderItem } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'emptycartmcuser@email.com',
      password: '123'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123'
    }),
    User.create({
      email: 'cody@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      email: 'lebron@email.com',
      password: '123'
    }),
    User.create({
      email: 'kanye@email.com',
      password: '123'
    }),
    User.create({
      email: 'hermionegranger@email.com',
      password: '123'
    }),
    User.create({
      email: 'ronweasley@email.com',
      password: '123'
    }),
    User.create({
      email: 'harrypotter@email.com',
      password: '123'
    }),
    User.create({
      email: 'albusdumbledore@email.com',
      password: '123'
    }),
    User.create({
      email: 'jeffreylebowski@email.com',
      password: '123'
    })
  ])

  const categories = await Promise.all([
    Category.create({
      name: 'Dark'
    }),
    Category.create({
      name: 'Single Origin '
    }),
    Category.create({
      name: 'All'
    }),
    Category.create({
      name: 'Blend'
    }),
    Category.create({
      name: 'White'
    }),
    Category.create({
      name: 'Truffle'
    }),
    Category.create({
      name: 'Bar'
    }),
    Category.create({
      name: 'Filled'
    }),
    Category.create({
      name: 'Criollo'
    }),
    Category.create({
      name: 'Fair Trade'
    }),
    Category.create({
      name: 'Arriba Nacional'
    }),
    Category.create({
      name: 'Trinitario'
    }),
    Category.create({
      name: 'Sugar Free'
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Arawi - Deluxe',
      description: 'Single Origin Arriba Nacional, 78% cacao',
      price: 1299,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
    Product.create({
      name: 'Pacari - Super Milky',
      description: 'Single Origin Hybrid, 30% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Valrhona - Le Noir Amer',
      description: '71%% cacao',
      price: 1599,
      quantity: 1,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Confluence',
      description: 'Tien Giang batch 10-2-16, 78% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Pralus',
      description: '75% cacao',
      price: 1599,
      quantity: 99,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Domori - Porcelana',
      description: '70% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Soma - Chuao',
      description: '70% cacao',
      price: 1599,
      quantity: 2000,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Belcolade',
      description: 'Peru, 64% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Arete - Phantom',
      description: '70% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
      Product.create({
      name: 'Zokoko',
      description: 'Tokiala, 66% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
    Product.create({
      name: 'Camino Verde',
      description: 'Ambato, 75% cacao',
      price: 1599,
      quantity: 2,
      imgURL: 'http://via.placeholder.com/100x100'
    }),
    Product.create({
      name: 'Toscano Black',
      description: 'Italy, 70% cacao',
      price: 1599,
      quantity: 400,
      imgURL: 'http://via.placeholder.com/100x100'
    })

  ])


  const reviews = await Promise.all([
    Review.create({
      userId: 1,
      productId: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, lorem vel lobortis laoreet, sem ante dapibus enim, id pellentesque enim velit vel diam. Phasellus auctor in dolor sit amet aliquet. Vestibulum nulla est, convallis posuere purus vitae, aliquet dapibus elit. Nullam volutpat eros eu tempor laoreet. Nulla elit risus, faucibus nec ultricies et, pellentesque et velit. ',
      rating: 3
    }),
    Review.create({
      userId: 2,
      productId: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, lorem vel lobortis laoreet, sem ante dapibus enim, id pellentesque enim velit vel diam. Phasellus auctor in dolor sit amet aliquet. Vestibulum nulla est, convallis posuere purus vitae, aliquet dapibus elit. Nullam volutpat eros eu tempor laoreet. Nulla elit risus, faucibus nec ultricies et, pellentesque et velit. ',
      rating: 4
    })
  ])

  const orders = await Promise.all([
    Order.create({
      session: 'rrr',
      email: 'murphy@email.com',
      status: 'Created',
      userId: 2
    }),
    Order.create({
      session: 'eee',
      email: 'murphy@email.com',
      status: 'Processing',
      userId: 2
    }),
    Order.create({
      session: 'www',
      email: 'harrypotter@email.com',
      status: 'Processing',
      userId: 8
    })
  ])

  const orderItems = await Promise.all([
    OrderItem.create({
      price: 299,
      quantity: 1,
      orderId: 1,
      productId: 1
    }),
    OrderItem.create({
      price: 99,
      quantity: 1,
      orderId: 1,
      productId: 2
    }),
    OrderItem.create({
      price: 300,
      quantity: 1,
      orderId: 2,
      productId: 1
    }),
    OrderItem.create({
      price: 3000,
      quantity: 1,
      orderId: 2,
      productId: 5
    }),
    OrderItem.create({
      price: 3000,
      quantity: 1,
      orderId: 2,
      productId: 10
    })
  ])



  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderItems.length} orderItems`)
  console.log(`seeded successfully`)
}

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

console.log('seeding...')
