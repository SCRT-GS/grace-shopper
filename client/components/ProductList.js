import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store, {addToCart} from '../store'

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }

    this.inputSearch = this.inputSearch.bind(this)
  }

  inputSearch(evt) {
    this.setState({
      search: evt.target.value
    })
  }

  render() {

  const products = this.props.products.sort(function(a,b) {
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    if (nameA < nameB)
      return -1
    if(nameA>nameB)
      return 1
    return 0;
  })


  const filteredProducts = products.filter((product) => {
    return product.name.indexOf(this.state.search) !== -1
  })

    return (
      <div>
        <h3>Welcome to the Products Page!</h3>
        <input value={this.state.search} onChange={this.inputSearch} type="text" name="search" list="productList" placeholder="Search delicious chocolate" />
        <datalist id="productList">
        {
          products.map(company =>
          <option key={company.id} value={company.name}>{company.name}</option>)
          }
        </datalist>

        {filteredProducts.map((product) => {
          return (
            <li
            key={product.id} >
              <Link
              to={`/products/${product.id}`}
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
              </Link>
              <button onClick={() => store.dispatch(addToCart(product.id, 1, product.price))}>
                Add to Cart
                </button>
            </li>
          )
        }
        )}
      </div>
    )
  }
}


const mapState = (state) => {
  return {
    products: state.products
  }
}


export default connect(mapState)(ProductList)
