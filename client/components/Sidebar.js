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

  console.log("PROPS: ", props)

    return (
      <div>
       <h5>Category</h5>
       <div>
        <h5>
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
        </h5>
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
