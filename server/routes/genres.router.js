const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// get all movies
router.get("/", (req, res) => {
	console.log("ROUTE: GET /api/genres/");

	// pg pool query setup
	const queryText = "SELECT * FROM genres;";

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

module.exports = router;