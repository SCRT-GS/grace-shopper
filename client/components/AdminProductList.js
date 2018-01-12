import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addProduct } from '../store'

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
        <h3>Our Products</h3>
        {products.map((product) => {
          return (
            <li
              key={product.id} >
              <NavLink
                to={`/admin/products/${product.id}`}
                style={{ textDecoration: 'none' }}
              >
                <img
                  id="product-pic"
                  src={product.imgURL}
                />
                <h3>
                  {product.name}
                </h3>
                <h3>
                  ${product.price}
                </h3>
                <h3>
                  Quantity Available: {' ' + product.quantity}
                </h3>
                <button>
                  See Product Detail
              </button>
              </NavLink>
            </li>
          )
        }
        )}
        <h2>Add A Product</h2>
        <section >
          <form
            id="productform"
            onSubmit={this.handleSubmit}
          >
            <input
              name="name"
              type="text"
              className="form-like"
              onChange={this.handleChange}
              placeholder="Name"
            />
            <input
              name="description"
              type="text"
              className="form-like"
              onChange={this.handleChange}
              placeholder="Description"
            />
            <input
              name="price"
              type="number"
              className="form-like"
              onChange={this.handleChange}
              placeholder="price"
            />
            <input
              name="imgURL"
              type="text"
              className="form-like"
              onChange={this.handleChange}
              placeholder="Image Link"
            />
            <input
              name="quantity"
              type="number"
              className="form-like"
              onChange={this.handleChange}
              placeholder="Quantity"
            />

            <button
              id="submit"
              type="submit"
            >
              Save Changes
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



