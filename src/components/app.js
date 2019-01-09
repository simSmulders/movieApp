import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import MovieList from '../containers/movieList';
import Featured from '../containers/featured';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import reducers from '../reducers';
import MenuBar from '../containers/menuBar';
import Featured2 from '../containers/featured2';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="container">
          <MenuBar />
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/" component={MovieList} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/featured" component={Featured2} />
        </div>
      </Provider>  
    );
  }
}