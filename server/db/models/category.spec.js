/* global describe beforeEach it */


const { expect } = require('chai')
const db = require('../index')
const Category = db.model('category')

describe('Category model', () => {
  let category;
  before(() => {
    return db.sync({force: true});
  })

  beforeEach(() => {
    category = Category.build({
      name: 'My Category',
    })
  })

  describe('schema', () => {
    describe('name', () => {
      it('should not allow null values', () => {
        category.name = null;
        return category.validate().then(() => {
          throw new Error('category validated with null title')
        }).catch(err => {
          expect(err).to.exist
          expect(err.errors).to.exist
        })
      })
    })
  })
})
