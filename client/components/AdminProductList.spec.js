import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AdminProductList} from './AdminProductList'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AdminProductList', () => {
let AdminProductListy;
  beforeEach(() => {
    AdminProductListy = shallow(<AdminProductList products={
      [{
      name: 'Arawi - Deluxe',
      description: 'Single Origin Arriba Nacional, 78% cacao',
      price: 1299,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'}]
  }/>)
})
  it('renders a title in an h3', () => {
    expect(AdminProductListy.find('h3.title').text()).to.be.equal('Our Products')
  })
  it('renders a form', () => {
    expect(AdminProductListy.find('form')).to.have.length(1)
})
})
