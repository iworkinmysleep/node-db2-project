exports.up = function (knex, Promise) {
	return knex.schema.createTable("cars", (tbl) => {
		tbl.increments();
		// required: VIN, make, model, mileage, not required: transmission type, and title status
		tbl.text("VIN", 128).unique().notNullable();
		tbl.text("make", 128).notNullable();
		tbl.text("model", 128).notNullable();
		tbl.float("mileage").notNullable();
		tbl.text("transmissionType", 128);
		tbl.text("titleStatus", 128);
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists("cars");
};
