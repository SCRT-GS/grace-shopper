import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store, { addToCart } from '../store'
import Sidebar, { SideBar } from './Sidebar'

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

    const products = this.props.products.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0;
    })


    const filteredProducts = products.filter((product) => {
      return product.name.indexOf(this.state.search) !== -1
    })

    return (
      <div>
        <Sidebar props={this.props} />
        <div className="ui category search">
        <div className="ui icon input">
          <input
          value={this.state.search}
          onChange={this.inputSearch}
          type="text"
          name="search"
          list="productList"
          placeholder="Search delicious chocolate..."
          className="prompt"
          />
          <i className="search icon"></i>
          <datalist id="productList">
           {products.map(company => {
            return (<option key={company.id} value={company.name}>{company.name}</option> )
           })}
          </datalist>
        </div>
        <div className="results"></div>
        </div>


        <div
          className="ui grid"

        >
        {filteredProducts.map((product) => {

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
                <h2 class="ui sub header">
                {product.name}
                </h2>
                <span>{product.price}</span>
                <h3>

                </h3>
                <h3>

                </h3>
              </Link>
              </div>
              <div className="ui segment">
                <div
                  className="ui vertical animated button"

                  onClick={() => store.dispatch(addToCart(product.id, 1, product.price))}
                >
                  <div class="hidden content">
                    +1
                  </div>
                  <div class="visible content">
                    <i class="shop icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        }
        )}
        </div>
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
