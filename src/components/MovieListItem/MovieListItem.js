import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// MovieListItem is a fully controlled item within the MovieList
class MovieListItem extends Component {
  // handles the user clicking on the Poster image, dispatching a FETCH_DETAILS
  // saga and navigating to the details page
  handleClick = () => {
    this.props.dispatch({
      type: "FETCH_DETAILS",
      payload: this.props.movie.id,
    });
    this.props.history.push("/details");
  };

  // renders the movie for the MovieList
  render() {
    const { title, poster } = this.props.movie;
    return (
      <>
        <img onClick={this.handleClick} src={poster} />
        <h5>{title}</h5>
      </>
    );
  }
}

export default withRouter(connect()(MovieListItem));
