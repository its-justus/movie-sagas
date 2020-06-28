import React, { Component } from "react";
import { connect } from "react-redux";

class MovieList extends Component {
	render(){
		return (
			<>
				{this.props.movies?.map((cur, i) => <p>{cur.title}</p>)}
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