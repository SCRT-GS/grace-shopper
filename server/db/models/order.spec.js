/* global describe beforeEach it */


const { expect } = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('order model', () => {
  let order;
  before(() => {
    return db.sync({force: true});
  })

  beforeEach(() => {
    order = Order.build({
      name: 'My order',
    })
  })

  describe('schema', () => {
    describe('name', () => {
      it('should not allow null values', () => {
        order.name = null;
        return order.validate().then(() => {
          throw new Error('order validated with null title')
        }).catch(err => {
          expect(err).to.exist
          expect(err.errors).to.exist
        })
      })
    })
  })
})

