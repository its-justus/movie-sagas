import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// import our components
import MovieList from '../MovieList/MovieList';

class App extends Component {
	componentDidMount = () => {
		this.props.dispatch({type: "FETCH_MOVIES"});
		this.props.dispatch({type: "FETCH_GENRES"});
	}

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default connect()(App);
