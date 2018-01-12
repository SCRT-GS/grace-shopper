import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { getProduct, updateProduct } from '../store'


export class AdminEditProductDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      imgURL: '',
    }

    this.submit = this.submit.bind(this);

  }

  componentDidMount() {
    const productId = Number(this.props.match.params.productId)
    const productThunk = getProduct(productId)

    store.dispatch(productThunk);
  }

  submit(event) {
    event.preventDefault();

    const product = this.props.product;
    const newName = (event.target.name.value ? event.target.name.value : product.name)
    const newDescription = (event.target.description.value ? event.target.description.value : product.description)
    const newPrice = (event.target.price.value ? event.target.price.value : product.price)
    const newQuantity = (event.target.quantity.value ? event.target.quantity.value : product.quantity)
    const newImgURL = (event.target.imgURL.value ? event.target.imgURL.value : product.imgURL)
    const updatedProduct = {
      name: newName,
      description: newDescription,
      price: newPrice,
      quantity: newQuantity,
      imgURL: newImgURL,
    }

    this.props.updateProduct(product.id, updatedProduct)
    this.props.history.push(`/admin/products`)
  }


  render() {
    const product = this.props.product

    return (
      <div>
        <h3>
          Product Details
        </h3>
        <h3>
          {product.name}
        </h3>
        <h3>
          {product.description}
        </h3>
        <h3>
          ${product.price}
        </h3>
        <h3>
          Quantity Available: {' ' + product.quantity}
        </h3>
        <img
          id="product-pic"
          src={product.imgURL}
        />
        <p>
          Enter any changes to this product's information in the form below.
        </p>
        <form
          id="productform"
          onSubmit={this.submit}
        >
          <input
            name="name"
            type="text"
            className="form-like"
            placeholder="Name"
          />
          <input
            name="description"
            type="text"
            className="form-like"
            placeholder="Description"
          />
          <input
            name="price"
            type="number"
            className="form-like"
            placeholder="price"
          />
          <input
            name="imgURL"
            type="text"
            className="form-like"
            placeholder="Image Link"
          />
          <input
            name="quantity"
            type="number"
            className="form-like"
            placeholder="Quantity"
          />

          <button
            id="submit"
            type="submit"
          >
            Save Changes
          </button>
        </form>
        <br />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    product: state.product
  }
}
const mapDispatch = { getProduct, updateProduct }

export default connect(mapState, mapDispatch)(AdminEditProductDetail)
