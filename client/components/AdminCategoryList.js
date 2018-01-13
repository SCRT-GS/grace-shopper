import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCategory, deleteCategory } from '../store'

export class AdminCategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCategory = {
      name: this.state.name,
    }
    this.props.addCategory(newCategory)
    this.setState({
      name: '',
    });
  }

  delete(id){
   this.props.deleteCategory(id)
   this.props.history.push(`/admin/categories`)


  }
  render() {

    const categories = this.props.categories
    return (
      <div>
        <h3 className="title">Our categories</h3>
        {categories.map((category) => {
          return (
            <li
              key={category.id} >
              <NavLink
                to={`/admin/categories/${category.id}`}
                style={{ textDecoration: 'none' }}
              ></NavLink>
                <h3>
                  {category.name}
                </h3>
                <button onClick={() => this.delete(category.id)
                }>
                  Delete Category
              </button>
            </li>
          )
        }
        )}
        <h2>Add A Category</h2>
        <section >
          <form
            id="categoryform"
            onSubmit={this.handleSubmit}
          >
            <input
              name="name"
              type="text"
              className="form-like"
              onChange={this.handleChange}
              placeholder="Name"
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
    categories: state.categories
  }
}

const mapDispatch = { addCategory, deleteCategory }


export default connect(mapState, mapDispatch)(AdminCategoryList)



