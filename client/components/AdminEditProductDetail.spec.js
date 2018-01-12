import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AdminEditProductDetail} from './AdminEditProductDetail'
import sinon, {spy} from 'sinon'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AdminEditProductDetail', () => {
let AdminEditProductDetaily;
  beforeEach(() => {
    AdminEditProductDetaily = shallow(<AdminEditProductDetail
      product={
      {
      id: 1,
      name: 'Arawi - Deluxe',
      description: 'Single Origin Arriba Nacional, 78% cacao',
      price: 1299,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'}
  } match={{
    params: {
      productId: 1
  }
}}/>)
})
it('renders the name in an h3', () => {
  expect(AdminEditProductDetaily.find('h3.product-name').text()).to.be.equal('Arawi - Deluxe')
})
it('renders the description in an h3', () => {
  expect(AdminEditProductDetaily.find('h3.product-description').text()).to.be.equal('Single Origin Arriba Nacional, 78% cacao')
})
it('renders the price in an h3', () => {
  expect(AdminEditProductDetaily.find('h3.product-price').text()).to.be.equal('$1299')
})

it('renders the quantity in an h3', () => {
  expect(AdminEditProductDetaily.find('h3.product-quantity').text()).to.be.equal('Quantity Available:  20')
})
it('renders one image', () => {
  expect(AdminEditProductDetaily.find('img')).to.have.length(1)
})
  it('renders a form', () => {
    expect(AdminEditProductDetaily.find('form')).to.have.length(1)
})


})

