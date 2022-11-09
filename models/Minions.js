const mongoose = require("mongoose");

const minionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	age: {
		type: Number,
		required: true,
	},
	color: {
		type: String,
		required: true,
		trim: true,
	},
});

const Minion = mongoose.model("Minion", minionSchema);

module.exports = {
	Minion,
};
