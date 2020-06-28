import React, { Component } from "react";
import { connect } from "react-redux";

class MovieListItem extends Component {

	handleClick = () => {
		this.props.dispatch({type: "SET_DETAIL_ID", payload: this.props.movie.id});
		// add router here

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

export default connect()(MovieListItem);