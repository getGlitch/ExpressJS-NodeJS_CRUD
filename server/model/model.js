const mongooose = require("mongoose");

const schema = new mongooose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	contact: {
		type: String,
		required: true,
		unique: true,
	},
	gender: String,
});

const userDB = mongooose.model("userdb", schema);

module.exports = userDB;
