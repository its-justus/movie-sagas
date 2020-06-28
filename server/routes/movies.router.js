const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// get all movies
router.get("/", (req, res) => {
	console.log("ROUTE: GET /api/movies/");

	// pg pool query setup
	const queryText = "SELECT * FROM movies;";

	// pg pool query
	pool.query(queryText)
		.then((response) => { // successful query, return rows
			console.log("\tDB: SUCCESS, rows:", response.rowCount);
			res.status(200).send(response.rows);
		})
		.catch((error) => { // db error, return error
			console.log("\tDB: ERROR:", error);
			res.sendStatus(500);
		})
});

// get movie details for id
router.get("/:id/details", (req, res) => {
	console.log(`ROUTE: GET /api/movies/${req.params.id}/details`);

	// pg pool query setup
	const queryText = `SELECT 
		movies.*, ARRAY_AGG (name) genres
		FROM movies
		LEFT OUTER JOIN movie_genres ON movies.id = movie_genres.movie_id
		LEFT OUTER JOIN genres ON movie_genres.genre_id = genres.id
		WHERE movies.id = $1
		GROUP BY movies.id;`;
	const queryValues = [req.params.id];

	// pg pool query
	pool.query(queryText, queryValues)
		.then((response) => { // successful query, return rows
			console.log("\tDB: SUCCESS, rows:", response.rowCount);
			res.status(200).send(response.rows[0]);
		})
		.catch((error) => { // db error, return error
			console.log("\tDB: ERROR:", error);
			res.sendStatus(500);
		})
});

// update movie details for id
router.put("/:id/details", (req, res) => {
	console.log(`ROUTE: PUT /api/movies/${req.params.id}/details`);
	// pg pool query setup
	const queryText = `UPDATE movies
		SET (title, description) = ($1, $2)
		WHERE id = $3;`;
	const queryValues = [req.body.title, req.body.description, req.body.id];

	// pg pool query
	pool.query(queryText, queryValues)
		.then((response) => { // successful query, return rows
			console.log("\tDB: SUCCESS, rows:", response.rowCount);
			res.sendStatus(200);
		})
		.catch((error) => { // db error, return error
			console.log("\tDB: ERROR:", error);
			res.sendStatus(500);
		})
});

module.exports = router;