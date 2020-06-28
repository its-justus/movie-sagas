const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
	console.log("ROUTE: GET /api/movies/");
	res.sendStatus(200);
});

router.get("/:id/details", (req, res) => {
	console.log(`ROUTE: GET /api/movies/${req.params.id}/details`);
	res.sendStatus(200);
});

router.put("/:id/details", (req, res) => {
	console.log(`ROUTE: PUT /api/movies/${req.params.id}/details`);
	res.sendStatus(200);
});

module.exports = router;