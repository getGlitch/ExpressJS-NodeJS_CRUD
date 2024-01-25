const mongooose = require("mongoose");

const connectDB = async () => {
	try {
		const con = await mongooose.connect("mongodb://localhost:27017/users");
		console.log(`MongoDB connected : ${con.Connection.name}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
