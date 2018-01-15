/* global describe beforeEach it */


const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Category = db.model('category')

describe('Category routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/categories/', () => {
    const testChocolate = {
      name: 'test',
    }

    beforeEach(() => {
      return Category.create({
        name: testChocolate.name,
      })
    })

    it('GET /api/categories should respond with an array of all categories', () => {
      return request(app)
        .get('/api/categories')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].name).to.be.equal(testChocolate.name)
        })
    })
  }) // end describe('/api/categories')
}) // end describe('categories routes')
