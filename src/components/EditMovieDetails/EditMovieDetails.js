import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// EditMovieDetails allows the user to edit certain information about the movie
class EditMovieDetails extends Component {
  // local state for controlling our input fields
  state = {
    titleInput: this.props.details.title,
    descriptionInput: this.props.details.description,
  };

  // cancel handler, navigates back to the details page
  cancel = () => {
    this.props.history.goBack();
  };

  // save handler, dispatches to the update details saga and navigates back to the details page
  save = () => {
    const newDetails = {
      ...this.props.details,
      title: this.state.titleInput,
      description: this.state.descriptionInput,
    };
    this.props.dispatch({ type: "UPDATE_DETAILS", payload: newDetails });
    this.props.history.push(`/details`);
  };

  // handles changes to our input fields
  handleChange = (event) => {
    const field = event.target.name;
    this.setState({ [field]: event.target.value });
  };

  // renders our form
  render() {
    const { id, poster, title, description, genres } = this.props.details;
    return (
      <>
        <button onClick={this.cancel}>Cancel</button>
        <button onClick={this.save}>Save</button>
        <img src={poster} />
        <input
          type="text"
          name="titleInput"
          value={this.state.titleInput}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="descriptionInput"
          value={this.state.descriptionInput}
          onChange={this.handleChange}
        />
        <ul>
          {genres?.map((cur, i) => (
            <li key={`genre-${i}`}>{cur}</li>
          ))}
        </ul>
      </>
    );
  }
}

// pull details from the Redux store
const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

export default withRouter(connect(mapStateToProps)(EditMovieDetails));
