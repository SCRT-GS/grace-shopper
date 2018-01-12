import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {ReviewForm} from './ReviewForm'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('ReviewForm', () => {
  let ReviewFormish;
    beforeEach(() => {
      ReviewFormish = shallow(<ReviewForm
        product={
        {
          id: 1,
          name: 'Pacari - Super Milky',
          description: 'Single Origin Hybrid, 30% cacao',
          price: 1599,
          quantity: 20,
          imgUrl: 'http://via.placeholder.com/100x100'
    }
  }
  />)
  })

  it('renders a form', () => {
    expect(ReviewFormish.find('form')).to.have.length(1)
})
    it('renders 1 select', () => {
      expect(ReviewFormish.find('select')).to.have.length(1)
    })
    it('renders 6 options for stars', () => {
      expect(ReviewFormish.find('option')).to.have.length(6)
    })


  })
