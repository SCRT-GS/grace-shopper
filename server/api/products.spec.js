/* global describe beforeEach it */


const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/products/', () => {
    const testChocolate = {
      name: 'Test Chocolate - 100% test',
      description: 'This is single origin test choloate',
      price: 100,
      quantity: 10,
      imgURL: 'http://via.placeholder.com/100x100'
    }

    beforeEach(() => {
      return Product.create({
        name: testChocolate.name,
        description: testChocolate.description,
        price: testChocolate.price,
        quantity: testChocolate.quantity,
        imgURL: testChocolate.imgURL
      })
    })

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal(testChocolate.name)
        })
    }) // end describe('/api/products')
  })
}) // end describe('Products routes')

