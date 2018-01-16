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
      password: '123',
      resetPassword: true
    }),
    User.create({
      email: 'kanye@email.com',
      password: '123',
      resetPassword: true
    }),
    User.create({
      email: 'hermionegranger@email.com',
      password: '123',
      isAdmin: true
    }),
    User.create({
      email: 'ronweasley@email.com',
      password: '123',
      resetPassword: true
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
    }),
    User.create({
      email: 'courtney.napleton@gmail.com',
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
    })
  ])

  const products = await Promise.all([
    Product.create({
      name: 'Arawi - Deluxe',
      description: 'Single Origin Arriba Nacional, 78% cacao',
      price: 1299,
      quantity: 18,
      imgURL: 'http://i68.tinypic.com/2evcfg3.png'
    }),
    Product.create({
      name: 'Pacari - Super Milky',
      description: 'Single Origin Hybrid, 30% cacao',
      price: 999,
      quantity: 200,
      imgURL: 'http://i63.tinypic.com/ayanpu.png'
    }),
      Product.create({
      name: 'Valrhona - Le Noir Amer',
      description: '71%% cacao',
      price: 1599,
      quantity: 12,
      imgURL: 'http://i66.tinypic.com/rm70gk.png'
    }),
      Product.create({
      name: 'Belcolade',
      description: 'Tien Giang batch 10-2-16, 78% cacao',
      price: 2199,
      quantity: 10,
      imgURL: 'http://i63.tinypic.com/jkelok.jpg'
    }),
    Product.create({
      name: 'Trinitario',
      description: 'Port of Spain batch 10-2-16, 78% cacao',
      price: 2199,
      quantity: 10,
      imgURL: 'http://i63.tinypic.com/jkelok.jpg'
    }),
      Product.create({
      name: 'Pralus',
      description: '75% cacao',
      price: 1599,
      quantity: 99,
      imgURL: 'http://i66.tinypic.com/rm70gk.png'
    }),
      Product.create({
      name: 'Confluence - Porcelana',
      description: '70% cacao',
      price: 1199,
      quantity: 200,
      imgURL: 'http://i64.tinypic.com/5tz89c.jpg'
    }),
      Product.create({
      name: 'Soma - Chuao',
      description: '70% cacao',
      price: 1099,
      quantity: 2000,
      imgURL: 'http://i63.tinypic.com/rm38mf.png'
    }),
      Product.create({
      name: 'Domori',
      description: 'Peru, 64% cacao',
      price: 1599,
      quantity: 150,
      imgURL: 'http://i68.tinypic.com/2evcfg3.png'
    }),
    Product.create({
      name: 'Trinitario Deluxe',
      description: 'Trinidad, 64% cacao',
      price: 1599,
      quantity: 150,
      imgURL: 'http://i68.tinypic.com/2evcfg3.png'
    }),
      Product.create({
      name: 'Arete - Phantom',
      description: '70% cacao',
      price: 999,
      quantity: 20,
      imgURL: 'http://i63.tinypic.com/rm38mf.png'
    }),
      Product.create({
      name: 'Zokoko',
      description: 'Tokiala, 66% cacao',
      price: 1099,
      quantity: 20,
      imgURL: 'http://i63.tinypic.com/ayanpu.png'
    }),
    Product.create({
      name: 'Camino Verde',
      description: 'Ambato, 75% cacao',
      price: 1699,
      quantity: 2,
      imgURL: 'http://i67.tinypic.com/esnjo4.png'
    }),
    Product.create({
      name: 'Toscano Black',
      description: 'Italy, 70% cacao',
      price: 1599,
      quantity: 400,
      imgURL: 'http://i66.tinypic.com/rm70gk.png'
    }),
    Product.create({
      name: 'Toscano Blend',
      description: 'Italy, 60% cacao',
      price: 1099,
      quantity: 70,
      imgURL: 'http://i67.tinypic.com/esnjo4.png'
    }),
    Product.create({
      name: 'Toscano White',
      description: 'Italy, 50% cacao',
      price: 1299,
      quantity: 100,
      imgURL: 'http://i64.tinypic.com/5tz89c.jpg'
    }),

  ])


  const reviews = await Promise.all([
    Review.create({
      userId: 1,
      productId: 13,
      content: 'The chocolate bar is delicious, however, the bar was all cracked and the caramel seeped out causing it to be quite a mess while trying to eat. Had to scrape the caramel off of the inside of wrapper.', rating: 3
    }),
    Review.create({
      userId: 2,
      productId: 4,
      content: "This was a gift for my boyfriend...he said he would just have 1 a week....I can't tell you how quickly that DELICIOUS box of chocolates disappeared...but it definitely did NOT hang around too long! Simply DELICIOUS!", rating: 5
    }),
    Review.create({
      userId: 9,
      productId: 4,
      content: "LOVE LOVE LOVE !Perfect assortment of famous French Chocolates ! The unique box arrangement will tempt the palate through the different layers if chocolate making . The deepest chocolate is astounding as are the lighter choices which feature less Cacao Give as a gift. .or treat yourself. This is one 'oo la la' box of indulgence !", rating: 4
    }),
    Review.create({
      userId: 9,
      productId: 5,
      content: "LOVE LOVE LOVE !Perfect assortment of famous French Chocolates ! The unique box arrangement will tempt the palate through the different layers if chocolate making . The deepest chocolate is astounding as are the lighter choices which feature less Cacao Give as a gift. .or treat yourself. This is one 'oo la la' box of indulgence !", rating: 5
    }),
    Review.create({
      userId: 3,
      productId: 5,
      content: "This was a gift for my boyfriend...he said he would just have 1 a week....I can't tell you how quickly that DELICIOUS box of chocolates disappeared...but it definitely did NOT hang around too long!Simply DELICIOUS!", rating: 5
    }),
    Review.create({
      userId: 6,
      productId: 11,
      content: 'The chocolate bar is delicious, however, the bar was all cracked and the caramel seeped out causing it to be quite a mess while trying to eat. Had to scrape the caramel off of the inside of wrapper.', rating: 3
    }),
    Review.create({
      userId: 7,
      productId: 2,
      content: 'The chocolate bar is delicious, however, the bar was all cracked and the caramel seeped out causing it to be quite a mess while trying to eat. Had to scrape the caramel off of the inside of wrapper.', rating: 3
    }),
    Review.create({
      userId: 1,
      productId: 10,
      content: 'Good chocolates that were shipped quickly and packed well. Sixteen pieces from four estates that each have unique flavors. This was my second order.', rating: 3
    }),
    Review.create({
      userId: 5,
      productId: 9,
      content: 'Good chocolates that were shipped quickly and packed well. Sixteen pieces from four estates that each have unique flavors. This was my second order.', rating: 3
    }),
    Review.create({
      userId: 5,
      productId: 1,
      content: 'Good chocolates that were shipped quickly and packed well. Sixteen pieces from four estates that each have unique flavors. This was my second order.', rating: 3
    }),
    Review.create({
      userId: 2,
      productId: 10,
      content: "I bought these as a Mother's Day gift. My mom is so wonderful, she even shared some of her chocolate. Wow! These chocolates by Michel Cluizel are beautifully delicious, with subtle and lingering flavors. They are unparalleled.", rating: 3
    }),
    Review.create({
      userId: 6,
      productId: 3,
      content: "This is one of the top rated bars in the world. I recently had a chocolate tasting and we saved this bar for last. It has a lot of varied notes of flavor, but is more subtle. Not at all bitter.", rating: 5
    }), Review.create({
      userId: 5,
      productId: 8,
      content: "It really is smoother and more nuanced than any luxury chocolate available in places like Whole-Foods and Cost-Plus (High end retailers). If you have tried many different good quality chocolates then you should also try this one. At 70% cocoa mass it is unlikely to be too bitter for most, as it's excellent cocoa bean makes this less bitter than many regular semi-sweet chocolate bars.", rating: 5
    }),
    Review.create({
      userId: 11,
      productId: 7,
      content: "It really is smoother and more nuanced than any luxury chocolate available in places like Whole-Foods and Cost-Plus (High end retailers). If you have tried many different good quality chocolates then you should also try this one. At 70% cocoa mass it is unlikely to be too bitter for most, as it's excellent cocoa bean makes this less bitter than many regular semi-sweet chocolate bars.", rating: 5
    }),
    Review.create({
      userId: 2,
      productId: 16,
      content: "It really is smoother and more nuanced than any luxury chocolate available in places like Whole-Foods and Cost-Plus (High end retailers). If you have tried many different good quality chocolates then you should also try this one. At 70% cocoa mass it is unlikely to be too bitter for most, as it's excellent cocoa bean makes this less bitter than many regular semi-sweet chocolate bars.", rating: 4
    }),
    Review.create({
      userId: 4,
      productId: 6,
      content: "This is one of the top rated bars in the world. I recently had a chocolate tasting and we saved this bar for last. It has a lot of varied notes of flavor, but is more subtle. Not at all bitter.", rating: 5
    }),
    Review.create({
      userId: 9,
      productId: 14,
      content: "This is one of the top rated bars in the world. I recently had a chocolate tasting and we saved this bar for last. It has a lot of varied notes of flavor, but is more subtle. Not at all bitter.", rating: 5
    }),
    Review.create({
      userId: 8,
      productId: 15,
      content: "This is one of the top rated bars in the world. I recently had a chocolate tasting and we saved this bar for last. It has a lot of varied notes of flavor, but is more subtle. Not at all bitter.", rating: 4
    }),
    Review.create({
      userId: 3,
      productId: 9,
      content: "I bought these as a Mother's Day gift. My mom is so wonderful, she even shared some of her chocolate. Wow! These chocolates by Michel Cluizel are beautifully delicious, with subtle and lingering flavors. They are unparalleled.", rating: 3
    }),
    Review.create({
      userId: 7,
      productId: 1,
      content: "I bought these as a Mother's Day gift. My mom is so wonderful, she even shared some of her chocolate. Wow! These chocolates by Michel Cluizel are beautifully delicious, with subtle and lingering flavors. They are unparalleled.", rating: 3
    }),
    Review.create({
      userId: 8,
      productId: 8,
      content: "As noted, I first tried the Chuao bar, and had accordingly high expectations of the Amedei Limited Edition Porcelana Bar. I was not going to be disappointed. The difference between the Chuao bar and the Porcelana bar is like that of day and night. While the Chuao bar is like a day in an exotic tropical wilderness, the Porcelana bar is relatively dark, quiet and seductive, reminiscent of the femme fatale in a noir film. There is a bitterness to the chocolate that all dark chocolates have, but with this bar you must be paying attention to it to really notice the subtle presence that seems to have been there all along; by then you're so in love with the chocolate you could care less. The chocolate melts evenly, wrapping itself around your tongue and mouth, sweetly imparting fine flavors to the palate. It would be difficult to explain the amazing differences between this chocolate and those fine chocolates available in, say, a nice department store.", rating: 5
    }),  Review.create({
      userId: 6,
      productId: 7,
      content: "As noted, I first tried the Chuao bar, and had accordingly high expectations of the Amedei Limited Edition Porcelana Bar. I was not going to be disappointed. The difference between the Chuao bar and the Porcelana bar is like that of day and night. While the Chuao bar is like a day in an exotic tropical wilderness, the Porcelana bar is relatively dark, quiet and seductive, reminiscent of the femme fatale in a noir film. There is a bitterness to the chocolate that all dark chocolates have, but with this bar you must be paying attention to it to really notice the subtle presence that seems to have been there all along; by then you're so in love with the chocolate you could care less. The chocolate melts evenly, wrapping itself around your tongue and mouth, sweetly imparting fine flavors to the palate. It would be difficult to explain the amazing differences between this chocolate and those fine chocolates available in, say, a nice department store.", rating: 5
    }),
    Review.create({
      userId: 4,
      productId: 8,
      content: "This tiny small chocolate is absolutely overpriced and ridiculously small.The packaging is beautiful but mine which I had bought for a gift arrived with a tear. It can’t be return and I can’t giveit away as a gift now .Terrific!!!", rating: 3
    }),
    Review.create({
      userId: 3,
      productId: 16,
      content: "As noted, I first tried the Chuao bar, and had accordingly high expectations of the Amedei Limited Edition Porcelana Bar. I was not going to be disappointed. The difference between the Chuao bar and the Porcelana bar is like that of day and night. While the Chuao bar is like a day in an exotic tropical wilderness, the Porcelana bar is relatively dark, quiet and seductive, reminiscent of the femme fatale in a noir film. There is a bitterness to the chocolate that all dark chocolates have, but with this bar you must be paying attention to it to really notice the subtle presence that seems to have been there all along; by then you're so in love with the chocolate you could care less. The chocolate melts evenly, wrapping itself around your tongue and mouth, sweetly imparting fine flavors to the palate. It would be difficult to explain the amazing differences between this chocolate and those fine chocolates available in, say, a nice department store.", rating: 4
    }),
    Review.create({
      userId: 6,
      productId: 12,
      content: "This tiny small chocolate is absolutely overpriced and ridiculously small.The packaging is beautiful but mine which I had bought for a gift arrived with a tear. It can’t be return and I can’t giveit away as a gift now .Terrific!!!", rating: 2
    }),
    Review.create({
      userId: 3,
      productId: 2,
      content: "This tiny small chocolate is absolutely overpriced and ridiculously small.The packaging is beautiful but mine which I had bought for a gift arrived with a tear. It can’t be return and I can’t giveit away as a gift now .Terrific!!!", rating: 3
    }),
    Review.create({
      userId: 7,
      productId: 11,
      content: "This tiny small chocolate is absolutely overpriced and ridiculously small.The packaging is beautiful but mine which I had bought for a gift arrived with a tear. It can’t be return and I can’t giveit away as a gift now .Terrific!!!", rating: 2
    }),
    Review.create({
      userId: 7,
      productId: 3,
      content: "This is some of the best chocolate I've ever tasted! This is a dark chocolate, but has none of the bitterness of more common brands I've tried. Instead, this chocolate bar was creamy and delightful. It was so good I immediately ordered myself another one, as well as a different Amedei chocolate bar. I would recommend this to any chocolate lover.", rating: 4
    }),
    Review.create({
      userId: 11,
      productId: 6,
      content: "This is some of the best chocolate I've ever tasted! This is a dark chocolate, but has none of the bitterness of more common brands I've tried. Instead, this chocolate bar was creamy and delightful. It was so good I immediately ordered myself another one, as well as a different Amedei chocolate bar. I would recommend this to any chocolate lover.", rating: 4
    }),
    Review.create({
      userId: 2,
      productId: 14,
      content: "This is some of the best chocolate I've ever tasted! This is a dark chocolate, but has none of the bitterness of more common brands I've tried. Instead, this chocolate bar was creamy and delightful. It was so good I immediately ordered myself another one, as well as a different Amedei chocolate bar. I would recommend this to any chocolate lover.", rating: 4
    }),
    Review.create({
      userId: 5,
      productId: 15,
      content: "This is some of the best chocolate I've ever tasted! This is a dark chocolate, but has none of the bitterness of more common brands I've tried. Instead, this chocolate bar was creamy and delightful. It was so good I immediately ordered myself another one, as well as a different Amedei chocolate bar. I would recommend this to any chocolate lover.", rating: 4
    }),
    Review.create({
      userId: 2,
      productId: 12,
      content: "This is my favorite chocolate bar, so the taste was not an issue. I knew that it would be good. What I take an issue with is the quality of the product from this particular vendor. The cardboard wrappers surrounding the bars were slightly damaged. (They are bars that are made up of individual squares filled with caramel.) Some of the squares were not filled at all, rather the chocolate was solid. At first I thought it was a fluke, but I bought two bars and both were off. The slight damage to the outside packaging and the inconsistent quality of the bars leads me to guess that these may be factory seconds. If this is the case, I think it's information that should be revealed within the item description. Hopefully the seller will see this review and indicate if that's what the situation is.",
      rating: 4
    }),
    Review.create({
      userId: 2,
      productId: 13,
      content: "This is my favorite chocolate bar, so the taste was not an issue. I knew that it would be good. What I take an issue with is the quality of the product from this particular vendor. The cardboard wrappers surrounding the bars were slightly damaged. (They are bars that are made up of individual squares filled with caramel.) Some of the squares were not filled at all, rather the chocolate was solid. At first I thought it was a fluke, but I bought two bars and both were off. The slight damage to the outside packaging and the inconsistent quality of the bars leads me to guess that these may be factory seconds. If this is the case, I think it's information that should be revealed within the item description. Hopefully the seller will see this review and indicate if that's what the situation is.",
      rating: 4
    }),
    Review.create({
      userId: 10,
      productId: 8,
      content: "This is my favorite chocolate bar, so the taste was not an issue. I knew that it would be good. What I take an issue with is the quality of the product from this particular vendor. The cardboard wrappers surrounding the bars were slightly damaged. (They are bars that are made up of individual squares filled with caramel.) Some of the squares were not filled at all, rather the chocolate was solid. At first I thought it was a fluke, but I bought two bars and both were off. The slight damage to the outside packaging and the inconsistent quality of the bars leads me to guess that these may be factory seconds. If this is the case, I think it's information that should be revealed within the item description. Hopefully the seller will see this review and indicate if that's what the situation is.",
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
      session: 'aaa',
      email: 'murphy@email.com',
      status: 'Completed',
      userId: 2
    }),
    Order.create({
      session: 'bbb',
      email: 'murphy@email.com',
      status: 'Completed',
      userId: 2
    }),
    Order.create({
      session: 'qqq',
      email: 'murphy@email.com',
      status: 'Completed',
      userId: 2
    }),
    Order.create({
      session: 'xxx',
      email: 'murphy@email.com',
      status: 'Completed',
      userId: 2
    }),
    Order.create({
      session: 'rrr',
      email: 'murphy@email.com',
      status: 'Created',
      userId: 2
    }),
    Order.create({
      session: 'aaab',
      email: 'emptycartmcuser@email.com',
      status: 'Completed',
      userId: 1
    }),
    Order.create({
      session: 'bbbb',
      email: 'emptycartmcuser@email.com',
      status: 'Completed',
      userId: 1
    }),
    Order.create({
      session: 'qqqb',
      email: 'emptycartmcuser@email.com',
      status: 'Completed',
      userId: 1
    }),
    Order.create({
      session: 'xxxb',
      email: 'emptycartmcuser@email.com',
      status: 'Completed',
      userId: 1
    }),
    Order.create({
      session: 'aaabb',
      email: 'cody@email.com',
      status: 'Completed',
      userId: 3
    }),
    Order.create({
      session: 'bbbbb',
      email: 'cody@email.com',
      status: 'Completed',
      userId: 3
    }),
    Order.create({
      session: 'qqqbb',
      email: 'cody@email.com',
      status: 'Completed',
      userId: 3
    }),
    Order.create({
      session: 'xxxbb',
      email: 'cody@email.com',
      status: 'Completed',
      userId: 3
    }),
    Order.create({
      session: 'aaabbb',
      email: 'lebron@email.com',
      status: 'Completed',
      userId: 4
    }),
    Order.create({
      session: 'bbbbbb',
      email: 'lebron@email.com',
      status: 'Completed',
      userId: 4
    }),
    Order.create({
      session: 'qqqbbb',
      email: 'lebron@email.com',
      status: 'Completed',
      userId: 4
    }),
    Order.create({
      session: 'xxxbbb',
      email: 'kanye@email.com',
      status: 'Completed',
      userId: 5
    }),
    Order.create({
      session: 'aaabbbb',
      email: 'kanye@email.com',
      status: 'Completed',
      userId: 5
    }),
    Order.create({
      session: 'bbbbbbb',
      email: 'kanye@email.com',
      status: 'Completed',
      userId: 5
    }),
    Order.create({
      session: 'qqqbbbb',
      email: 'kanye@email.com',
      status: 'Completed',
      userId: 5
    }),
    Order.create({
      session: 'xxxbbbbb',
      email: 'kanye@email.com',
      status: 'Completed',
      userId: 5
    }),
    Order.create({
      session: 'aaabbbba',
      email: 'albusdumbledore@email.com',
      status: 'Completed',
      userId: 6
    }),
    Order.create({
      session: 'bbbbbbba',
      email: 'albusdumbledore@email.com',
      status: 'Completed',
      userId: 6
    }),
    Order.create({
      session: 'qqqbbbba',
      email: 'albusdumbledore@email.com',
      status: 'Completed',
      userId: 6
    }),
    Order.create({
      session: 'xxxbbbbbab',
      email: 'albusdumbledore@email.com',
      status: 'Completed',
      userId: 6
    }),
    Order.create({
      session: 'aaabbbbab',
      email: 'hermionegranger@email.com',
      status: 'Completed',
      userId: 7
    }),
    Order.create({
      session: 'bbbbbbbab',
      email: 'hermionegranger@email.com',
      status: 'Completed',
      userId: 7
    }),
    Order.create({
      session: 'qqqbbbbab',
      email: 'hermionegranger@email.com',
      status: 'Completed',
      userId: 7
    }),
    Order.create({
      session: 'xxxbbbbbab',
      email: 'hermionegranger@email.com',
      status: 'Completed',
      userId: 7
    }),
    Order.create({
      session: 'aaabbbbab',
      email: 'ronweasley@email.com',
      status: 'Completed',
      userId: 8
    }),
    Order.create({
      session: 'bbbbbbbab',
      email: 'ronweasley@email.com',
      status: 'Completed',
      userId: 8
    }),
    Order.create({
      session: 'qqqbbbbab',
      email: 'ronweasley@email.com',
      status: 'Completed',
      userId: 8
    }),
    Order.create({
      session: 'xxxbbbbbab',
      email: 'ronweasley@email.com',
      status: 'Completed',
      userId: 8
    }),
    Order.create({
      session: 'aaabbbbab',
      email: 'harrypotter@email.com',
      status: 'Completed',
      userId: 9
    }),
    Order.create({
      session: 'bbbbbbbab',
      email: 'harrypotter@email.com',
      status: 'Completed',
      userId: 9
    }),
    Order.create({
      session: 'qqqbbbbab',
      email: 'harrypotter@email.com',
      status: 'Completed',
      userId: 9
    }),
    Order.create({
      session: 'xxxbbbbbab',
      email: 'harrypotter@email.com',
      status: 'Completed',
      userId: 9
    }),   Order.create({
      session: 'aaabbbbab',
      email: 'courtney.napleton@gmail.com',
      status: 'Completed',
      userId: 11
    }),
    Order.create({
      session: 'bbbbbbbab',
      email: 'courtney.napleton@gmail.com',
      status: 'Completed',
      userId: 11
    }),
    Order.create({
      session: 'qqqbbbbab',
      email: 'courtney.napleton@gmail.com',
      status: 'Completed',
      userId: 11
    }),
    Order.create({
      session: 'xxxbbbbbab',
      email: 'courtney.napleton@gmail.com',
      status: 'Processing',
      userId: 11
    }),
    Order.create({
      session: 'aaabbbbab',
      email: 'jeffreylebowski@email.com',
      status: 'Completed',
      userId: 10
    }),
    Order.create({
      session: 'bbbbbbbab',
      email: 'jeffreylebowski@email.com',
      status: 'Completed',
      userId: 10
    }),
    Order.create({
      session: 'qqqbbbbab',
      email: 'jeffreylebowski@email.com',
      status: 'Completed',
      userId: 10
    }),
    Order.create({
      session: 'xxxbbbbbab',
      email: 'jeffreylebowski@email.com',
      status: 'Processing',
      userId: 10
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
      status: 'Completed',
      userId: 8
    })
  ])

  const orderItems = await Promise.all([
    OrderItem.create({
      price: 1299,
      quantity: 1,
      orderId: 1,
      productId: 1
    }),
    OrderItem.create({
      price: 1299,
      quantity: 1,
      orderId: 2,
      productId: 1
    }),
    OrderItem.create({
      price: 1299,
      quantity: 1,
      orderId: 3,
      productId: 1
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 4,
      productId: 1
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 5,
      productId: 1
    }),
    OrderItem.create({
      price: 999,
      quantity: 1,
      orderId: 6,
      productId: 2
    }),
    OrderItem.create({
      price: 999,
      quantity: 1,
      orderId: 7,
      productId: 2
    }),
    OrderItem.create({
      price: 999,
      quantity: 1,
      orderId: 8,
      productId: 2
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 9,
      productId: 2
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 10,
      productId: 2
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 11,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 12,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 13,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 14,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 15,
      productId: 6
    }),
    OrderItem.create({
      price: 1299,
      quantity: 1,
      orderId: 16,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 1,
      orderId: 17,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 1,
      orderId: 18,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 19,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 20,
      productId: 1
    }),
    OrderItem.create({
      price: 1099,
      quantity: 1,
      orderId: 21,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 1,
      orderId: 22,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 1,
      orderId: 23,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 24,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 25,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 1,
      orderId: 26,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 1,
      orderId: 27,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 1,
      orderId: 28,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 29,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 30,
      productId: 15
    }),
    OrderItem.create({
      price: 999,
      quantity: 1,
      orderId: 31,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 1,
      orderId: 32,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 1,
      orderId: 33,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 34,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 35,
      productId: 11
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 36,
      productId: 14
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 37,
      productId: 14
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 38,
      productId: 14
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 39,
      productId: 14
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 40,
      productId: 14
    }),
    OrderItem.create({
      price: 1199,
      quantity: 1,
      orderId: 41,
      productId: 7
    }),
    OrderItem.create({
      price: 1199,
      quantity: 1,
      orderId: 42,
      productId: 7
    }),
    OrderItem.create({
      price: 1199,
      quantity: 1,
      orderId: 43,
      productId: 7
    }),
    OrderItem.create({
      price: 1199,
      quantity: 2,
      orderId: 44,
      productId: 7
    }),
    OrderItem.create({
      price: 1199,
      quantity: 2,
      orderId: 45,
      productId: 7
    }),
    OrderItem.create({
      price: 1199,
      quantity: 1,
      orderId: 46,
      productId: 7
    }),
    OrderItem.create({
      price: 1199,
      quantity: 2,
      orderId: 47,
      productId: 7
    }),
    OrderItem.create({
      price: 1199,
      quantity: 2,
      orderId: 48,
      productId: 7
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 1,
      productId: 14
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 2,
      productId: 14
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 3,
      productId: 14
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 4,
      productId: 14
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 5,
      productId: 14
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 6,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 7,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 8,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 9,
      productId: 16
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 10,
      productId: 16
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 11,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 12,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 13,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 14,
      productId: 12
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 15,
      productId: 12
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 16,
      productId: 14
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 17,
      productId: 14
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 18,
      productId: 14
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 19,
      productId: 14
    }),
    OrderItem.create({
      price: 1299,
      quantity: 2,
      orderId: 20,
      productId: 11
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 21,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 22,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 23,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 24,
      productId: 6
    }),
    OrderItem.create({
      price: 1599,
      quantity: 2,
      orderId: 25,
      productId: 6
    }),
    OrderItem.create({
      price: 2199,
      quantity: 2,
      orderId: 26,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 27,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 28,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 29,
      productId: 15
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 30,
      productId: 15
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 31,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 32,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 33,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 34,
      productId: 11
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 35,
      productId: 11
    }),
    OrderItem.create({
      price: 2199,
      quantity: 2,
      orderId: 36,
      productId: 4
    }),
    OrderItem.create({
      price: 2199,
      quantity: 2,
      orderId: 37,
      productId: 4
    }),
    OrderItem.create({
      price: 2199,
      quantity: 2,
      orderId: 38,
      productId: 4
    }),
    OrderItem.create({
      price: 2199,
      quantity: 2,
      orderId: 39,
      productId: 4
    }),
    OrderItem.create({
      price: 2199,
      quantity: 2,
      orderId: 40,
      productId: 4
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 41,
      productId: 2
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 42,
      productId: 2
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 43,
      productId: 2
    }),
    OrderItem.create({
      price: 999,
      quantity: 1,
      orderId: 44,
      productId: 2
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 45,
      productId: 2
    }),
    OrderItem.create({
      price: 1599,
      quantity: 1,
      orderId: 46,
      productId: 5
    }),
    OrderItem.create({
      price: 1099,
      quantity: 2,
      orderId: 47,
      productId: 6
    }),
    OrderItem.create({
      price: 999,
      quantity: 2,
      orderId: 48,
      productId: 7
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
