import React, { Component } from "react";
import { connect } from "react-redux";

class MovieListItem extends Component {

	render() {
		const {title, poster} = this.props.movie;
		return (
			<>
				<img src={poster}/>
				<h5>{title}</h5>
			</>
		)
	}
}

export default MovieListItem;