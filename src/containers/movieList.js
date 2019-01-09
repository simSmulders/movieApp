import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {
  renderMovie(movieData) {
    const title = movieData.Title
    
    if (movieData.Response === 'False') {
      window.alert("Title not recognised")
    } else {
        return (
          <div key={title} className="container">
            <p>Title: {title}</p>
            <p>Year: {movieData.Year}</p>
            <p>Rated: {movieData.Rated}</p>
            <p>Released: {movieData.Released}</p>
            <p>Runtime: {movieData.Runtime}</p>
            <p>Genre: {movieData.Genre}</p>
            <p>Director: {movieData.Director}</p>
            <p>Writer: {movieData.Writer}</p>
            <p>Actors: {movieData.Actors}</p>
            <p>Plot: {movieData.Plot}</p>
            <p>Language: {movieData.Language}</p>
            <p>Awards: {movieData.Awards}</p>
            <p><img src={movieData.Poster} alt={movieData.Poster}/></p>
            <div>List of ratings: {movieData.Ratings.map(rating => <li className="list-group-item" key={rating.Value}>{rating.Source} : {rating.Value}</li>)}</div>
            <p>imdbRating: {movieData.imdbRating}</p>
            <p>imdbVotes: {movieData.imdbVotes}</p>
            <p>Type: {movieData.Type}</p>
          </div>
        )
      }
  }

  render() {
    return (
      <div>
          {this.props.movies.map(this.renderMovie)}
      </div>
    )
  }
}

function mapStateToProps({ movies }) {
  return { movies }
}

export default connect(mapStateToProps)(MovieList)