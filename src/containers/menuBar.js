import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuBar extends Component {
  render() {
    return (
      <div className="container" style={{marginBottom:15,marginLeft:5}}>
        <ul className="nav nav-tabs">
          <li className="active" style={{marginRight:15}}><Link to="/">Search</Link></li>
          <li><Link to="/featured">Featured</Link></li>
        </ul>
      </div>
    )
  }
}


