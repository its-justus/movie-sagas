import React, { Component } from "react";
import { connect } from "react-redux";
import MovieListItem from "../MovieListItem/MovieListItem";

class MovieList extends Component {
	render(){
		return (
			<>
				{this.props.movies?.map((cur, i) => <MovieListItem key={`mi-${i}`} movie={cur} />)}
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
	}
}

export default connect(mapStateToProps)(MovieList);