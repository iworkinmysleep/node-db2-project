const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
	db("cars")
		.then((cars) => {
			res.status(200).json(cars);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to load cars.", err });
		});
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	db("cars")
		.where({ id })
		.first()
		.then((car) => {
			res.status(200).json(car);
		})
		.catch((err) => {
			res.status(500).json({ message: "Failed to load car.", err });
		});
});

router.post("/", (req, res) => {
	const newCar = req.body;
	db("cars")
		.insert(newCar)
		.then((ids) => {
			db("cars").where({ id: ids[0] });
		})
		.then((carEntry) => {
			res.status(201).json(carEntry);
		})
		.catch((err) => {
			res.status(500).json({ message: "Error adding car.", err });
		});
});

module.exports = router;
