const express = require("express");
const factoryworkerController = require("../../controller/factoryworker/factoryworkerController");
const router = express.Router();

router.get("/", factoryworkerController.modelget);
router.post("/", factoryworkerController.modelpost);
router.put("/:id", factoryworkerController.modelput);
router.delete("/:id", factoryworkerController.modeldelete);

module.exports = router;
