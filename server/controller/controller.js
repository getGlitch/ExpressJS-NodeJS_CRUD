const userDB = require("../model/model");

exports.create = (req, res) => {
	if (!req.body) {
		res.status(400).send({ message: "REquest body cannot be empty!!" });
		return;
	}

	const user = new userDB({
		name: req.body.name,
		email: req.body.email,
		contact: req.body.contact,
		gender: req.body.gender,
	});

	user
		.save(user)
		.then((data) => {
			// res.send(data);
			res.redirect("/");
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "some error occured!",
			});
		});
};

exports.findAll = (req, res) => {
	if (req.query.id) {
		const id = req.query.id;
		userDB
			.findById(id)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: "user not found",
					});
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Error retriving data",
				});
			});
	} else {
		userDB
			.find()
			.then((user) => {
				res.send(user);
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occoured",
				});
			});
	}
};

// exports.findOne = (req, res) => {};

exports.update = (req, res) => {
	if (!req.body) {
		res.status(400).send({ message: "Request body cannot be epmtied" });
	}
	const id = req.params.id;
	userDB
		.findByIdAndUpdate(id, req.body)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `User not found with id ${id} `,
				});
			} else {
				res.send(data);
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occured!",
			});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;
	userDB
		.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: "user with id : " + id + "not found",
				});
			} else {
				res.send({
					message: "user deleted...",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occured..",
			});
		});
};
