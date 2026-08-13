# Inventory Management Application

A full-stack Inventory Management Application built with Node.js, Express, PostgreSQL, and EJS. The application allows users to manage inventory categories and the items belonging to each category.

Users can create categories such as **Groceries** and **Electronics**, view the items inside each category, and perform full CRUD operations on both categories and items.

## Features

### Categories
- Create new categories
- View all categories
- Update category information
- Delete categories
- View all items belonging to a specific category

### Items
- Create items inside a specific category
- View all items in a category
- Update item details
- Delete items
- Store item name, description, price, quantity, and category

### Form Validation
- Server-side form validation using `express-validator`
- Required field validation
- Category name length validation
- Validation error messages displayed to users
- Price validation
- Quantity validation

## Technologies Used

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Neon** - Hosted PostgreSQL database
- **EJS** - Server-side templating
- **node-postgres (`pg`)** - PostgreSQL client for Node.js
- **express-validator** - Server-side form validation
- **dotenv** - Environment variable management
- **HTML**
- **CSS**

## Database Structure

The application uses two main tables:

### Categories

| Column | Description |
| --- | --- |
| `id` | Unique category ID |
| `name` | Category name |
| `description` | Category description |
| `added` | Date the category was created |

### Items

| Column | Description |
| --- | --- |
| `id` | Unique item ID |
| `name` | Item name |
| `description` | Item description |
| `price` | Item price |
| `quantity` | Number of items available |
| `category_id` | ID of the category the item belongs to |

The `items` table is connected to the `categories` table using a foreign key:

```sql
category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE