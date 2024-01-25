const axios = require("axios");
const { response } = require("express");

exports.homeRoute = (req, res) => {
	axios
		.get("http://localhost:8085/api/users")
		.then((response) => {
			// console.log(response.data);
			res.render("index", { userData: response.data });
		})
		.catch((err) => {
			res.send(err);
		});
};

exports.add_user = (req, res) => {
	res.render("add-user");
};

exports.update_user = (req, res) => {
	axios
		.get("http://localhost:8085/api/users", {
			params: { id: req.query.id },
		})
		.then((response) => {
			// console.log(response.data);
			res.render("update_user", { updateData: response.data });
		});
};
