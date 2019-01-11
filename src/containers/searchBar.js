import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMovie, fetchShort } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '',
                    value: 'full'}

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
  }
  
  onInputChange(event) {
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()

    if (this.state.value === 'full') {
      this.props.fetchMovie(this.state.term)
      // this.setState({ term: '' })
    } else {
      this.props.fetchShort(this.state.term)
      // this.setState({ term: ''})
    }
  }

  onHandleChange(event) {
    if (this.state.value !== 'full') {
      this.props.fetchMovie(this.state.term)
      this.setState({value: 'full'})
    } else {
      this.props.fetchShort(this.state.term)
      this.setState({value: 'short'})
    }
  }
  
  render() {
    return (
      <div className="container">
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
              placeholder="Enter movie title"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <h5 style={{marginLeft: 10, marginRight:10, paddingTop:6}}>Plot:</h5>
            <select name="plot" style={{marginRight:5, blockSize:38}} value={this.state.value} onChange={e => this.onHandleChange(e.target.value)}>
              <option value="full">Full</option>
              <option value="short">Short</option>
            </select>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie, fetchShort }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)