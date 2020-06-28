## Tasks

[ ] - Set up server routing
	[ ] - /api/movies router
		[ ] - GET / (get all movies)
		[ ] - GET /:id/details (get individual movie details)
		[ ] - PUT /:id/details (update movie details)
	[ ] - /api/genres router
		[ ] - GET / (get all genres)
[ ] - MovieListItem Component
	[ ] - Movie poster
		[ ] - onClick push /details to router history
	[ ] - Title (heading)
	[ ] - Description
[ ] - MovieList Component
	[ ] - dispatch FETCH_ALL_MOVIES saga on mount
	[ ] - render list (conditional render "loading")
		[ ] - MovieListItem component
[ ] - MovieDetails Component
	[ ] - back to list button
		[ ] - onClick push / to history
	[ ] - edit button
		[ ] - onClick push /edit to history
	[ ] - dispatch FETCH_MOVIE_DETAILS on mount
	[ ] - Movie title
	[ ] - movie description
	[ ] - list of genres
[ ] - EditMovieDetails Component
	[ ] - cancel button
		[ ] - onClick history.goBack()
	[ ] - save button
		[ ] - onClick
			[ ] - dispatch UPDATE_MOVIE_DETAIL saga
			[ ] - history.goBack()
