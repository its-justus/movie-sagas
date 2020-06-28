import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// MovieDetails shows the full information about the movie
class MovieDetails extends Component {
  // handler for the back button, navigates back to the home page
  back = () => {
    this.props.history.push("/");
  };

  // handler for the edit button, navigates to the EditMovieDetails page
  edit = () => {
    this.props.history.push("/edit");
  };

  // renders the MovieDetails page
  render() {
    const { id, poster, title, description, genres } = this.props.details;
    return (
      <>
        <button onClick={this.back}>Back to List</button>
        <button onClick={this.edit}>Edit</button>
        <img src={poster} />
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {genres?.map((cur, i) => (
            <li key={`genre-${i}`}>{cur}</li>
          ))}
        </ul>
      </>
    );
  }
}

// pull the movie details from the Redux store
const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

export default withRouter(connect(mapStateToProps)(MovieDetails));
