/* global describe beforeEach it */


const { expect } = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('product model', () => {
  let product;
  before(() => {
    return db.sync({force: true});
  })

  beforeEach(() => {
    product = Product.build({
      name: 'My product',
    })
  })

  describe('schema', () => {
    describe('name', () => {
      it('should not allow null values', () => {
        product.name = null;
        return product.validate().then(() => {
          throw new Error('product validated with null title')
        }).catch(err => {
          expect(err).to.exist
          expect(err.errors).to.exist
        })
      })
    })
  })
})

