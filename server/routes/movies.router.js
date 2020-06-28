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
	res.sendStatus(200);
});

// update movie details for id
router.put("/:id/details", (req, res) => {
	console.log(`ROUTE: PUT /api/movies/${req.params.id}/details`);
	res.sendStatus(200);
});

module.exports = router;