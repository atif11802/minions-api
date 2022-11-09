const {
	createMinions,
	getMinions,
	updateMinion,
	deleteMinion,
} = require("./controllers/Minions");

const router = require("express").Router();

//create minions
router.post("/create", createMinions);

//get minions
router.get("/getMinions", getMinions);

//update minions
router.patch("/update/:id", updateMinion);

//delete minions
router.delete("/delete/:id", deleteMinion);

module.exports = router;
