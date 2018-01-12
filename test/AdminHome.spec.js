const React = require('react')
const { expect } = require ('chai')
const {shallow } = require ('enzyme')
const { spy } = require ('sinon')
const AdminHome = require ('../client/components/AdminHome')

describe('<AdminHome />', () => {
it('contains a link to the Admin page', () => {
const wrapper = shallow(<AdminHome />);
expect(wrapper.equals(<h3>Admin Dashboard</h3>)).to.equal(true);
})
})
