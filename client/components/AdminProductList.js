import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addProduct } from '../store'
import centsToDollarString from './centsToDollarString'

export class AdminProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      imgURL: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity,
      imgURL: this.state.imgURL
    }
    this.props.addProduct(newProduct)
    this.setState({
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      imgURL: '',
    });
  }

  render() {
    const products = this.props.products
    return (
      <div>
        <h2 className="ui icon header">
    <i className="circular money icon"></i>
      <div className="content">
    Manage Products
      </div>
    </h2>
        <ul className="ui relaxed divided list">
        {products.map((product) => {
          return (
            <div className="item"
              key={product.id} >
              <NavLink
                to={`/admin/products/${product.id}`}
                style={{ textDecoration: 'none' }}
              >
              
                
                <div className="ui grid">
                  <div className="two wide column">
                    <img

                      src={product.imgURL}
                      className="ui avatar image"
                    />
                  </div>
  <div className="eight wide column">
  <span>
                  {product.name}
                </span >
  </div>
  <div className="four wide column">
                <span  >
                  {centsToDollarString(product.price)}
                </span>
  </div>
  <div className="two wide column">
                <span >
                  {product.quantity}
                </span></div>
</div>
               
                
                
              
              </NavLink>
            </div>
          )
        }
        )}
        </ul>
        <h4 className="ui horizontal divider header">
          NEW PROUCT
        </h4>
        <section className="ui form">
          <form
            id="productform"
            onSubmit={this.handleSubmit}
          >
          <div className="fields">
            <div className="ui four wide field">
              <input
                name="name"
                type="text"
                
                onChange={this.handleChange}
                placeholder="Name"
              />
            </div>
            <div className="ui twelve wide field">
              <input
                name="description"
                type="text"
                
                onChange={this.handleChange}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="fields">
            <div className="ui four wide field">
            <input
              name="price"
              type="number"
              
              onChange={this.handleChange}
              placeholder="price"
            />
            </div>
            <div className="ui four wide field">
            <input
              name="imgURL"
              type="text"
              
              onChange={this.handleChange}
              placeholder="Image Link"
            />
            </div>
            <div className="ui eight wide field">
            <input
              name="quantity"
              type="number"
              
              onChange={this.handleChange}
              placeholder="Quantity"
            />
            </div>
          </div>

            <button
              id="submit"
              type="submit"
              className="ui right floated button"
            >
            <i className="add sign icon"></i>
              ADD
        </button>
          </form>
        </section>
      </div>

    )
  }
}



const mapState = (state) => {
  return {
    products: state.products
  }
}

const mapDispatch = { addProduct }


export default connect(mapState, mapDispatch)(AdminProductList)



