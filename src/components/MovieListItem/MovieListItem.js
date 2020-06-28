import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from "react-router";

class MovieListItem extends Component {

	handleClick = () => {
		this.props.dispatch({type: "FETCH_DETAILS", payload: this.props.movie.id});
		// add router here
		this.props.history.push("/details");
	}

	render() {
		const {title, poster} = this.props.movie;
		return (
			<>
				<img onClick={this.handleClick} src={poster}/>
				<h5>{title}</h5>
			</>
		)
	}
}

export default withRouter(connect()(MovieListItem));