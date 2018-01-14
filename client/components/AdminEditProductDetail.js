import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { getProduct, updateProduct, getProductCategories, addCategoryToProduct, removeCategoryFromProduct } from '../store'


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
    this.submitCats = this.submitCats.bind(this);
    this.delete = this.delete.bind(this);

  }

  componentDidMount() {
    const productId = Number(this.props.match.params.productId)
    const productThunk = getProduct(productId)
    const productCatsThunk = getProductCategories(productId)

    store.dispatch(productCatsThunk);
    store.dispatch(productThunk);
  }

  submit(event) {

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

submitCats(event){
  event.preventDefault();
  const categories = this.props.categories
  const productCategories = this.props.productCategories || []
  const newProdCats = productCategories.filter(category => category.name === event.target.category.value)
  const product = this.props.product;

  if (!newProdCats.length){
    const wholeCat = categories.filter(category => category.name === event.target.category.value)

    this.props.addCategoryToProduct(product.id, wholeCat)
  }

}

delete(id){
  const product = this.props.product
  this.props.removeCategoryFromProduct(product.id, id)
 }

  render() {
    const product = this.props.product
    const categories = this.props.categories
    const productCategories = this.props.productCategories || []

    return (
      <div>
        <h3
          className="product-title"
        >
          Product Details
        </h3>
        <h3
          className="product-name"
        >
          {product.name}
        </h3>
        <h3
          className="product-description"
        >
          {product.description}
        </h3>
        <h3
          className="product-price"
        >
          ${product.price}
        </h3>
        <h3
          className="product-quantity"
        >
          Quantity Available: {' ' + product.quantity}
        </h3>
        <img
          id="product-pic"
          src={product.imgURL}
        />

        Categories:

        {productCategories.map(category => {

          return (
            <ul
            key={category.name}
            >
              <li>
                {category.name}
              </li>
              <button
              onClick={() => this.delete(category.id)}
              >
                Remove Category from Product
            </button>
              </ul>
              )
        })}
          <p>
           Select a category to add to this item below.
           </p>
       <form
       id="addCatform"
       onSubmit={this.submitCats}
     >
       <select
         form="addCatform"
         name="category"
       >
         {categories.map(category => {
          return (

            <option
                className="form-like"
                key={category.id}
              value={category.name}
              >
              {category.name}
              </option>

          )}
        )}
        </select>
        <button
            id="submit"
            type="submit"
          >
            Add Category to Item
          </button>
        </form>

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

        </div>
      )}}


const mapState = (state) => {
       return {
        product: state.product,
        categories: state.categories,
        productCategories: state.productCategories
  }
}
const mapDispatch = {getProduct, getProductCategories, updateProduct, addCategoryToProduct, removeCategoryFromProduct }

export default connect(mapState, mapDispatch)(AdminEditProductDetail)
