import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {
  renderMovie(movieData) {
    const title = movieData.Title
    const actors = movieData.Actors
    const splitActors = actors.split(',')
    const writers = movieData.Writer
    const splitWriters = writers.split(',')
    const genre = movieData.Genre
    const splitGenre = genre.split(',')
    const directors = movieData.Director
    const splitDirectors = directors.split(',')
    const languages = movieData.Language
    const splitLanguage = languages.split(',')

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
            <p>Genre: {splitGenre.length <= 1 ? `${genre}` : splitGenre.map(gen => <li key={gen}>{gen}</li>)}</p>
            <p>Director: {splitDirectors.length <= 1 ? `${directors}` : splitDirectors.map(director => <li key={director}>{director}</li>)}</p>
            <p>Writer: {splitWriters.length <= 1 ? `${writers}` : splitWriters.map(writer => <li key={writer}>{writer}</li>)}</p>
            <p>Actors: {splitActors.length <= 1 ? `${actors}` : splitActors.map(actor => <li key={actor}>{actor}</li>)}</p>
            <p>Plot: <i>{movieData.Plot}</i></p>
            <p>Language: {splitLanguage.length <= 1 ? `${languages}` : splitLanguage.map(language => <li key={language}>{language}</li>)}</p>
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