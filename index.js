require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db");

const minionRouter = require("./routes");

// Connect to database
connectDB();

// Init Middleware
app.use(express.json());

//api minons
app.use("/api/minions", minionRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
