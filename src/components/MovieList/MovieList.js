import React, { Component } from "react";
import { connect } from "react-redux";
// import our components
import MovieListItem from "../MovieListItem/MovieListItem";

// Movie list is our default view within App
class MovieList extends Component {
  // render our view for React
  render() {
    return (
      <>
        {this.props.movies?.map((cur, i) => (
          <MovieListItem key={`mi-${i}`} movie={cur} />
        ))}
      </>
    );
  }
}

// pull the list of movies from the Redux store
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MovieList);
