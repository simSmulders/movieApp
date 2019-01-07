import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuBar extends Component {
  render() {
    return (
      <div className="menu" style={{marginBottom:15}}>
        <Link to="/">Search</Link>
        <br />
        <Link to="/featured">Featured</Link>
        <br>
        </br>
      </div>
    )
  }
}