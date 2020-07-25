exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("cars")
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex("cars").insert([
				// required: VIN, make, model, mileage, not required: transmission type, and title status
				{
					VIN: "JH8765493",
					make: "Ford",
					model: "F-150",
					mileage: 12000,
					transmissionType: "",
					titleStatus: "",
				},
				{
					VIN: "UB40404040",
					make: "Toyota",
					model: "Avalon",
					mileage: 18000,
					transmissionType: "Auto",
					titleStatus: "Clear",
				},
				{
					VIN: "AH123456789",
					make: "Honda",
					model: "Suzuki",
					mileage: 128000,
					transmissionType: "Manual",
					titleStatus: "Salvage",
				},
			]);
		});
};
