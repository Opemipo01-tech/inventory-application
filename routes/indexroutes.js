const { Router } = require("express");
const indexRouter = Router();

const inventoryController = require("../controllers/inventoryController");

indexRouter.get("/",inventoryController.getInventories);

module.exports = indexRouter;