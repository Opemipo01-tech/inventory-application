const pool = require("./pool");

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories ORDER BY name ASC");
    return rows;
}

async function getItemsInCategory(categoryId) {
    const { rows } = await pool.query(
        "SELECT * FROM items WHERE category_id = $1 ORDER BY name ASC",
        [categoryId]
    )

    return rows;
}

async function createCategory(name,description) {
    await pool.query("INSERT INTO categories(name,description) VALUES ($1,$2)",[name,description]);
    
}

async function getCategory(categoryId) {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1",
        [categoryId]
    );
    return rows[0];
}

async function updateCategory(categoryId,name,description) {
    await pool.query("UPDATE categories SET name = $1, description = $2 WHERE id = $3",[name,description,categoryId]);
}

async function deleteCategory(categoryId){
    await pool.query("DELETE  FROM categories WHERE id = $1", [categoryId]);
}

async function createItem(name,description,price,quantity,categoryId) {
    await pool.query("INSERT INTO items(name,description,price,quantity,category_id) VALUES ($1, $2, $3, $4, $5)",[name,description,price,quantity,categoryId]);
}

async function getItem(itemId) {
    const { rows } = await pool.query("SELECT * FROM items WHERE id = $1",[itemId]);
    
    return rows[0];
}

async function updateItem(name,description,price,quantity,itemId) {
    await pool.query("UPDATE items SET name = $1,description = $2,price = $3,quantity = $4 WHERE id = $5",[name,description,price,quantity,itemId]);
}

async function deleteItem(itemId) {
    await pool.query("DELETE FROM items where id = $1",[itemId]);
}

module.exports = {
    getAllCategories,
    getItemsInCategory,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
    createItem,
    getItem,
    updateItem,
    deleteItem,
}



