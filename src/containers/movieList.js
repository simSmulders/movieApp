import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {
  renderMovie(movieData) {
    const title = movieData.Title
    const actors = movieData.Actors
    const writers = movieData.Writer
    const genre = movieData.Genre
    const directors = movieData.Director
    const languages = movieData.Language
    
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
            <p>Genre: {genre.split(',').length <= 1 ? `${genre}` : genre.split(',').map(gen => <li key={gen}>{gen}</li>)}</p>
            <p>Director: {directors.split(',').length <= 1 ? `${directors}` : directors.split(',').map(director => <li key={director}>{director}</li>)}</p>
            <p>Writer: {writers.split(',').length <= 1 ? `${writers}` : writers.split(',').map(writer => <li key={writer}>{writer}</li>)}</p>
            <p>Actors: {actors.split(',').length <= 1 ? `${actors}` : actors.split(',').map(actor => <li key={actor}>{actor}</li>)}</p>
            <p>Plot: <i>{movieData.Plot}</i></p>
            <p>Language: {languages.split(',').length <= 1 ? `${languages}` : languages.split(',').map(language => <li key={language}>{language}</li>)}</p>
            <p>Awards: {movieData.Awards}</p>
            <p><img src={movieData.Poster} alt={movieData.Poster}/></p>
            <div className="ratings">List of ratings: {movieData.Ratings.map(rating => <li className="list-group-item" key={rating.Value}>{rating.Source} : {rating.Value}</li>)}</div>
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