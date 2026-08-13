const db = require("../db/queries");

async function categoriesListGet(req,res) {
    const categories = await db.getAllCategories();
    res.render("index",{title:"Categories List", categories:categories});
}

async function itemsListGet(req,res) {
    const categoryId = req.params.id
    
    const items = await db.getItemsInCategory(categoryId);
    res.render("items",{items:items,categoryId:categoryId});
}

async function createCategoryGet(req,res) {
    res.render("createCategory")
}

async function createCategoryPost(req,res) {
    const { name,description } = req.body;

    await db.createCategory(name,description);

    res.redirect("/")
}
async function updateCategoryGet(req,res) {
    const categoryId = req.params.id;

    const category = await db.getCategory(categoryId);

    res.render("updateCategory",{
        category:category
    });
}

async function updateCategoryPost(req,res) {
    const categoryId = req.params.id;

    const {name,description} = req.body;

    await db.updateCategory(categoryId,name,description);
    
    res.redirect("/");
}

async function deleteCategoryPost(req,res) {
    const categoryId = req.params.id;

    await db.deleteCategory(categoryId);

    res.redirect("/");
}

async function createItemGet(req,res) {
      const categoryId = req.params.id;

    res.render("createItem",{categoryId});
}

async function createItemPost(req,res) {

  const categoryId = req.params.id

    const { name,description,price,quantity } = req.body;

    await db.createItem(name,description,price,quantity,categoryId);

    res.redirect(`/items/${categoryId}`);
}

async function updateItemGet(req,res) {
    const itemId = req.params.id;

    const item = await db.getItem(itemId);

    res.render("updateItem",{item:item});
}

async function updateItemPost(req,res) {
    const itemId = req.params.id;

     const item = await db.getItem(itemId);

    const { name,description,price,quantity } = req.body;

    await db.updateItem(name,description,price,quantity,itemId);

    res.redirect(`/items/${item.category_id}`);
}

async function deleteItemPost(req,res) {
        const itemId = req.params.id;

         const item = await db.getItem(itemId);

    await db.deleteItem(itemId);

    res.redirect(`/items/${item.category_id}`);
}

module.exports = {
    categoriesListGet,
    itemsListGet,
    createCategoryGet,
    createCategoryPost,
    updateCategoryGet,
    updateCategoryPost,
    deleteCategoryPost,
    createItemGet,
    createItemPost,
    updateItemGet,
    updateItemPost,
    deleteItemPost,
}