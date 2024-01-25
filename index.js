const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const path = require("path");
const routerPath = require("./server/routes/router");
const connectDB = require("./server/database/connection");
const app = express();

// parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// mongoDB connection
connectDB();

// load assests
app.use("/css", express.static(path.resolve(__dirname, "assests/css")));
app.use("/img", express.static(path.resolve(__dirname, "assests/img")));
app.use("/js", express.static(path.resolve(__dirname, "assests/js")));

// define path to dotenv file
dotenv.config({ path: "config.env" });

// PORT number variable
const PORT = process.env.PORT || 8080;

app.use("/", routerPath);

app.listen(PORT, () => {
	console.log(`Server is Running on PORT : ${PORT}...`);
});
