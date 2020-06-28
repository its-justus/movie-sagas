import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class MovieDetails extends Component {
  back = () => {
    this.props.history.goBack();
  };

  edit = () => {
    this.props.history.push("/edit");
  };

  render() {
    const { id, poster, title, description, genres } = this.props.details;
    return (
      <>
        <button onClick={this.back}>Back to List</button>
        <button onClick={this.edit}>Edit</button>
        <h1>{title}</h1>
        <img src={poster} />
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

const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

export default withRouter(connect(mapStateToProps)(MovieDetails));
