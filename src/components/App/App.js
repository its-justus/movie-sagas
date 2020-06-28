import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// import our components
import MovieList from "../MovieList/MovieList";
import MovieDetails from "../MovieDetails/MovieDetails";
import EditMovieDetails from "../EditMovieDetails/EditMovieDetails";

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
    this.props.dispatch({ type: "FETCH_GENRES" });
  };

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route exact path="/details">
              <MovieDetails />
            </Route>
						<Route exact path="/edit">
              <EditMovieDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
