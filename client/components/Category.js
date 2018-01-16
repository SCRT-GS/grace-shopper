import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store, {getProductsCategory, addToCart} from '../store'


export class Category extends Component {



  render() {
  const categories = this.props.categories
  const allProducts = categories.map(category => {
    if ( category.id === +this.props.match.params.categoryId) {
      return category.products
    }
  })

  const filteredProducts = allProducts.filter(products => products)
  const filteredCat = filteredProducts[0]

  filteredCat.map(product => {
    return product
  })



    return (
      <div>
        {
          filteredCat.map(product => {
            return (
              <li key={product.id}>
                <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: 'none' }}
                >
                  <img
                    id="product-pic"
                    src={product.imgURL}
                  />
                  <h3>{product.name}</h3>
                  <h3>${product.price}</h3>
                </Link>
                <button onClick={() => store.dispatch(addToCart(product.id, 1, product.price))}>
                Add to Cart
                </button>
              </li>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    categories: state.categories,
    products: state.products
  }
}

const mapDispatch = {getProductsCategory}


export default connect(mapState, mapDispatch)(Category)
