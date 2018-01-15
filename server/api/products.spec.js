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

    it('GET /api/products should respond with an array of all products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal(testChocolate.name)
        })
    })

    it('GET /api/products/:id should respond with a single product', () => {
      return request(app)
        .get('/api/products/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal(testChocolate.name)
          expect(res.body.price).to.be.equal(testChocolate.price)
        })
    })

    it('PUT /api/products/update/:id should update a single product', () => {
      return request(app)
        .put('api/products/update/1')
        .send({
          description: 'This is a new description'
        })
        .then(res => {
          expect(res.body.body).to.be.an('object')
          expect(res.body.description).to.be.equal('This is a new description')
        })
    })

    it('POST /api/products should add a new product', () => {
      return request(app)
        .post('api/products')
        .send({
          name: 'Test Chocolate 2 - 100% test',
          description: 'This is another test choloate',
          price: 1000,
          quantity: 10,
          imgURL: 'http://via.placeholder.com/100x100'
        })
        .then(res => {
          expect(res.body.description).to.be.equal('This is a new description')
          expect(res.body.price).to.be.equal(1000)
          expect(res.body.quantity).to.be.equal(10)
        })
    })

  }) // end describe('/api/products')
}) // end describe('Products routes')

