const { Minion } = require("../models/Minions");
const { minionValidator } = require("./Validator");

// @route   POST api/minions
const createMinions = async (req, res) => {
	try {
		const { name, age, color } = req.body;

		const { error } = minionValidator.validate({ name, age, color });

		if (error) {
			return res.status(400).json({ error: error.message });
		}

		const exist = await Minion.findOne({ name });

		if (exist) {
			return res.status(400).json({ msg: "Minion already exist" });
		}

		const newMinion = new Minion({
			name,
			age,
			color,
		});

		const minion = await newMinion.save();
		res.status(201).json({
			data: minion,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// @route   GET api/minions
const getMinions = async (req, res) => {
	try {
		const minions = await Minion.find();
		res.status(200).json({
			data: minions,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// @route   update api/minions/:id

const updateMinion = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, age, color } = req.body;

		const foundMinion = await Minion.findById({ _id: id });

		if (!foundMinion) {
			return res.status(404).json({ msg: "Minion not found" });
		}

		const minion = await Minion.findOneAndUpdate(
			{ _id: id },
			{ name, age, color },
			{ new: true }
		);
		res.status(200).json({
			data: minion,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// @route   delete api/minions/:id

const deleteMinion = async (req, res) => {
	try {
		const { id } = req.params;
		const foundMinion = await Minion.findById({ _id: id });
		if (!foundMinion) {
			return res.status(404).json({ msg: "Minion not found" });
		}
		const minion = await Minion.findOneAndDelete({ _id: id });
		res.status(200).json({
			data: "Minion deleted",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

module.exports = {
	createMinions,
	getMinions,
	updateMinion,
	deleteMinion,
};
