import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../store'





export const SideBar = (props) => {


  const categories = props.categories.sort(function(a,b) {
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    if (nameA < nameB)
      return -1
    if(nameA>nameB)
      return 1
    return 0;
  })

  

    return (
      <div className="category-sidebar">
       <h5>Categories</h5>
       <div className="categories-container">
        
          {
            categories.map(category => {
              if (category.name !== 'All') {
                return (
                <p key={category.id}>
                  <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
                  {category.name}
                  </Link>
                </p>
                )
              }}
            )
          }
        
        </div>
      </div>
    )

}


const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories
  }
}


export default connect(mapState)(SideBar)
