import React, {Component} from 'react'
import * as request from 'superagent'

export default class Featured extends Component {

  state = { movie: '' }

  componentDidMount() {
    request
      .get(`http://www.omdbapi.com/?apikey=ea3a5d28&t=fargo&plot=full`)
      .then(response => this.updateMovies(response.body))
      .catch(console.error)
    
  }
  updateMovies(movie) {
    this.setState({
      movie: movie
    })
  }

  render() {
    const film = this.state.movie
    return (
        <div id="featured" className="film">
            <h1>{film.Title}</h1>
            <h3>Year: {film.Year}</h3>
            <h4>Awards: {film.Awards}</h4>
            <p>Plot: <br /><i>{film.Plot}</i></p>
            <p><img src={film.Poster} alt={film.Poster}/></p>
        </div>
    )
  }
}

