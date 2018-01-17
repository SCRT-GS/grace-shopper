import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store, { getProductsCategory, getCategory, addToCart } from '../store'
import centsToDollarString from './centsToDollarString'


export class Category extends Component {
  componentDidMount() {
    const categoryId = Number(this.props.match.params.categoryId)
    const productCatThunk = getProductsCategory(categoryId)
    const getCatThunk = getCategory(categoryId)
    store.dispatch(productCatThunk);
    store.dispatch(getCatThunk);
  }
  render() {
    const categories = this.props.categories
    console.log('cats:', this.props.currentCategory)
    const catProducts = this.props.allCategories
    const category = this.props.currentCategory || {name: ''}


    return (
      <div>
      <h2 className="ui icon header">
      <div className="content">
        {category.name}
    </div>
    </h2>
      <div className="ui grid">

         { catProducts.map(product => {
            return (
              <div
              className="four wide column"
                key={product.id}
              >
                <div
                  className="ui raised segments"
                >
                  <div className="ui segment" >
                    <Link
                      to={`/products/${product.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <img
                        id="product-pic"
                        src={product.imgURL}
                        className="ui fluid image"
                      />
                      <h2 className="ui sub header">{product.name}</h2>
                      <span>{centsToDollarString(product.price)}</span>
                    </Link>
                    <div className="ui segment">
                      <div
                        className="ui  vertical animated button"
                        onClick={() => store.dispatch(addToCart(product.id, 1, product.price))}>
                        <div className="hidden content">
                        +1
                      </div>
                      <div className="visible content">
                      <i className="shop icon"></i>
                    </div>
                </div>
                    </div>
                    </div>
                  </div>
                  </div> )
          })}

          </div>
          </div>


                  )
                }
              }



const mapState = (state) => {
  return {
                    categories: state.categories,
    products: state.products,
    allCategories: state.allCategories,
    currentCategory: state.currentCategory
  }
}

const mapDispatch = {getProductsCategory, getCategory}


 export default connect(mapState, mapDispatch)(Category)
