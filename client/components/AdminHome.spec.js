import React from 'react'
import enzyme, {shallow } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import {AdminHome} from './AdminHome'

describe('<AdminHome />', () => {

it('contains div that describes page as the Admin Dasboard', () => {
    const wrapper = shallow(<AdminHome />);
    expect(wrapper.find('h3').text()).to.be.equal('Admin Dashboard');
    })

it('renders four links', () => {
const wrapper = shallow(<AdminHome />);
expect(wrapper.find('NavLink')).to.have.length(4);
})

})
