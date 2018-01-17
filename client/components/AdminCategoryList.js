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

  delete(id) {
    this.props.deleteCategory(id)
    this.props.history.push(`/admin/categories`)


  }
  render() {

    const categories = this.props.categories
    let idx = -1
    return (
      <div>
        <h2 className="ui icon header">
          <i className="circular tag icon"></i>
          <div className="content">
            Manage Categories
        </div>
        </h2>
        <div className="ui grid"
        >
          {categories.map((category) => {
            const imageArr = ['http://i67.tinypic.com/2ufg96p.jpg', 'http://i66.tinypic.com/rm70gk.png', 'http://i68.tinypic.com/i3z8lz.jpg', 'http://i64.tinypic.com/5tz89c.jpg', 'http://i68.tinypic.com/2evcfg3.png']
            if (idx === 4) {
              idx = 0
            } else idx++

            return (
              <div className="four wide column" key={category.id}>


                <li className="ui list"
                >
                  <div className="content">

                    <img
                      id="product-pic"
                      src={imageArr[idx]}
                      className="ui avatar image"
                    />
                    <div className="ui  buttons">
                      <button onClick={() => this.delete(category.id)
                      }
                        className="ui right labeled icon button">
                        {category.name}
                        <i className="right remove icon"></i>
                      </button>
                    </div>
                  </div >
                </li>

              </div>


            )
          }
          )}
        </div>

        <h4 className="ui horizontal divider header">
        NEW CATEGORY
      </h4>

        <section className="ui form">
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
    categories: state.categories
  }
}

const mapDispatch = { addCategory, deleteCategory }


export default connect(mapState, mapDispatch)(AdminCategoryList)



