require("dotenv").config();

const { Client } = require("pg");

const SQL =`
    CREATE TABLE IF NOT EXISTS categories (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(255),
description TEXT,
added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE items(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(100),
  description TEXT,
  price NUMERIC(10,2),
  quantity INTEGER NOT NULL DEFAULT 0,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories(name,description) 
VALUES 
  ('Groceries','Everyday food and household grocery products'),
  ('Electronics','Electronic devices and accessories');

      INSERT INTO items
      (name, description, price, quantity, category_id)
    VALUES
      ('Rice', '5kg bag of premium rice', 8500, 20, 1),
      ('Milk', '1 litre full cream milk', 2500, 15, 1),
      ('Bread', 'Freshly baked white bread', 1500, 25, 1),
      ('Eggs', 'Pack of 12 eggs', 3000, 30, 1),
      ('Laptop', '15-inch productivity laptop', 450000, 8, 2),
      ('Smartphone', '128GB Android smartphone', 250000, 12, 2),
      ('Headphones', 'Wireless over-ear headphones', 45000, 18, 2),
      ('Keyboard', 'Mechanical USB keyboard', 30000, 10, 2);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DB_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("Done");
}

main();