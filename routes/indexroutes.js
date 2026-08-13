const { Router } = require("express");
const indexRouter = Router();

const inventoryController = require("../controllers/inventoryController");

const { validateCategory, validateItem } = require("../middleware/validation.js");


indexRouter.get("/",inventoryController.categoriesListGet);
indexRouter.get("/items/:id",inventoryController.itemsListGet);
indexRouter.get("/new-category",inventoryController.createCategoryGet);
indexRouter.post("/new-category",validateCategory,inventoryController.createCategoryPost);
indexRouter.get("/categories/:id/update",inventoryController.updateCategoryGet);
indexRouter.post("/categories/:id/update",inventoryController.updateCategoryPost);
indexRouter.post("/categories/:id/delete",inventoryController.deleteCategoryPost);
indexRouter.get("/items/:id/new-item", inventoryController.createItemGet);
indexRouter.post("/items/:id/new-item",validateItem,inventoryController.createItemPost);
indexRouter.get("/items/:id/update", inventoryController.updateItemGet);
indexRouter.post("/items/:id/update",inventoryController.updateItemPost);
indexRouter.post("/items/:id/delete",inventoryController.deleteItemPost);

module.exports = indexRouter;